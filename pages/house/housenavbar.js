import Link from 'next/link'
import Head from 'next/head'
import styles from './housenavbar.module.css';
//
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';
//
// import * as ROUTES from '../constants/routes'

export default function HouseNavBar({ children,title = 'This is the default title',}) {
  return (
    <div>
        <div className = {styles.header}>
                  <Link href="/"><a className = {styles.item}>Adams</a></Link>
                  <Link href="/signup"><a className = {styles.item}>Cabot</a></Link>
                  <Link href="/search"><a className = {styles.item}>Currier</a></Link>
                  <Link href="/house"><a className = {styles.item}>Dunster</a></Link>
                  <Link href="/faq"><a className = {styles.item}>Eliot</a></Link>
                  <Link href="/profile"><a className = {styles.item}>Kirkland</a></Link>
                  <Link href="/"><a className = {styles.item}>Leverett</a></Link>
                  <Link href="/signup"><a className = {styles.item}>Lowell</a></Link>
                  <Link href="/search"><a className = {styles.item}>Mather</a></Link>
                  <Link href="/house"><a className = {styles.item}>Pforzheimer</a></Link>
                  <Link href="/faq"><a className = {styles.item}>Quincy</a></Link>
                  <Link href="/profile"><a className = {styles.item}>Winthrop</a></Link>
          </div>
      {children}
    </div>
  )
}
