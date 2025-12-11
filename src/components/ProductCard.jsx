export default function ProductCard({ title, price }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "10px", marginBottom: "20px", textAlign: "center" }}>
      <h3>{title}</h3>
      <p>{price} EUR</p>
      <button style={{ padding: "10px 20px", background: "black", color: "white", borderRadius: "8px", border: "none", cursor: "pointer" }}>
        Pirkt (drīz būs pieejams)
      </button>
    </div>
  );
}