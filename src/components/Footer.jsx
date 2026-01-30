export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#aaa",
        padding: "40px 20px",
        borderTop: "1px solid #222",
        textAlign: "center",
        fontSize: "14px"
      }}
    >
      <p style={{ marginBottom: "10px", color: "#fff" }}>
        © {new Date().getFullYear()} Veselības Starts
      </p>

      <p style={{ maxWidth: "700px", margin: "0 auto 15px", lineHeight: "1.6" }}>
        Pašnodarbināta persona. Tiek pārdotas fiziskas preces, gan digitālas preces, 
        kas tiek nosūtītas elektroniski pēc apmaksas.
      </p>

      <p style={{ lineHeight: "1.6" }}>
        <strong>Privātuma politika:</strong><br />
        Tiek apstrādāti tikai pasūtījuma izpildei nepieciešamie dati
        (vārds, uzvārds, e-pasts, piegādes adrese, telefona nr.). Maksājumus apstrādā Stripe.
      </p>

      <p style={{ lineHeight: "1.6", marginTop: "10px" }}>
        <strong>Atteikuma tiesības:</strong><br />
        Fiziskām precēm atteikuma tiesības 14 dienu laikā.
        Digitālajam saturam atteikuma tiesības nav piemērojamas pēc piegādes
        uzsākšanas.
      </p>

      <p style={{ marginTop: "15px", fontSize: "13px", opacity: 0.7 }}>
        Saziņai: raivo.braksis@gmail.com
      </p>
    </div>
  );
}
