import React, { ReactNode, useContext } from 'react'
import styles from './Layout.module.scss'
import fullLogo from '../../assets/fullLogo.svg'
import Logo from '../../assets/Logo.svg'
import Logout from '../../assets/Logout.svg'
import { AuthContext } from '../../hooks/AuthContext'

type Props = {
  children?: ReactNode
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  login: string | undefined
}

const Layout: React.FC<Props> = ({ children, setIsAuth, login }) => {
  const { isAuth } = useContext(AuthContext)

  const { innerWidth } = window

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={innerWidth <= 375 ? Logo : fullLogo} alt="Logo" />
        </div>

        {isAuth && (
          <div className={styles.rightPart}>
            {innerWidth >= 1440 && <div className={styles.userName}>{login}</div>}
            <img src={Logout} alt="Logout" className={styles.logout} onClick={() => setIsAuth(false)} />
          </div>
        )}
      </header>
      <main className={styles.container}>{children}</main>
    </div>
  )
}

export default Layout
