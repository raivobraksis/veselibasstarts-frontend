export default function ProductCard({ title, price, image, link }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.65),
          rgba(0,0,0,0.65)
        ), url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
        minHeight: "280px",
        padding: "30px 20px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#ffffff",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
      }}
    >
      <h3 style={{ marginBottom: "10px", fontSize: "22px" }}>
        {title}
      </h3>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        {price} EUR
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            background: "#ffffff",
            color: "#000000",
            border: "none",
            padding: "12px 26px",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Pirkt
        </button>
      </a>
    </div>
  );
}
