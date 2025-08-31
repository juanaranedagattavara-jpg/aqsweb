'use client'

import { useState } from "react"
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    items: []
  },
  {
    label: "Planes",
    href: "/precios",
    items: []
  },
  {
    label: "Recursos",
    href: "#",
    items: [
      { label: "Casos de Éxito", href: "#" },
      { label: "Estudios de Mercado", href: "#" },
      { label: "Guías y Whitepapers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Webinars & Eventos", href: "#" }
    ]
  },
  {
    label: "Blog",
    href: "#",
    items: []
  }
]

function NavItem({ item, isOpen, onToggle, onClose }: { 
  item: typeof menuItems[0]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) {
  // Si no hay items, es un enlace simple
  if (item.items.length === 0) {
    return (
      <a
        href={item.href}
        className="px-4 py-2 text-gray-200 hover:text-white transition-colors"
      >
        {item.label}
      </a>
    )
  }

  // Si hay items, es un menú desplegable
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 px-4 py-2 text-gray-200 hover:text-white transition-colors"
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
            onMouseLeave={onClose}
          >
            <div className="py-2">
              {item.items.map((subItem, index) => (
                <a
                  key={index}
                  href={subItem.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                  onClick={onClose}
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileNavItem({ item, isOpen, onToggle }: { 
  item: typeof menuItems[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-200 hover:text-white transition-colors"
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-800"
          >
            {item.items.map((subItem, index) => (
              <a
                key={index}
                href={subItem.href}
                className="block px-8 py-2 text-gray-400 hover:text-white transition-colors"
              >
                {subItem.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  const handleMenuToggle = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null)
    } else {
      setOpenMenuIndex(index)
    }
  }

  const closeAllMenus = () => {
    setOpenMenuIndex(null)
  }

  return (
    <header className="relative z-50 bg-[#0A2540] border-b border-blue-900 shadow-lg">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A2540] font-bold text-xl">
              Q
            </div>
            <span className="text-xl font-bold text-white">QSP Analytics</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <NavItem 
              key={item.label} 
              item={item} 
              isOpen={openMenuIndex === index}
              onToggle={() => handleMenuToggle(index)}
              onClose={closeAllMenus}
            />
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-200 hover:text-white transition-colors"
          >
            Login
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-200 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A2540] border-t border-blue-900"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item, index) => (
                <MobileNavItem 
                  key={item.label} 
                  item={item} 
                  isOpen={openMenuIndex === index}
                  onToggle={() => handleMenuToggle(index)}
                />
              ))}
              
              {/* Mobile Actions */}
              <div className="mt-6 pt-6 border-t border-blue-900">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-200 hover:text-white transition-colors"
                >
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
