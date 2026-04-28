import Logo from '../navbar/Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='container flex flex-col space-y-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto sm:gap-8'>
        <div className='flex flex-col items-start'>
          <Logo />
          <p className='text-white/50 mt-4'>Le dahsboard des indépendants. <br /> Simples, puissants et beau.</p>
        </div>

        <div className='flex flex-col mt-5 sm:mt-0'>
          <h1 className='text-primary text-lg'>PRODUITS</h1>
          <div className='flex flex-col space-y-1 md:mt-5'>
            <Link href="" className='block text-base text-white/50'>Acceuil</Link>
            <Link href="" className='block text-base text-white/50'>Fonctionnalités</Link>
            <Link href="" className='block text-base text-white/50'>Tarifs</Link>
            <Link href="" className='block text-base text-white/50'>Témoignages</Link>
            <Link href="" className='block text-base text-white/50'>Faq</Link>
          </div>
        </div>

        <div className="flex flex-col mt-5 sm:mt-0">
          <h1 className='text-primary text-lg'>RESSOURCES</h1>
          <div className='flex flex-col space-y-1 md:mt-5'>
            <Link href="" className='block text-base text-white/50'>Documentation</Link>
            <Link href="" className='block text-base text-white/50'>Blog</Link>
            <Link href="" className='block text-base text-white/50'>Tutoriels</Link>
          </div>
        </div>

        <div className="flex flex-col mt-5 sm:mt-0">
          <h1 className='text-primary text-lg'>LEGAL</h1>
          <div className='flex flex-col space-y-1 md:mt-5'>
            <Link href="" className='block text-base text-white/50'>Confidentialité</Link>
            <Link href="" className='block text-base text-white/50'>Mentions légales</Link>
          </div>
        </div>
      </div>

      <hr className="h-0.5 bg-foreground border-none my-6 w-full" />

      <span className="text-white/50 text-center mb-10">
        © {new Date().getFullYear()} ECHO. Tous droits réservés.
      </span>

    </footer>
  )
}

export default Footer