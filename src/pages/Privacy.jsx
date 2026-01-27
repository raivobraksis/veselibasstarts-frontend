export default function Privacy() {
  return (
    <div style={{ background: "#000", color: "#fff", padding: "60px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>Privātuma politika</h1>

        <p>
          Šī privātuma politika nosaka, kā tiek apstrādāti personas dati,
          izmantojot vietni “Veselības Starts”.
        </p>

        <h3>Datu pārzinis</h3>
        <p>
          Pašnodarbināta persona<br />
          Zīmols: Veselības Starts<br />
          E-pasts: info@tavs-domens.lv
        </p>

        <h3>Kādi dati tiek apstrādāti</h3>
        <ul>
          <li>Vārds, uzvārds</li>
          <li>E-pasta adrese</li>
          <li>Piegādes adrese</li>
          <li>Maksājuma informācija (apstrādā Stripe)</li>
        </ul>

        <h3>Datu apstrādes mērķis</h3>
        <p>
          Dati tiek izmantoti pasūtījuma apstrādei, piegādei un digitālā
          satura nosūtīšanai.
        </p>

        <h3>Datu glabāšana</h3>
        <p>
          Maksājumu dati tiek apstrādāti caur Stripe un netiek glabāti šajā
          vietnē.
        </p>

        <h3>Tiesības</h3>
        <p>
          Jums ir tiesības pieprasīt piekļuvi saviem datiem, to labošanu vai
          dzēšanu, sazinoties pa e-pastu.
        </p>
      </div>
    </div>
  );
}
