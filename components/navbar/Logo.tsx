import Link from "next/link"
import { IoMdAnalytics } from "react-icons/io";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold flex flex-row gap-2 items-center justify-center">
        <IoMdAnalytics className="text-primary" />
        <span className="text-primary">ECHO</span>
    </Link>
  )
}

export default Logo