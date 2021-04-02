import { ApiContext } from '@/presentation/contexts'
import Logo from '@/presentation/components/logo/logo'
import Styles from './header-styles.scss'

import React, { memo, MouseEvent, useContext } from 'react'
import { useHistory } from 'react-router-dom'

const Header: React.FC = () => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)
  const logout = (event: MouseEvent): void => {
    event.preventDefault()
    setCurrentAccount(undefined)
    history.replace('/login')
  }

  return (
    <header className={Styles.headerWrap}>
        <div className={Styles.headerContent}>
          <Logo />
          <div className={Styles.logoutWrap}>
            <span>Rodrigo</span>
            <a data-testid="logout" href="#" onClick={logout}>Sair</a>
          </div>
        </div>
    </header>
  )
}

export default memo(Header)
