export default function UserCard({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p className="company">{user.company.name}</p>
    </article>
  );
}
