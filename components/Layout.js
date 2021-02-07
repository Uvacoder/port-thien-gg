import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { ThemeProvider } from './ThemeContext'
import Toggle from './ThemeToggle'

const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <Nav />
            <div className='container flex flex-col mx-auto pt-20 px-5 text-gray-900 bg-gray-400 dark:text-gray-50 dark:bg-gray-800'>
                <main className=''>
                    {children}
                </main>
            </div>
            <Footer/>
        </ThemeProvider>


    )
}

export default Layout
