"use client"

import { links } from "@/utils/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { TfiMenu } from "react-icons/tfi"
import CTA from "./CTA"
import { NavLink } from "@/types/type"


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (link: NavLink) => {
    setIsMenuOpen(false)

    if (link.targetId) {
      document.getElementById(link.targetId)?.scrollIntoView({
        behavior: "smooth",
      })
      return
    }

    if (link.path) {
      router.push(link.path)
    }
  }

  return (
    <>
      {/* DESKTOP */}
      <nav className="hidden md:flex space-x-6">
        {links.map((link, index) => (
          <span
            key={index}
            onClick={() => handleClick(link)}
            className={`font-bold cursor-pointer text-white text-xl sm:text-base md:text-lg lg:text-xl${
              pathname === link.path ? "actived" : ""
            }`}
          >
            {link.label}
          </span>
        ))}
      </nav>

      {/* MOBILE BUTTON */}
      <div className="flex items-center md:hidden ml-auto">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-3 py-4 text-primary"
        >
          {isMenuOpen ? (
            <IoMdClose className="size-6" />
          ) : (
            <TfiMenu className="size-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <nav className="absolute top-16 right-0 h-full w-3/4 sm:w-1/2 bg-foreground flex flex-col items-start gap-6 py-6 px-5 md:hidden z-50">
          {links.map((link, index) => (
            <span
              key={index}
              onClick={() => handleClick(link)}
              className={`font-bold cursor-pointer text-white ${
                pathname === link.path ? "actived" : ""
              }`}
            >
              {link.label}
            </span>
          ))}

          <hr className="w-1/2 border-gray-600" />

          {/* 👉 CTA VERSION MOBILE */}
          <CTA isMobile />
        </nav>
      )}
    </>
  )
}

export default Menu