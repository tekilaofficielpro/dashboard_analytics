import dashboard from "@/public/dashboard.png"
import avatar1 from "@/public/avatar1.jpg"
import avatar2 from "@/public/avatar2.jpg"
import avatar3 from "@/public/avatar3.jpg"
import avatar4 from "@/public/avatar4.jpg"
import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
    return (
        <section className='container mx-auto px-6 py-5'>
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16'>
                <div className='flex flex-col space-y-6 lg:space-y-7'>
                    <h2 className='self-start flex px-3 py-1.5 lg:py-2 rounded-full bg-amber-500/20 text-primary font-medium text-sm backdrop-blur-sm border border-amber-500 '> 
                        <GoDotFill className="text-primary pt-1"/> 
                        Nouveau - Dashboard v2.4 dosponible
                    </h2>
                    <h1 className='text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold tracking-tight text-white'>
                        <span className='block mb-1'>Votre activité,</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-r from-amber-500 via-amber-400 to-amber-600'>analysée.</span>
                        <span className='block mb-1'>Vos décisions,</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-r from-amber-500 via-amber-400 to-amber-600'>éclairées.</span>
                    </h1>
                    <p className='text-base lg:text-lg text-neutral-300 font-light'>
                        Echo centralise vos revenus, commandes, clients et planning dans un seul dashboard pour artisans, traders, freelances et tout-indépendant.
                    </p>
                    <div className="flex flex-row gap-4">
                        <button className="text-black bg-primary text-xl font-medium rounded px-4 py-3">
                            <Link href="/login">Commencer gratuitement</Link>
                        </button>
                        <button className="border border-white px-4 py-3 text-white font-medium rounded">
                            <Link href="/dashboard" >voir une démo</Link>
                        </button>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row -space-x-3">
                            <Image
                            src={avatar1}
                            alt="avatar"
                            className="size-9 lg:size-10 rounded-2xl border-2 border-amber-500 text-black" 
                            />
                            <Image
                            src={avatar2}
                            alt="avatar"
                            className="size-9 lg:size-10 rounded-2xl border-2 border-amber-500 text-black" 
                            />
                            <Image
                            src={avatar3}
                            alt="avatar"
                            className="size-9 lg:size-10 rounded-2xl border-2 border-amber-500 text-black" 
                            />
                            <Image
                            src={avatar4}
                            alt="avatar"
                            className="size-9 lg:size-10 rounded-2xl border-2 border-amber-500 text-black" 
                            />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <FaStar className="text-amber-500 mr-1" />
                                <FaStar className="text-amber-500 mr-1" />
                                <FaStar className="text-amber-500 mr-1" />
                                <FaStar className="text-amber-500 mr-1" />
                                <FaStar className="text-amber-500 mr-1" />
                                <span className="text-neutral-400 text-sm ml-1">4.8/5</span>
                            </div>
                            <p className="text-neutral-400 text-sm">
                                +2 400 professionels
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden">
                    <Image src={dashboard} alt="dashboard" width={1200} height={800} priority className="object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Hero