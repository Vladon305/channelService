import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styles from './Login.module.scss'
import { IUserData } from '../../hooks/AuthContext'

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  setUser: React.Dispatch<React.SetStateAction<IUserData | null>>
}

type Inputs = {
  login: string
  password: string
}

const Login: FC<Props> = ({ setIsAuth, setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' })

  const navigate = useNavigate()

  const onSubmit = (data: Inputs) => {
    if (data.password === 'testTest1') {
      setUser(data)
      setIsAuth(true)
      navigate('/')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`${styles.heading} ${styles.title}`}>Authorization</div>

          <div className={styles.row}>
            <div className={styles.title}>login</div>
            <input
              defaultValue="test"
              type="text"
              className={styles.input}
              {...register('login', { required: 'Login is required field!' })}
            />
          </div>
          {errors.login && <span className={styles.error}>{errors.login.message}</span>}

          <div className={styles.row}>
            <div className={styles.title}>password</div>
            <input
              {...register('password', {
                required: 'Password is required field!',
                pattern: {
                  value:
                    /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/,
                  message: 'Please enter valid password',
                },
              })}
              className={styles.input}
              type="password"
            />
          </div>
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}

          <button type="submit" className={`${styles.button} ${styles.title}`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
