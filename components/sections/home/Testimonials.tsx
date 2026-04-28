import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className='bg-foreground py-20'>
      <div className='flex flex-col items-center space-y-3'>
        <h1 className='inline-block text-primary text-lg sm:text-2xl font-medium text-center border-2 border-amber-400/50 bg-amber-400/10 rounded-full px-4 py-2'>Témoignages</h1>
        <p className="text-white text-2xl sm:text-4xl">Ils nous font confiances.</p>
      </div>

      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mx-auto mt-10 justify-items-center'>

        <div className='bg-cards w-80 h-60 border-2 border-gray-400/20 rounded-xl p-8'>
          <div className='flex flex-row gap-4'>
            <div className="shrink-0">
              <span className="bg-primary rounded-full text-black p-4 inline-block text-xs sm:text-sm">JM</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-white text-base sm:text-lg md:text-xl truncate">Jean M.</h2>
              <p className="text-white/50 text-xs sm:text-sm truncate">Menusier indépendant</p>
            </div>
          </div>
          <div className="space-y-1 mt-5">
            <div className="flex items-center">
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
            </div>
          </div>
          <p className="text-white/50 mt-5">Avant j&apos;utilisais excel. Maintenant j&apos;ai <strong className="text-white">tout en temps réel</strong>. Je gagne 2h par semaine facilement.</p>
        </div>

        <div className='bg-cards w-80 h-60 border-2 border-green-700/20 rounded-xl p-8'>
          <div className='flex flex-row gap-4'>
            <div className="shrink-0">
              <span className="bg-green-600 rounded-full text-black p-4 inline-block text-xs sm:text-sm">SK</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-white text-base sm:text-lg md:text-xl truncate">Sophia K.</h2>
              <p className="text-white/50 text-xs sm:text-sm truncate">Trader indépendante</p>
            </div>
          </div>
          <div className="space-y-1 mt-5">
            <div className="flex items-center">
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
            </div>
          </div>
          <p className="text-white/50 mt-5">Le suivi des revenus et des objectifs est <strong className="text-white">exactement ce qu&apos;il me fallait</strong>. Design au top.</p>
        </div>

        <div className='bg-cards w-80 h-60 border-2 border-purple-700/20 rounded-xl p-8'>
          <div className='flex flex-row gap-4'>
            <div className="shrink-0">
              <span className="bg-purple-700 rounded-full text-black p-4 inline-block text-xs sm:text-sm">RA</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-white text-base sm:text-lg md:text-xl truncate">Romain A.</h2>
              <p className="text-white/50 text-xs sm:text-sm truncate">Freelance</p>
            </div>
          </div>
          <div className="space-y-1 mt-5">
            <div className="flex items-center">
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
              <FaStar className="text-amber-400 mr-1" />
            </div>
          </div>
          <p className="text-white/50 mt-5">Mes clients sont impréssionés quand je leur montre <strong className="text-white">mes rapports générés en 1 clic</strong>.</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials