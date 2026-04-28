import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="container flex flex-col">
      <div className='flex flex-col items-center space-y-3'>
        <h1 className='inline-block text-primary text-lg sm:text-2xl font-medium text-center border-2 border-amber-400/50 bg-amber-400/10 rounded-full px-8 py-2'>Tarifs</h1>
        <p className="text-white text-2xl sm:text-4xl text-center">Simple, Transparent. Sans surprise.</p>
        <p className="text-white/50 text-center">Commencez gratuitement, évoluez quand vous êtes prêt.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mx-auto mt-10">
        <div className="flex flex-col bg-foreground w-80 h-120 rounded-2xl border-2 border-gray-400/30 px-8 py-10 hover:transform hover:scale-105 hover:duration-300">
          <span className="text-lg text-white/80 font-bold">STARTER</span>
          <span className="text-white/80"><strong className="text-4xl text-white">0 $</strong>/mois</span>
          <p className="text-white/50">Pour démarrer sans risque</p>
          <div className="mt-5 space-y-2">
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50"> 1 utilisateurs</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50"> 10 commandes / mois</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Dashboard overview</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Export PDF basique</p>
            </div>
          </div>
          <button className="text-white font-medium text-base border-2 border-gray-400/30 px-4 py-3 rounded mt-5 cursor-pointer">Commencer gratuit</button>
        </div>

        <div className="flex flex-col bg-foreground w-80 h-120 rounded-2xl border-2 border-primary px-8 py-10 hover:transform hover:scale-105 hover:duration-300">
          <span className="bg-primary text-black font-bold rounded-full px-4 w-fit mb-2">Le plus populaire</span>
          <span className="text-lg text-white/80 font-bold">PRO</span>
          <span className="text-white/80"><strong className="text-4xl text-primary">19 $</strong>/mois</span>
          <p className="text-white/50">Pour les pros actifs</p>
          <div className="mt-5 space-y-2">
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50"> Commandes illimitées</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Clients illimités</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Rapport avancés</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Planning & calendrier</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Export PDF + CVS + Excel</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Support prioritaire</p>
            </div>
          </div>
          <button className="text-white font-medium text-base border-2 border-gray-400/30 px-4 py-3 rounded mt-5 cursor-pointer">Commencer - 14 jours gratuit</button>
        </div>

        <div className="flex flex-col bg-foreground w-80 h-120 rounded-2xl border-2 border-gray-400/30 px-8 py-10 hover:transform hover:scale-105 hover:duration-300">
          <span className="text-lg text-white/80 font-bold">BUSINESS</span>
          <span className="text-white/80"><strong className="text-4xl text-white">49   $</strong>/mois</span>
          <p className="text-white/50">Pour les équipes</p>
          <div className="mt-5 space-y-2">
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Jusqu&apos;à 5 utilisateurs</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Dashboard multi-profils</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Accès API</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaCheck className="bg-green-400/20 text-green-400 rounded-full p-1 mt-1" />
              <p className="text-white/50">Onboarding dédié</p>
            </div>
          </div>
          <button className="text-white font-medium text-base border-2 border-gray-400/30 px-4 py-3 rounded mt-5 cursor-pointer">Contacter l&apos;équipe</button>
        </div>

      </div>
    </section>
  )
}

export default Pricing