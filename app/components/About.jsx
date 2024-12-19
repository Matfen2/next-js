import React from "react";

const About = () => {
  return (
    <section id="about-section" className="mx-auto px-6 py-10">
      {/* Titre de la section */}
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        What is Next.js?
      </h2>

      {/* Contenu principal */}
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Colonne gauche : Description */}
          <div className="w-full md:w-2/3">
            <p className="text-xl text-center font-semibold text-white leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Colonne droite : Installation */}
          <div className="w-full md:w-1/3">
            <h3 className="text-center text-xl font-bold text-white mb-6">
              For installation:
            </h3>
            <div className="flex flex-col items-center gap-4">
              {/* Commande 1 */}
              <span
                className="border p-4 rounded-lg text-white text-center font-semibold"
                style={{ background: "var(--uielements)" }}
              >
                npx create-next-app@latest ./
              </span>
              <p className="text-white font-medium">or</p>
              {/* Commande 2 */}
              <span
                className="border p-4 rounded-lg text-white text-center font-semibold"
                style={{ background: "var(--uielements)" }}
              >
                yarn create-next-app@latest ./
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
