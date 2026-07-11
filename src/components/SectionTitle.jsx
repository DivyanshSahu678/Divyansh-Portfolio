function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4">
        <span className="text-cyan-400 text-lg font-mono">
          {number}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {title}
        </h2>

        <div className="h-px bg-gray-700 flex-1 ml-4"></div>
      </div>

      {subtitle && (
        <p className="mt-5 text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;