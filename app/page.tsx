
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#242424]">

      {/* 顶部导航 */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <h1 className="text-xl font-bold tracking-[0.2em]">
          MY ARCHIVE.
        </h1>

        <div className="flex gap-6 text-xs tracking-widest md:gap-10">
          <a href="#home" className="hover:opacity-50">HOME</a>
          <a href="#life" className="hover:opacity-50">LIFE</a>
          <a href="#idols" className="hover:opacity-50">IDOLS</a>
          <a href="#hobbies" className="hover:opacity-50">HOBBIES</a>
        </div>
      </nav>

      {/* 首页主视觉 */}
      <section
        id="home"
        className="px-8 pb-20 pt-24 md:px-16 md:pt-36"
      >
        <p className="mb-6 text-xs tracking-[0.4em] text-gray-500">
          WELCOME TO MY LITTLE WORLD
        </p>

        <h2 className="text-5xl font-light leading-tight tracking-tight md:text-8xl">
          A LITTLE
          <br />
          WORLD OF
          <br />
          <span className="italic">MY OWN.</span>
        </h2>

        <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <p className="max-w-md text-sm leading-7 text-gray-500">
            A collection of moments, people and things I love.
            <br />
            Recording my life, one moment at a time.
          </p>

          <p className="text-xs tracking-widest text-gray-400">
            PERSONAL ARCHIVE / 2026
          </p>
        </div>
      </section>

      {/* 内容入口 */}
      <section className="grid grid-cols-1 gap-5 px-8 pb-24 md:grid-cols-3 md:px-16">

        <a
           href="/life" id="life"
          className="group border-t border-gray-300 pt-5"
        >
          <img
  src="/images/life.JPG"
  alt="Life"
  className="h-72 w-full object-contain"
/>
          <div className="mt-5 flex justify-between">
            <h3 className="text-xl tracking-widest">LIFE</h3>
            <span>↗</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
           A little collection of my everyday moments.
          </p>
        </a>

        <a
  href="/idols"
  id="idols"
          className="group border-t border-gray-300 pt-5"
        >
          <img
  src="/images/idols.JPG"
  alt="Idols"
  className="h-72 w-full object-contain"
/>
          <div className="mt-5 flex justify-between">
            <h3 className="text-xl tracking-widest">IDOLS</h3>
            <span>↗</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            The mermeries of my favorite idols and artists.
          </p>
        </a>

        <a
  href="/hobbies"
  id="hobbies"
          className="group border-t border-gray-300 pt-5"
        >
          <img
  src="/images/hobbies.JPG"
  alt="Hobbies"
  className="h-72 w-full object-contain"
/>
         <div className="mt-5 flex justify-between">
            <h3 className="text-xl tracking-widest">HOBBIES</h3>
            <span>↗</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            A collection of my creative pursuits and artistic endeavors.
          </p>
        </a>

      </section>

      {/* 页脚 */}
      <footer className="border-t border-gray-200 px-8 py-8 md:px-16">
        <div className="flex flex-col justify-between gap-3 text-xs text-gray-400 md:flex-row">
          <p>MY ARCHIVE. © 2026</p>
          <p>MADE WITH LOVE.</p>
        </div>
      </footer>

    </main>
  );
}