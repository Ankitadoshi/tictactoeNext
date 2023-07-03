"use client"
import styles from './page.module.css';
import Board from '../components/Board/Board';
import Header from '../components/Header/Header';


export default function Home() {
  return (
      <main className={styles.main}>
        <Header />
        <Board />
      </main>
  )
}
