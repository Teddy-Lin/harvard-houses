import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.css';

export default function Layout({ children,title = 'This is the default title',}) {
  return (
    <div>
        <div className = {styles.header}>
                  <Link href="/"><a className = {styles.item}>Home</a></Link>
                  <Link href="/house"><a className = {styles.item}>Houses</a></Link>
                  <Link href="/house"><a className = {styles.item}>Statistics</a></Link>
                  <Link href="/faq"><a className = {styles.item}>Sorting Hat</a></Link>
                  <Link href="/faq"><a className = {styles.item}>Blocking FAQ</a></Link>
          </div>
      {children}
    </div>
  )
}
