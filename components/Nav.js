import Link from 'next/link'
import useDarkMode from '../hook/useDarkMode'
import Toggle from '../components/ThemeToggle'

const Nav = () => {


    return (
        <div className="fixed top-0 bg-blue-100 w-full p-5 text-gray-700 dark:bg-gray-700 dark:text-white">
            <div className="absolute right-0 top-0 mr-3 mt-3 md:mr-3 md:mt-3">
                <Toggle /> 
            </div>
        <nav className="">
            <ul className="flex space-x-4">
                <h1>hi</h1>
            <Link href="/box">
                <a>box</a>
            </Link>
            <Link href="/about" className=''>
                <a>about</a>
            </Link>
            <Link href="/">
                <a>home</a>
            </Link>
            <Link href="/animation">
                <a>animation</a>
            </Link>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
