import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";

const FAQ = () => {
  return (
    <section className='bg-foreground flex flex-col items-center justify-center text-center border-y-2 border-gray-600 py-20 space-y-4'>
      <h1 className='text-2xl sm:text-5xl text-white font-bold'>Prêt à prendre le contrôle <br />
        <span className='bg-clip-text text-transparent bg-linear-to-r from-amber-500 via-amber-400 to-amber-600'>de votre activité?</span>
      </h1>
      <p className='text-white/50'>Rejoignez 2 400+ indépendant qui pilotent leur business avec Nous.</p>
      <div className="flex flex-col sm:flex-row gap-7 mt-5">
        <button className='border-2 border-white/50 rounded-lg px-4 py-3'>
        <Link href="/register" className='text-white text-lg sm:text-xl'>Créer mon compte gratuitement</Link>
      </button>
      <button className='border-2 border-white/50 rounded-lg px-4 py-3'>
        <Link href="/dashboard" className='flex items-center space-x-2 text-white text-lg sm:text-xl'>Voir une démo <FaLongArrowAltRight className='text-white' /> </Link>
      </button>
      </div>
    </section>
  )
}

export default FAQ