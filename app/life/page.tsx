
export default function Life() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#242424] px-8 py-12 md:px-16">

      <a href="/" className="text-sm text-gray-400 hover:text-black">
        ← BACK HOME
      </a>

      <section className="mt-20">
        <p className="text-xs tracking-[0.3em] text-gray-400">
          PERSONAL ARCHIVE / 2026
        </p>

        <h1 className="mt-4 text-5xl tracking-wide">
          LIFE.
        </h1>

        <p className="mt-5 text-sm text-gray-500">
          A little collection of my everyday moments.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        <img
          src="/images/life.JPG"
          alt="My life"
          className="w-full h-72 object-cover"
        />
      </section>

    </main>
  );
}
