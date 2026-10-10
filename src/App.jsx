import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import UserCard from "./components/UserCard.jsx";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setUsers(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(q) ||
      u.address.city.toLowerCase().includes(q)
  );

  return (
    <main className="page">
      <h1>User Directory</h1>
      <SearchBar value={query} onChange={setQuery} />

      {loading && <p className="status">Loading users...</p>}
      {error && <p className="status error">Could not load users: {error}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="status">No users match your search.</p>
      )}

      <section className="grid">
        {filtered.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </section>
    </main>
  );
}
