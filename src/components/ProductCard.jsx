import { useState } from "react";

/* ====== IMPORTĒ BILDES ====== */

/* Kastītes */
import kastites1 from "../images/kastites1.jpg";

/* Termokrūze melna */
import melna1 from "../images/termokruze-melna1.jpg";

/* Termokrūze bēša */
import besa1 from "../images/termokruze-besa1.jpg";
import besa2 from "../images/termokruze-besa2.jpg";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("melna");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = {
    kastites: {
      title: "3-daļīgs kastīšu komplekts",
      price: "30 EUR",
      images: [kastites1],
      stripe: "IEVIETO_KASTĪŠU_STRIPE_LINKU"
    },
    melna: {
      title: "Ūdens termokrūze - Melna",
      price: "19 EUR",
      images: [melna1],
      stripe: "IEVIETO_MELNĀS_TERMO_LINKU"
    },
    besa: {
      title: "Ūdens termokrūze - Bēša",
      price: "19 EUR",
      images: [besa1, besa2],
      stripe: "IEVIETO_BĒŠĀS_TERMO_LINKU"
    }
  };

  const currentProduct = selectedColor === "kastites"
    ? products.kastites
    : products[selectedColor];

  const images = currentProduct.images;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section style={styles.section}>

      {/* ====== KASTĪTES ====== */}
      <div style={styles.card}>
        <img
          src={products.kastites.images[currentImageIndex % products.kastites.images.length]}
          alt="Kastītes"
          style={styles.image}
        />

        <div style={styles.imageButtons}>
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>

        <h2>{products.kastites.title}</h2>
        <p>Praktiskas, vieglas un kompaktas ēdienu kastītes.</p>
        <p><strong>Dāvanā:</strong> Digitālās receptes PDF formātā</p>
        <p style={styles.price}>{products.kastites.price}</p>

        <a
          href={products.kastites.stripe}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Turpināt uz apmaksu
        </a>
      </div>


      {/* ====== TERMO KRŪZE ====== */}
      <div style={styles.card}>
        <img
          src={images[currentImageIndex % images.length]}
          alt="Termokrūze"
          style={styles.image}
        />

        <div style={styles.imageButtons}>
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>

        <h2>Ūdens termokrūze</h2>

        <p>
          Nerūsējošā tērauda termokrūze,
          kas ilgstoši saglabā dzēriena temperatūru.
        </p>

        <div style={styles.colorWrapper}>
          <button
            style={{
              ...styles.colorButton,
              background: "#000",
              color: "#fff",
              border: selectedColor === "melna" ? "3px solid #fff" : "1px solid #555"
            }}
            onClick={() => {
              setSelectedColor("melna");
              setCurrentImageIndex(0);
            }}
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
            onClick={() => {
              setSelectedColor("besa");
              setCurrentImageIndex(0);
            }}
          >
            Bēša
          </button>
        </div>

        <p style={styles.price}>{currentProduct.price}</p>

        <a
          href={currentProduct.stripe}
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
  imageButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px"
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
    marginTop: "15px"
  },
  colorButton: {
    padding: "10px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default ProductCard;
