import React, { FC, useEffect, useState } from 'react'
import { api } from '../../api/api'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IPhoto, IUser } from '../../types/types'
import styles from './Post.module.scss'

type Props = {
  userId: number
  id: number
  title: string
  body: string
}

const Post: FC<Props> = ({ body, id, title, userId }) => {
  const { innerWidth } = window
  const [user, setUser] = useState({} as unknown as IUser)
  const [photo, setPhoto] = useState({} as unknown as IPhoto)

  useEffect(() => {
    api.getUser(userId).then((res) => setUser(res))
    api.getPhoto(userId).then((res) => setPhoto(res))
  }, [])

  return (
    <div className={styles.post}>
      <div>
        {innerWidth >= 768 && (
          <div className={styles.photo}>
            <img src={photo?.thumbnailUrl} alt="photo" />
          </div>
        )}
      </div>
      {user && (
        <>
          <div className={styles.author}>Author: {user?.name}</div>
          <div className={styles.company}>Company: {user?.company?.name}</div>
          <div className={styles.title}>Title: {title}</div>
          <div className={styles.text}>{body}</div>
        </>
      )}
    </div>
  )
}

export default Post
