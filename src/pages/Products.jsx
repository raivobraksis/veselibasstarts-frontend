import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        padding: "80px 20px",
        boxSizing: "border-box"
      }}
    >
      {/* Virsraksts */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ color: "#ffffff", fontSize: "36px", marginBottom: "10px" }}>
          Mūsu produkts
        </h1>

        <p style={{ color: "#cccccc", maxWidth: "600px", margin: "0 auto" }}>
          Praktiski risinājumi ērtai un veselīgai ikdienai.
        </p>
      </div>

      {/* Produkta karte */}
      <ProductCard />

      {/* Par mums */}
      <div
        style={{
          marginTop: "80px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#cccccc",
          fontSize: "16px",
          lineHeight: "1.7"
        }}
      >
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Kas mēs esam?
        </h2>

        <p>
          Veselības Starts ir zīmols, kas rada praktiskus produktus ikdienai -
          ērtus, funkcionālus un piemērotus aktīvam dzīvesveidam.
          Mūsu mērķis ir palīdzēt cilvēkiem rūpēties par sevi vienkāršā
          un ilgtspējīgā veidā.
        </p>
      </div>
    </div>
  );
}
