import Link from "next/link"
import { CTAProps } from "@/types/type"

const CTA = ({ isMobile = false }: CTAProps) => {
  if (isMobile) {
    return (
      <section className="flex flex-col space-y-4">
        <Link href="" className="text-primary">
          CONNEXION
        </Link>

        <Link href="/dashboard" className="text-primary">
          COMMENCER
        </Link>
      </section>
    )
  }

  return (
    <section className="hidden md:flex flex-row gap-4">
      <Link href="" className="text-white mt-2">
        CONNEXION
      </Link>

      <Link
        href="/dashboard"
        className="bg-primary text-black rounded px-4 py-2"
      >
        COMMENCER
      </Link>
    </section>
  )
}

export default CTA