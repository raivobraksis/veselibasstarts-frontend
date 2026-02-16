import { useState } from "react";

import kastitesImg from "../assets/kastites.jpg";
import melnaImg from "../assets/termokruze-melna.jpg";
import besaImg from "../assets/termokruze-besa.jpg";

const Products = () => {
  const [selectedColor, setSelectedColor] = useState("melna");

  const stripeLinks = {
    kastites: "IEVIETO_KASTĪŠU_STRIPE_LINKU",
    melna: "IEVIETO_MELNĀS_TERMO_LINKU",
    besa: "IEVIETO_BĒŠĀS_TERMO_LINKU"
  };

  const currentImage = selectedColor === "melna" ? melnaImg : besaImg;

  return (
    <section style={styles.section}>

      {/* KASTĪTES */}
      <div style={styles.card}>
        <img src={kastitesImg} alt="3-daļīgas ēdienu kastītes" style={styles.image} />

        <h2>3-daļīgs kastīšu komplekts</h2>

        <p>
          Praktiskas, vieglas un kompaktas ēdienu kastītes,
          piemērotas uzglabāšanai un līdzi ņemšanai.
        </p>

        <ul>
          <li>3 apvienojamas ēdienu kastītes</li>
          <li>Digitālās receptes dāvanā (PDF)</li>
        </ul>

        <p style={styles.price}>Cena: 30 EUR</p>

        <a
          href={stripeLinks.kastites}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Turpināt uz apmaksu
        </a>
      </div>


      {/* TERMO KRŪZE */}
      <div style={styles.card}>
        <img src={currentImage} alt="Ūdens termokrūze" style={styles.image} />

        <h2>Ūdens termokrūze</h2>

        <p>
          Kvalitatīva nerūsējošā tērauda termokrūze,
          kas uztur dzēriena temperatūru vairākas stundas.
        </p>

        <p><strong>Izvēlies krāsu:</strong></p>

        <div style={styles.colorWrapper}>
          <button
            style={{
              ...styles.colorButton,
              background: "#000",
              color: "#fff",
              border: selectedColor === "melna" ? "3px solid #fff" : "1px solid #555"
            }}
            onClick={() => setSelectedColor("melna")}
          >
            Melna
          </button>

          <button
            style={{
              ...styles.colorButton,
              background: "#d8c3a5",
              color: "#000",
              border: selectedColor === "besa" ? "3px solid #fff" : "1px solid #555"
            }}
            onClick={() => setSelectedColor("besa")}
          >
            Bēša
          </button>
        </div>

        <p style={styles.price}>Cena: 19 EUR</p>

        <a
          href={stripeLinks[selectedColor]}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Turpināt uz apmaksu
        </a>
      </div>

    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    background: "#000"
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "420px",
    width: "100%"
  },
  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px"
  },
  price: {
    fontSize: "20px",
    marginTop: "15px",
    fontWeight: "bold"
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 20px",
    background: "#fff",
    color: "#000",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold"
  },
  colorWrapper: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },
  colorButton: {
    padding: "10px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Products;
