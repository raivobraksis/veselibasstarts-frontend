const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <p style={styles.text}>
          © 2026 Veselības Starts
        </p>

        <p style={styles.text}>
          Pašnodarbināta persona. Tiek pārdotas fiziskas preces, kā arī
          digitāls saturs, kas tiek nosūtīts elektroniski pēc apmaksas.
        </p>

        <div style={styles.section}>
          <strong>Informācija par pārdevēju</strong>
          <p style={styles.text}>
            Vārds, uzvārds: Raivo Brakšis<br />
            Statuss: Pašnodarbināta persona (Latvija)<br />
            E-pasts: <a href="mailto:raivo.braksis@gmail.com" style={styles.link}>
              veselibasstarts@gmail.com
            </a>
          </p>
        </div>

        <div style={styles.section}>
          <strong>Privātuma politika</strong>
          <p style={styles.text}>
            Tiek apstrādāti tikai pasūtījuma izpildei nepieciešamie dati:
            vārds, uzvārds, e-pasts, piegādes adrese un tālruņa numurs.
            Maksājumus apstrādā Stripe Payments Europe Ltd.
          </p>
        </div>

        <div style={styles.section}>
          <strong>Atteikuma tiesības</strong>
          <p style={styles.text}>
            Fiziskām precēm atteikuma tiesības ir 14 dienu laikā no preces
            saņemšanas dienas. Digitālajam saturam (PDF receptes), kas tiek
            nosūtīts elektroniski pēc apmaksas, atteikuma tiesības netiek
            piemērotas pēc piegādes uzsākšanas.
          </p>
        </div>

        <div style={styles.section}>
          <strong>Sīkdatnes</strong>
          <p style={styles.text}>
            Vietnē tiek izmantotas tikai tehniskās sīkdatnes, kas nepieciešamas
            lapas darbībai un maksājumu nodrošināšanai. Reklāmas vai izsekošanas
            sīkdatnes netiek izmantotas.
          </p>
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#000000",
    color: "#cccccc",
    padding: "60px 20px",
    marginTop: "80px"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center"
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "10px 0"
  },
  section: {
    marginTop: "25px"
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline"
  }
};

export default Footer;
