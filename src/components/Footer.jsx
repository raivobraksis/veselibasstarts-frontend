export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #222",
        padding: "40px 20px",
        textAlign: "center",
        fontSize: "14px",
        opacity: 0.85
      }}
    >
      <p>© {new Date().getFullYear()} Veselības Starts</p>

      <p style={{ marginTop: "10px" }}>
        Pašnodarbināta persona. Digitālas dāvanas tiek nosūtītas elektroniski pēc apmaksas.
      </p>

      <div style={{ marginTop: "15px" }}>
        <p>
          <strong>Privātuma politika</strong><br />
          Mēs apstrādājam tikai pasūtījuma izpildei nepieciešamos datus
          (vārds, e-pasts, piegādes adrese). Maksājumi tiek apstrādāti ar Stripe.
        </p>

        <p style={{ marginTop: "10px" }}>
          <strong>Atteikuma tiesības</strong><br />
          Fiziskām precēm atteikums iespējams 14 dienu laikā.
          Digitālajam saturam (receptes) – saskaņā ar ES noteikumiem atteikuma
          tiesības neattiecas pēc piegādes uzsākšanas.
        </p>
      </div>
    </footer>
  );
}
