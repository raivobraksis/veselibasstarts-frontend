export default function ProductCard() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "#111",
        color: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
      }}
    >
      {/* Produkta attēls */}
      <div
        style={{
          backgroundImage: "url(/images/kastites.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "360px"
        }}
      />

      {/* Saturs */}
      <div style={{ padding: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          3 ēdienu saliekamo kastīšu komplekts
        </h2>

        <p style={{ opacity: 0.9, marginBottom: "20px" }}>
          Praktiskas, vieglas un kompaktas ēdienu kastītes,
          kuras lieliski piemērotas līdzi ņemšanai uz darbu,
          izbraucieniem un aktīvai ikdienai.
        </p>

        <h4>Komplektā ietilpst:</h4>
        <ul style={{ lineHeight: "1.8" }}>
          <li>🥗 3 saliekamas ēdienu kastītes</li>
          <li>📘 Digitāla recepšu grāmata dāvanā</li>
        </ul>

        <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.85 }}>
          Digitālā recepšu grāmata tiks nosūtīta uz jūsu e-pastu
          pēc veiksmīgas apmaksas.
        </p>

        <h3 style={{ marginTop: "20px" }}>Cena: 30 EUR</h3>

        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Piegādes veids un adrese tiek izvēlēti nākamajā solī.
        </p>

        <a
          href="https://buy.stripe.com/00w4gBae51mf7E80pA3Nm06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              marginTop: "30px",
              background: "#ffffff",
              color: "#000000",
              border: "none",
              padding: "14px 34px",
              borderRadius: "40px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Turpināt uz apmaksu
          </button>
        </a>
      </div>
    </div>
  );
}
