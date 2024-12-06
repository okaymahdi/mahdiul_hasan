'use client'
import { NavLinks, SocialLinks } from '@/assets/Constants/Constants'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpren, setIsOpren] = useState(false)

  const handleMenuToggle = () => {
    setIsOpren(!isOpren)
  }

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpren(false)
  }

  // Render Links
  const renderLinks = () =>
    NavLinks.map(({ id, label }) => (
      <li
        key={id}
        onClick={() => handleLinkClick(id)}
        className="text-sm font-semibold transition-all duration-300 hover:text-[#FF6B6B] cursor-pointer"
      >
        <a href={`#${id}`}>{label}</a>
      </li>
    ))

  const renderSocilaIcons = () =>
    SocialLinks.map(({ id, href, icon, label }) => (
      <Link
        key={id}
        href={href}
        target="_blank"
        aria-label={label}
        className="text-sm font-semibold transition-all duration-300 hover:text-[#FF6B6B] cursor-pointer"
      >
        {icon}
      </Link>
    ))
  return (
    <nav className="container mx-auto flex justify-between items-center p-4 md:pt-8 md:justify-around">
      <h1 className="text-black hover:text-[#FF6B6B] cursor-pointer text-6xl">
        mh
      </h1>
      <div className="hidden md:flex items-center gap-4">
        {renderSocilaIcons()}
      </div>

      {/* Mobile Menu */}
      <button className="z-30 md:hidden" onClick={handleMenuToggle}>
        {isOpren ? <X /> : <MenuIcon />}
      </button>
    </nav>
  )
}
