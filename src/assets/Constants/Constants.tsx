import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export const NavLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
]

export const SocialLinks = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/okaymahdi',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    id: 2,
    href: 'https://web.facebook.com/okaymahdi',
    icon: <FaFacebook />,
    label: 'Facebook',
  },
  {
    id: 3,
    href: 'https://github.com/okaymahdi',
    icon: <FaGithub />,
    label: 'Github',
  },
]
