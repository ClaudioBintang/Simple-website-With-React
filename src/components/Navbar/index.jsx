
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
<>
        
  <header className="bg-gray-100">

     <nav className="bg-white border-b border-gray-200 shadow-md">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-blue-600">Dio_Binzz</a>
        </div>

        
        <div className="hidden space-x-4 md:flex">
          <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-500">Home</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-500">My CV</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-500">Services</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-500">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
           <button className="hover:scale-110 hover:shadow-xl focus:outline-none"><FaDiscord /></button>
           <button className="hover:scale-110 hover:shadow-xl focus:outline-none"><FaInstagram /></button>
           <button className="hover:scale-110 hover:shadow-xl focus:outline-none"><FaFacebookF /></button>
           <button className="hover:scale-110 hover:shadow-xl focus:outline-none"><FaGithub /></button>
           <a href="" className="inline-block px-8 py-3 text-sm font-medium text-white transition duration-300 ease-in-out bg-blue-700 rounded hover:bg-blue-600 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">Signup</a>
        </div>
        
        <div className="md:hidden">
          <button id="menu-btn" className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    
    <div id="mobile-menu" className="hidden md:hidden">
      <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-500">Home</a>
      <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-500">My CV</a>
      <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-500">Services</a>
      <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-500">Contact</a>
    </div>
    
    
     </nav>

  
  </header>
</>
    )
}
export default Navbar