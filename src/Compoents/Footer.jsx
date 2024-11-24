import React, { useState } from 'react'
import { forwardRef } from 'react';
import { Facebook, Twitter, Instagram, Mail as LucideMail, Send as LucideSend } from 'lucide-react'

// Icon Wrapper
const Mail = React.forwardRef((props, ref) => <LucideMail {...props} ref={ref} />);
const Send = React.forwardRef((props, ref) => <LucideSend {...props} ref={ref} />);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
)

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signed up with:', email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 relative">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
        required
      />
      <button
        type="submit"
        className="absolute right-1 top-1 bottom-1 px-4 bg-white text-blue-600 rounded-full hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}

const InteractiveLink = ({ href, children }) => (
    <a
      href={href}
      className="relative overflow-hidden group text-white hover:text-blue-200 transition-colors duration-300"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </a>
  )

export default function Footer() {
  return (
    <footer className="relative bg-blue-600 text-white py-12 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">InnovateTech</h2>
            <p className="mb-4">Pushing the boundaries of what's possible in technology and design.</p>
            <NewsletterSignup />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><InteractiveLink href="#">Home</InteractiveLink></li>
              <li><InteractiveLink href="#">About Us</InteractiveLink></li>
              <li><InteractiveLink href="#">Services</InteractiveLink></li>
              <li><InteractiveLink href="#">Portfolio</InteractiveLink></li>
              <li><InteractiveLink href="#">Contact</InteractiveLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@innovatetech.com" className="hover:text-blue-200 transition-colors">info@innovatetech.com</a>
              </li>
              <li>123 Tech Avenue, Innovation City</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; 2024 InnovateTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
