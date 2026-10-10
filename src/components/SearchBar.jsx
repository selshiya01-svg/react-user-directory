export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name or city"
      aria-label="Search users"
    />
  );
}
