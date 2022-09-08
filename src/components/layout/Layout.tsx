import React, { ReactNode, useContext } from 'react'
import styles from './Layout.module.scss'
import fullLogo from '../../assets/fullLogo.svg'
import Logo from '../../assets/Logo.svg'
import Logout from '../../assets/Logout.svg'
import { AuthContext } from '../../hooks/AuthContext'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { isAuth } = useContext(AuthContext)

  const { innerWidth } = window

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={innerWidth <= 375 ? Logo : fullLogo} alt="Logo" />
        </div>

        {isAuth && (
          <div className={styles.logout}>
            {innerWidth >= 1440 && <div className={styles.userName}>Username</div>}
            <img src={Logout} alt="Logout" />
          </div>
        )}
      </header>
      <main className={styles.container}>{children}</main>
    </div>
  )
}

export default Layout
