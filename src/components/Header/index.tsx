import { LinksWrapper, LogoWrapper, TopBar } from './styles'

import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Logo() {
  return (
    <Link href="/" passHref>
      <a>
        <LogoWrapper>
          <Image src="/icons/logo.svg" alt="logo" width="92.5" height="30" />
        </LogoWrapper>
      </a>
    </Link>
  )
}

const pages = [
  {
    title: 'Início',
    pathname: '/',
  },
  {
    title: 'Séries',
    pathname: '/series',
  },
  {
    title: 'Filmes',
    pathname: '/filmes',
  },
  {
    title: 'Bombando',
    pathname: '/bombando',
  },
]

const Header: React.FC = () => {
  const router = useRouter()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scrollListner = () => {
      setScrolled(window && window.scrollY > 1)
    }

    window.addEventListener('scroll', scrollListner)

    return () => {
      window.removeEventListener('scroll', scrollListner)
    }
  }, [])

  return (
    <>
      <TopBar
        className={clsx({
          scrolled,
        })}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <LinksWrapper>
              {pages.map(page => (
                <li key={page.title}>
                  <Link href={page.pathname}>
                    <a
                      className={clsx({
                        active: page.pathname === router.pathname,
                      })}
                    >
                      {page.title}
                    </a>
                  </Link>
                </li>
              ))}
            </LinksWrapper>
          </Toolbar>
        </Container>
      </TopBar>
    </>
  )
}
export default Header
