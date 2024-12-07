'use client'
import { NavLinks, SocialLinks } from '@/assets/Constants/Constants'
import { Button } from '@/Components/ui/button'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBg, setNavBg] = useState(false)

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
        className="text-sm font-semibold  transition-all duration-300 hover:text-primary cursor-pointer"
      >
        {icon}
      </Link>
    ))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setNavBg(true)
      } else {
        setNavBg(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={`${
        navBg ? 'bg-accent' : 'bg-background'
      } container mx-auto flex shrink-0 justify-between items-center py-4  md:justify-around shadow-md dark:shadow-2xl fixed top-0 left-1/2 -translate-x-1/2 z-50 transition duration-300 delay-100 ease-in-out`}
    >
      {/* Logo */}

      <Link href="/">
        <h2 className="heading__title ">Mh</h2>
      </Link>

      <div className="hidden md:flex  space-x-6">{renderLinks()}</div>
      <div className="hidden md:flex items-center  gap-4">
        <div className="flex items-center gap-4">{renderSocilaIcons()}</div>
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="z-30 md:hidden flex items-center gap-2">
        <ModeToggle />
        <Button variant="outline" onClick={handleMenuToggle}>
          {isOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>

      <div
        className={`absolute top-16 left-0 z-10 md:hidden p-4 w-full transition-all duration-300 ease-in-out ${
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
