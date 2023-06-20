import { HeaderContainer } from './styled'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll, Question } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoIgnite} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/help" title="Ajuda">
          <Question size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
