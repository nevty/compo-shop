import { IconContext } from "react-icons";
import { Routes, Route } from "react-router-dom";

import { ProductPage } from "@pages/product";
import { HeaderWidget } from "@widgets/header";

import { Navigation, Footer } from "./ui";

function App() {
  return (
    <div className="font-montserrat text-sm">
      <IconContext.Provider value={{ className: "min-w-6 max-h-12" }}>
        <HeaderWidget />
        <div className="w-full h-px bg-slate-200" />
        <Navigation />
        <div className="w-full h-px bg-slate-200" />
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
        <Footer />
      </IconContext.Provider>
    </div>
  );
}

export default App;
