import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";


export default function App() {
return (
<>
<Navbar />
<Hero />


<h2 className="section-title">Mūsu produkti</h2>
<div className="products-grid">
<ProductCard
title="Individuāls uztura plāns"
price="50 EUR"
description="Pilnībā pielāgots uztura plāns + iespēja sazināties ar treneri."
/>


<ProductCard
title="Treniņu plāns (Mājas, 8 ned.)"
price="30 EUR"
description="Efektīvs treniņu plāns mājas apstākļiem."
/>


<ProductCard
title="Treniņu plāns (Zāle, 8 ned.)"
price="30 EUR"
description="Profesionāli izstrādāts treniņu plāns sporta zālei."
/>


<ProductCard
title="Receptes – 30 ēdieni"
price="30 EUR"
description="Veselīgas un sabalansētas receptes ikdienai."
/>


<ProductCard
title="Svētku receptes"
price="10 EUR"
description="Ziemassvētku un Jaungada receptes."
/>
</div>


<Footer />
</>
);
}
