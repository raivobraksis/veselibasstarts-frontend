function About() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Par mums</h2>

        <p style={styles.text}>
          <strong>Veselības Starts</strong> ir radīts, lai palīdzētu cilvēkiem
          padarīt ikdienu ērtāku, aktīvāku, veselīgāku un pārdomātāku.
        </p>

        <p style={styles.text}>
          Mēs piedāvājam praktiskas, 3-daļīgas kastītes, kuras ir
          ērti paņemt līdzi uz darbu, izbraucienos vai ikdienas gaitās.
        </p>

        <p style={styles.text}>
          Katrā komplektā dāvanā pievienojam digitālas receptes, kuras pēc
          pirkuma tiek nosūtītas elektroniski.
        </p>

        <p style={styles.text}>
          Mūsu mērķis ir vienkārši risinājumi cilvēkiem ar aktīvu un aizņemtu dzīvesveidu.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "80px 20px"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: "1.7"
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px"
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px"
  }
};

export default About;
