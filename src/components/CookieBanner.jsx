import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(
    !localStorage.getItem("cookiesAccepted")
  );

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#111",
        color: "#fff",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        Šī vietne izmanto sīkdatnes, lai nodrošinātu tās darbību un uzlabotu
        lietošanas pieredzi.
      </p>

      <button
        onClick={acceptCookies}
        style={{
          background: "#fff",
          color: "#000",
          border: "none",
          padding: "8px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Piekrītu
      </button>
    </div>
  );
}
