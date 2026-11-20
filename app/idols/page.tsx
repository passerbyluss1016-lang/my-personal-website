
export default function Idols() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#242424] px-8 py-12 md:px-16">

      <a href="/" className="text-sm text-gray-400 hover:text-black">
        ← BACK HOME
      </a>

      <section className="mt-20">
        <p className="text-xs tracking-[0.3em] text-gray-400">
          MY FAVORITE PEOPLE / 2026
        </p>

        <h1 className="mt-4 text-5xl tracking-wide">
          IDOLS.
        </h1>

        <p className="mt-5 text-sm text-gray-500">
          Stages, music and memories worth keeping.
        </p>
      </section>

      <section className="mt-20">
  <div className="flex items-end justify-between mb-8">
    <div>
      <p className="text-xs tracking-[0.3em] text-gray-400">
        A COLLECTION OF MOMENTS
      </p>
      <h2 className="mt-3 text-2xl tracking-wide">
        PHOTO WALL.
      </h2>
    </div>

    <p className="text-xs text-gray-400">
      01 — 03
    </p>
  </div>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

  {/* 左边照片组 */}
  <div className="flex flex-col gap-5">
    <img
      src="/images/idol-01.JPG"
      alt="Idol memory 1"
      className="w-[85%] h-auto object-contain mx-auto"
    />

    <div className="grid grid-cols-2 gap-4">
      <img
        src="/images/idol-03.JPG"
        alt="Idol memory 3"
        className="w-full h-auto object-contain"
      />

      <img
        src="/images/idol-04.JPG"
        alt="Idol memory 4"
        className="w-full h-auto object-contain"
      />
    </div>

    <img
      src="/images/idol-05.JPG"
      alt="Idol memory 5"
     className="w-[75%] h-auto object-contain mx-auto"
    />
  </div>

  {/* 右边照片组 */}
  <div className="flex flex-col gap-5 md:mt-12">
    <img
      src="/images/idol-02.JPG"
      alt="Idol memory 2"
      className="w-full h-auto object-contain"
    />

    <img
      src="/images/idol-06.JPG"
      alt="Idol memory 6"
      className="w-full h-auto object-contain"
    />
  </div>

</div>
</section>
<section className="mt-24">
  <p className="text-xs tracking-[0.3em] text-gray-400">
    LITTLE MEMORIES
  </p>

  <h2 className="mt-3 text-2xl tracking-wide">
    MY DIARY.
  </h2>

  <div className="mt-10 border-t border-gray-200">
    <div className="py-6 border-b border-gray-200 grid grid-cols-4 gap-4">
      <p className="text-xs text-gray-400">2026.11</p>
      <div className="col-span-3">
        <h3 className="text-sm">A day with you.</h3>
<p className="mt-3 text-sm leading-7 text-gray-500">
  Some moments deserve to be kept forever. A stage, a song, 
  and a memory that belongs to me.
</p>
      </div>
    </div>
  </div>
</section>
<section className="mt-24">
  <p className="text-xs tracking-[0.3em] text-gray-400">
    EVERY MOMENT MATTERS
  </p>

  <h2 className="mt-3 text-2xl tracking-wide">
    TIMELINE.
  </h2>

  <div className="mt-10 border-l border-gray-200 ml-2">

  <div className="relative pl-8 pb-10">
    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#242424]"></span>
    <p className="text-xs text-gray-400">2026.11.21 · HEFEI</p>
   <h3 className="mt-2 text-sm">HIGH5 — EFF（5）ct</h3>
    <p className="mt-2 text-sm text-gray-500">
      Another night, another memory to keep.
    </p>
  </div>

  <div className="relative pl-8 pb-10">
    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-300"></span>
    <p className="text-xs text-gray-400">2026.10.07 · CHENGDU</p>
    <h3 className="mt-2 text-sm">WayV — ON THE WAY</h3>
    <p className="mt-2 text-sm text-gray-500">
      A night filled with music and excitement.
    </p>
  </div>

  <div className="relative pl-8 pb-10">
    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-300"></span>
    <p className="text-xs text-gray-400">2026.09.19 · HANGZHOU</p>
    <h3 className="mt-2 text-sm">HIGH5 — EFF（5）ct</h3>
    <p className="mt-2 text-sm text-gray-500">
      A special encounter on the tour.
    </p>
  </div>

  <div className="relative pl-8 pb-10">
    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-300"></span>
    <p className="text-xs text-gray-400">2026.08.22 · NINGBO</p>
    <h3 className="mt-2 text-sm">HIGH5 — ROMON Anniversary</h3>
    <p className="mt-2 text-sm text-gray-500">
      Celebrating another year together.
    </p>
  </div>

  <div className="relative pl-8">
    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-300"></span>
    <p className="text-xs text-gray-400">2026.06.06 · CHANGSHA</p>
    <h3 className="mt-2 text-sm">HIGH5 — One-day Store Manager</h3>
    <p className="mt-2 text-sm text-gray-500">
      Where another story began.
    </p>
  </div>

</div>
</section>
<section className="mt-24">
  <p className="text-xs tracking-[0.3em] text-gray-400">
    MOVING MEMORIES
  </p>

  <h2 className="mt-3 text-2xl tracking-wide">
    VIDEO ARCHIVE.
  </h2>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">

  <div>
    <video
      controls
      className="w-full aspect-[9/16] object-contain bg-black"
    >
      <source src="/videos/video-01.mov" type="video/quicktime" />
    </video>
    <p className="mt-3 text-sm">Favorite Stage</p>
    <p className="mt-1 text-xs text-gray-400">A performance to remember.</p>
  </div>

  <div>
    <video
      controls
      className="w-full aspect-[9/16] object-contain bg-black"
    >
      <source src="/videos/video-02.mov" type="video/quicktime" />
    </video>
    <p className="mt-3 text-sm">Favorite Moment</p>
    <p className="mt-1 text-xs text-gray-400">A little moment worth keeping.</p>
  </div>

</div>
</section>
<section className="mt-24">
  <p className="text-xs tracking-[0.3em] text-gray-400">
    SONGS ON REPEAT
  </p>

  <h2 className="mt-3 text-2xl tracking-wide">
    MUSIC ARCHIVE.
  </h2>

  <div className="mt-10 border-t border-gray-200">

  <div className="py-6 border-b border-gray-200">
    <p className="text-xs text-gray-400 tracking-widest">01 / NOW PLAYING</p>
    <h3 className="mt-3 text-sm">Favorite Song</h3>
    <p className="mt-2 text-xs text-gray-400">
      A song that reminds me of you.
    </p>

    <audio controls className="mt-5 w-full">
      <source src="/music/favorite.mp3" type="audio/mpeg" />
    </audio>
  </div>

</div>
</section>
    </main>
  );
}
