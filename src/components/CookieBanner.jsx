import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

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
        left: 0,
        width: "100%",
        background: "#000",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <span style={{ fontSize: "14px" }}>
        Mēs izmantojam sīkdatnes (cookies), lai nodrošinātu
        mājaslapas darbību un maksājumu apstrādi.
      </span>

      <button
        onClick={acceptCookies}
        style={{
          background: "#fff",
          color: "#000",
          border: "none",
          padding: "8px 16px",
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
