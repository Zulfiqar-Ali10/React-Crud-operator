import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("current user", user);


  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center">
                <span className="font-semibold text-gray-800 text-2xl">ZULFIQAR</span>
              </a>
            </div>

           
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Home</NavLink>
              <NavLink to="/services" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Services</NavLink>
              <NavLink to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">About</NavLink>
              <NavLink to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Contact</NavLink>
              <NavLink to="/books" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Books</NavLink>
            </div>

           
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (<button onClick={(e) => logout()} className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">Logout</button>) : (<button onClick={(e) => loginWithRedirect()} className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                Login with Redirect
              </button>)}
              {isAuthenticated && toast.success(`${user.name} You are Successfully Login`)
              }


            </div>

            
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Home</a>
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Services</a>
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">About</a>
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Contact</a>
            <div className="py-2 px-4 space-y-2">
              {isAuthenticated ? (<button onClick={(e) => logout()} className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">Logout</button>) : (<button onClick={(e) => loginWithRedirect()} className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                Login with Redirect
              </button>)}
            </div>
          </div>
        )}
      </nav>

    </>
  );
}
