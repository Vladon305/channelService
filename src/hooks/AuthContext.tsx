import { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react'

export interface IUserData {
  login: string
  password: string
}
interface IContext {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
  user: IUserData | null
  setUser: Dispatch<SetStateAction<IUserData | null>>
}

export const AuthContext = createContext<IContext>({} as IContext)

type Props = {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState<IUserData | null>(null)

  const value = useMemo(() => ({ isAuth, setIsAuth, user, setUser }), [isAuth, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
