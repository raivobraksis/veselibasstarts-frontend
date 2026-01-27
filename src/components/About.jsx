export default function About() {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "80px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Kas mēs esam
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "20px" }}>
          <strong>Veselības Starts</strong> ir radīts ar mērķi palīdzēt cilvēkiem
          dzīvot veselīgāk, vienkāršāk un apzinātāk arī aizņemtā ikdienā.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "20px" }}>
          Mēs piedāvājam praktiskas 3 ēdienu kastītes, kuras ir viegli saliekamas,
          ērti paņemamas līdzi uz darbu, ceļojumos vai ikdienas gaitās.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "20px" }}>
          Katrā kastīšu komplektā <strong>dāvanā</strong> ir iekļautas receptes,
          kuras pēc pirkuma tiek nosūtītas digitāli uz jūsu e-pastu.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Mūsu mērķis ir padarīt veselīgu uzturu pieejamu ikvienam - bez liekas
          sarežģītības.
        </p>
      </div>
    </section>
  );
}
