import React from "react";
import technics from "../../public/data/technics.json";
import Card from "../containers/Card";

const Technic = () => {
  return (
    <section id="technics-section" className="mt-20 px-6">
      {/* Titre */}
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        Technics Popular of Next.js
      </h2>

      {/* Conteneur des cartes */}
      <div className="flex flex-wrap justify-center gap-6">
        {technics.map((technic) => (
          <Card
            key={technic.id} // Clé unique
            title={technic.title} // Titre
            describe={technic.describe} // Description
            site={technic.site} // Lien
          />
        ))}
      </div>
    </section>
  );
};

export default Technic;
