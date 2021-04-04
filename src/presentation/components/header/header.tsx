import { ApiContext } from '@/presentation/contexts'
import { useLogout } from '@/presentation/hooks'
import Logo from '@/presentation/components/logo/logo'
import Styles from './header-styles.scss'

import React, { memo, MouseEvent, useContext } from 'react'

const Header: React.FC = () => {
  const logout = useLogout()
  const { getCurrentAccount } = useContext(ApiContext)
  const buttonClick = (event: MouseEvent): void => {
    event.preventDefault()
    logout()
  }

  return (
    <header className={Styles.headerWrap}>
        <div className={Styles.headerContent}>
          <Logo />
          <div className={Styles.logoutWrap}>
            <span data-testid="username">{getCurrentAccount()?.name}</span>
            <a data-testid="logout" href="#" onClick={buttonClick}>Sair</a>
          </div>
        </div>
    </header>
  )
}

export default memo(Header)
