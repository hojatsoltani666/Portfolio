import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useContext } from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../Language/index';
import Settings from '../Settings/SettingsButton';
import AudioPlayer from '../Music/AudioPlayer';


export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 

  const handleOpen = () => {
    setOpen(!open);
  };

  const musicSrc = '/music/in-slow-motion-inspiring-ambient-lounge-219592.mp3';

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={45}
              height={45}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Saravanakumar'}
        </Link>

        <div className="audio-player">
          <AudioPlayer audioSrc={musicSrc} />
        </div>
        <style jsx>{`
          .audio-player {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>

        <div className="settings">
          <Settings toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <style jsx>{`
          .settings {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>


        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href={'/experience'}>
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link href={'/blog'}>
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link href={'/projects'}>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href={'/resume'}>
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <Icons>
          <Link
            href={'https://github.com/Saravanakumar2003'}
            target="_blank"
            aria-label="Github">
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
            target="_blank"
            aria-label="Linkedin">
            <FiLinkedin />
          </Link>
          <Link
            href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
            target="_blank"
            aria-label="Instagram">
            <FiInstagram />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=918838416187'}
            target="_blank"
            aria-label="Whatsapp">
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}