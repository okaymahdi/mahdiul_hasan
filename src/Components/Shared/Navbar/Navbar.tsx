'use client'
import { NavLinks, SocialLinks } from '@/assets/Constants/Constants'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  // Render Links
  const renderLinks = () =>
    NavLinks.map(({ id, label }) => (
      <Link
        key={`#${id}`}
        href={`#${id}`}
        onClick={() => handleLinkClick(id)}
        className="text-sm font-semibold  transition-all duration-300 hover:text-popover-foreground cursor-pointer"
      >
        {label}
      </Link>
    ))

  const renderSocilaIcons = () =>
    SocialLinks.map(({ id, href, icon, label }) => (
      <Link
        key={id}
        href={href}
        target="_blank"
        aria-label={label}
        className="text-sm font-semibold  transition-all duration-300 hover:text-primary-foreground cursor-pointer"
      >
        {icon}
      </Link>
    ))
  return (
    <nav className="container mx-auto flex justify-between items-center p-4 md:pt-8 md:justify-around">
      {/* Logo */}
      <Link href="/">
        <h2 className="heading__title lg-[-1.5rem]">Mh</h2>
      </Link>
      <div className="space-x-6">{renderLinks()}</div>
      <div className="hidden md:flex items-center gap-4">
        {renderSocilaIcons()}
      </div>

      {/* Mobile Menu */}
      <button className="z-30 md:hidden" onClick={handleMenuToggle}>
        {isOpen ? <X /> : <MenuIcon />}
      </button>

      <div
        className={`absolute top-[58px] left-0 z-10 md:hidden p-4 w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4">{renderLinks()}</ul>
        <div className="flex justify-center items-center gap-4 mt-6">
          {renderSocilaIcons()}
        </div>
      </div>
    </nav>
  )
}
