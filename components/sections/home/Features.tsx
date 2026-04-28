import { FaMoneyBills } from "react-icons/fa6"; 
import { BsPeopleFill } from "react-icons/bs";  
import { FaCalendarAlt } from "react-icons/fa";  
import { BsFileBarGraphFill } from "react-icons/bs"; 
import { GoGoal } from "react-icons/go"; 
import { MdDashboardCustomize } from "react-icons/md"; 

const Features = () => {
  return (
    <section className='max-w-6xl xl:max-w-7xl mx-auto'>
      <div className='flex flex-col items-center space-y-3'>
        <h1 className='inline-block text-primary text-lg sm:text-2xl font-medium text-center border-2 border-amber-400/50 bg-amber-400/10 rounded-full px-4 py-2'>Fonctionnalités</h1>
        <p className="text-white text-center text-lg sm:text-2xl md:text-4xl">Tout ce dont vous avez besoin, au même endroit.</p>
        <p className="text-white/50 text-center">7 pages, des dizaines d&apos;insights - sans aucune compléxité.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8'>
        <div className="bg-cards p-8 border-t-8 border-primary rounded-2xl space-y-3 mx-4">
          <FaMoneyBills className="size-8 text-primary bg-amber-400/20 rounded p-2" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">Revenus en temps réel</h2>
            <p className="text-yellow-100/50 text-base">
              Suivez vos entrées, dépenses et bénéfice net avec des graphiques clairs et des objectifs visuels.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-primary text-base">+12,4%</span>
            <span className="text-yellow-100/50 text-base">ce mois</span>
          </div>
        </div>

        <div className="bg-cards p-8 border-t-8 border-green-700 rounded-2xl space-y-3 mx-4">
          <BsPeopleFill className="size-8 text-green-700" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">Gestion clients & commandes</h2>
            <p className="text-yellow-100/50 text-base">
              Centralisez vos clients, suivez l&apos;avancement de chaque projet et gérer vos dévis facilement.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-green-700 text-base">+12,4%</span>
            <span className="text-yellow-100/50 text-base">ce mois</span>
          </div>
        </div>

        <div className="bg-cards p-8 border-t-8 border-purple-700 rounded-2xl space-y-3 mx-4">
          <FaCalendarAlt className="size-8 text-purple-700" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">Planning intégré</h2>
            <p className="text-yellow-100/50 text-base">
              Organisez vos interventions sur un calendrier visuel avec rappels et vue journalière.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-purple-700 text-base">+12,4%</span>
            <span className="text-yellow-100/50 text-base">ce mois</span>
          </div>
        </div>

        <div className="bg-cards p-8  border-t-8 border-primary rounded-2xl space-y-3 mx-4">
          <BsFileBarGraphFill className="size-8 text-primary" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">Rapports & exports</h2>
            <p className="text-yellow-100/50 text-base">
              Générer des rapports PDF/CSV en un clic pour vos bilans mensuels ou annuels.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-primary text-base">+12,4%</span>
            <span className="text-yellow-100/50 text-base">ce mois</span>
          </div>
        </div>

        <div className="bg-cards p-8 border-t-8 border-green-700 rounded-2xl space-y-3 mx-4">
          <GoGoal className="size-8 text-green-700" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">Objectifs & performances</h2>
            <p className="text-yellow-100/50 text-base">
              Définissez vos cibles mensuelles et annuelles, visualisez votre progression en temps réel.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-green-700 text-base">+12,4%</span>
            <span className="text-yellow-100/50 text-base">ce mois</span>
          </div>
        </div>

        <div className="bg-cards p-8 border-t-8 border-purple-700 rounded-2xl space-y-3 mx-4">
          <MdDashboardCustomize className="size-8 text-purple-700" />
          <div className="space-y-2">
            <h2 className="text-white text-xl">100% Personnalisable</h2>
            <p className="text-yellow-100/50 text-base">
              Adoptez l&apos;interface à votre activité: secteur, devise, langue, couleurs d&apos;accent.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-purple-700 text-base">+12,4%</span>
            <span className="text-yellow-100/50 text-base">ce mois</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features