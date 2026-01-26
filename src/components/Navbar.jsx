export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#000000",
        color: "#ffffff"
      }}
    >
      {/* LOGO / NOSAUKUMS */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        Veselības Starts
      </div>

      {/* NAVIGĀCIJA */}
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={linkStyle}>
          Sākums
        </a>

        <a href="/privacy.html" style={linkStyle}>
          Privātuma politika
        </a>

        <a href="/terms.html" style={linkStyle}>
          Noteikumi
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "14px"
};
