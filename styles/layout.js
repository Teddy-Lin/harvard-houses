import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.css';
import SignOutButton from '../pages/SignOut';

export default function Layout({ children,title = 'This is the default title',}) {
  return (
    <div>
        <div className = {styles.header}>
                  <Link href="/"><a className = {styles.item}>Home</a></Link>
                  <Link href="/signup"><a className = {styles.item}>Sign Up</a></Link>
                  <Link href="/search"><a className = {styles.item}>Search</a></Link>
                  <Link href="/house"><a className = {styles.item}>House</a></Link>
                  <Link href="/faq"><a className = {styles.item}>FAQ</a></Link>
                  <Link href="/profile"><a className = {styles.item}>Profile</a></Link>
                  <li>
                    <SignOutButton />
                  </li>
          </div>
      {children}
      <script defer src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>
      <script defer src="https://www.gstatic.com/firebasejs/7.17.1/firebase-auth.js"></script>
      <script defer src="https://www.gstatic.com/firebasejs/7.17.1/firebase-firestore.js"></script>
      <script defer src="./firebase.js"></script>

    </div>
  )
}
