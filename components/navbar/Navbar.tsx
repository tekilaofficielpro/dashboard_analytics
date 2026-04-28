import CTA from './CTA'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <header className='container flex flex-row justify-between items-center fixed top-0 left-0 right-0 z-9999  backdrop-blur-sm  p-4'>
        <Logo />
        <Menu />
        <CTA />
    </header>
  )
}

export default Navbar