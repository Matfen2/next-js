import React from 'react'

const Card = ({title, describe, site}) => {
  return (
    <div
      className="rounded-md p-4 max-w-96 text-center"
      style={{ border: "1px solid var(--border)" }}
    >
      <h2 className="font-bold text-2xl text-zinc-50">{title}</h2>
      <p className="font-semibold text-gray-500 leading-6 mt-4">{describe}</p>
      <a href={site}>
        <button
          type="button"
          className="p-2 mt-4 text-zinc-50 transition-all duration-150 hover:scale-110 hover:rounded-lg"
          style={{ background: "var(--uielements)" }}
        >VOIR TUTORIEL</button>
      </a>
    </div>
  );
}

export default Card