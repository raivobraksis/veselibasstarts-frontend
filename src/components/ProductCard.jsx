export default function ProductCard({ title, price, image }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        padding: "40px 20px",
        marginBottom: "30px",
        textAlign: "center"
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        {price} EUR
      </p>
      <button>Pirkt</button>
    </div>
  );
}