'use client'

import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
        <div className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <span className="font-bold">Q</span>
          </div>
          <span className="ml-2 text-xl font-bold text-white">Analytics Quiet Storm</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <NavItem label="Características" hasDropdown />
            <NavItem label="Soluciones" hasDropdown />
            <NavItem label="Recursos" hasDropdown />
            <NavItem label="Precios" />
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90 transition-colors">
              Login
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <span className="font-bold">Q</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">
                  Analytics Quiet Storm
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-6">
              <MobileNavItem label="Características" />
              <MobileNavItem label="Soluciones" />
              <MobileNavItem label="Recursos" />
              <MobileNavItem label="Precios" />
              <div className="pt-4">
                <button className="w-full justify-start border border-gray-700 text-white">
                  Log in
                </button>
              </div>
              <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Comenzar Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({
  label,
  hasDropdown,
}: {
  label: string
  hasDropdown?: boolean
}) {
  return (
    <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </div>
  )
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </div>
  )
}