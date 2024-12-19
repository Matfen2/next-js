import React from 'react'

const Contact = () => {
  return (
    <section id="contact-section" className="mt-20">
      <h2 className="text-azure text-center text-2xl font-bold text-zinc-50">
        Contact
      </h2>
      <form className="space-y-6 max-w-3xl md:max-w-4xl mx-auto mt-6 mb-8">
        {/* Ligne des champs d'entrée */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full md:w-1/2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full md:w-1/2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Zone de texte */}
        <textarea
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}

export default Contact