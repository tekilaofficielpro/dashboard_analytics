import CTA from './CTA'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <header className='container flex flex-row justify-between items-center p-4'>
        <Logo />
        <Menu />
        <CTA />
    </header>
  )
}

export default Navbar