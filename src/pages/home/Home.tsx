import React from 'react'
import Post from '../../components/post/Post'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import styles from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {
  const { posts } = useTypedSelector((state) => state.posts)

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts?.map(({ userId, id, title, body }) => (
          <Post key={id} id={id} userId={userId} title={title} body={body} />
        ))}
      </div>
    </div>
  )
}

export default Home
