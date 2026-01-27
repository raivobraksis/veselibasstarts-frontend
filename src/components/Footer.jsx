export default function Footer() {
  return (
    <footer
      style={{
        background: "#000000",
        color: "#cccccc",
        padding: "40px 20px",
        marginTop: "80px",
        borderTop: "1px solid #222"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          textAlign: "center"
        }}
      >
        <p style={{ fontSize: "14px" }}>
          © {new Date().getFullYear()} Veselības Starts
        </p>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="/privacy"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Privātuma politika
          </a>

          <a
            href="/terms"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Lietošanas noteikumi & atteikuma tiesības
          </a>
        </div>

        <p style={{ fontSize: "12px", opacity: 0.7 }}>
          Digitālās dāvanas tiek nosūtītas elektroniski pēc apmaksas.
        </p>
      </div>
    </footer>
  );
}
