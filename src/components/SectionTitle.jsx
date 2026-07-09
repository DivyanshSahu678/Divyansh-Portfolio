function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-16">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[#ccff00]">
        {number}
      </p>

      <h2 className="text-4xl font-black md:text-6xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;