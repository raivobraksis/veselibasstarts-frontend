export default function ProductCard({ stripeLink }) {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "#111",
        color: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
      }}
    >
      {/* Produkta attēls */}
      <div
        style={{
          backgroundImage: "url(/images/kastites.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "360px"
        }}
      />

      {/* Saturs */}
      <div style={{ padding: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          3 daļīgs kastīšu komplekts
        </h2>

        <p style={{ opacity: 0.9, marginBottom: "20px" }}>
          Praktiskas, vieglas un kompaktas ēdienu kastītes,
          kuras ērti paņemt līdzi uz darbu, sporta zāli vai izbraucienos.
          Kastītes ir saliekamas, aizņem maz vietas un ir piemērotas
          ikdienas lietošanai.
        </p>

        <h4>Komplektā ietilpst:</h4>
        <ul>
          <li>🥗 3 saliekamas ēdienu kastītes</li>
          <li>👜 Piemērotas pārnēsāšanai</li>
          <li>♻️ Vieglas un atkārtoti lietojamas</li>
          <li>📘 Digitāla recepšu grāmata dāvanā</li>
        </ul>

        <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.85 }}>
          <strong>Recepšu grāmata</strong> tiks nosūtīta digitāli uz e-pastu
          pēc apmaksas veikšanas.
        </p>

        <h3 style={{ marginTop: "20px" }}>Cena: 30 EUR</h3>

        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Piegādes veids un adrese tiek izvēlēti nākamajā solī.
        </p>

        <a
          href={stripeLink}
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
