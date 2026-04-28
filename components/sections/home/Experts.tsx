import { MdCarpenter } from "react-icons/md"; //menusier
import { SlGraph } from "react-icons/sl";  //trader
import { FaPaintbrush } from "react-icons/fa6";   //designer
import { FaUserDoctor } from "react-icons/fa6"; //doctor
import { FaUser } from "react-icons/fa6";  //freelancer
import { TbArrowBarUp } from "react-icons/tb";


const Experts = () => {
  return (
    <section className="flex flex-col justify-center bg-foreground border-x-2 h-50 py-8">
      <h1 className="text-white/30 text-base sm:text-xl text-center mb-8">FAIT POUR LES PROFESSIONNELS INDEPENDANTS</h1>
      <div className="flex flex-row items-center justify-center mx-auto space-x-30 pt-3 slider-container">
        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <FaUser className="size-5 sm:size-7" />
          <span className="text-2xl">Freelancer</span>
        </div>

        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <MdCarpenter className="size-5 sm:size-7"/>
          <span className="text-xl sm:text-2xl">Menuisier</span>
        </div>

        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <SlGraph className="size-5 sm:size-7" />
          <span className="text-xl sm:text-2xl">Trader</span>
        </div>

        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <FaPaintbrush className="size-5 sm:size-7" />
          <span className="text-xl sm:text-2xl">Designer</span>
        </div>

        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <FaUserDoctor className="size-5 sm:size-7" />
          <span className="text-xl sm:text-2xl">Docteur</span>
        </div>

        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <TbArrowBarUp className="size-5 sm:size-7" />
          <span className="text-xl sm:text-2xl">Consultant</span>
        </div>

        <div className="flex flex-row text-white/30 gap-2 hover:cursor-pointer">
          <FaUser className="size-5 sm:size-7" />
          <span className="text-xm sm:text-2xl">Coach</span>
        </div>
      </div>
    </section>
  )
}

export default Experts