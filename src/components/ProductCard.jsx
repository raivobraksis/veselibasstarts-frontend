import { useState } from "react";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("melna");
  const [currentImage, setCurrentImage] = useState(0);

  /* ===== TERMOKRŪZES BILDES ===== */
  const termoImages = [
    "/images/termo1.jpg",
    "/images/termo2.jpg",
    "/images/termo3.jpg"
  ];

  const stripeLinks = {
    kastites: "IEVIETO_KASTĪŠU_STRIPE_LINKU",
    melna: "IEVIETO_MELNĀS_TERMO_LINKU",
    besa: "IEVIETO_BĒŠĀS_TERMO_LINKU"
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === termoImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? termoImages.length - 1 : prev - 1
    );
  };

  return (
    <section style={styles.section}>

      {/* ================= KASTĪTES ================= */}
      <div style={styles.card}>
        <img
          src="/images/kastites.jpg"
          alt="3-daļīgas ēdienu kastītes"
          style={styles.image}
        />

        <h2>3-daļīgs kastīšu komplekts</h2>

        <p>
          Praktiskas, vieglas un saliekamas ēdienu kastītes.
        </p>

        <p><strong>Dāvanā:</strong> Digitālās receptes PDF formātā</p>

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


      {/* ================= TERMOKRŪZES ================= */}
      <div style={styles.card}>
        <img
          src={termoImages[currentImage]}
          alt="Ūdens termokrūze"
          style={styles.image}
        />

        <div style={styles.imageNav}>
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>

        <h2>Ūdens termokrūze</h2>

        <p>
          Nerūsējošā tērauda termokrūze,
          kas saglabā dzēriena temperatūru.
        </p>

        <div style={styles.colorWrapper}>
          <button
            style={{
              ...styles.colorButton,
              background: "#000",
              color: "#fff",
              border: selectedColor === "melna"
                ? "3px solid #fff"
                : "1px solid #555"
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
              border: selectedColor === "besa"
                ? "3px solid #fff"
                : "1px solid #555"
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
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  imageNav: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px"
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

export default ProductCard;
