import Link from 'next/link'
import Head from 'next/head'
import styles from './housenavbar.module.css';

export default class HouseNavBar extends React.Component({children}) {

  constructor(props) {
    super(props);

    this.state = {
      adams: false,
      cabot: false,
      currier: false,
      dunster: false,
    }
  }

  clickAdams = () => {
    this.setState({
      adams: true,
      cabot: false,
      currier: false,
      dunster: false,
    })
  }

  clickCabot = () => {
    this.setState({
      adams: false,
      cabot: true,
      currier: false,
      dunster: false,
    })
  }

  render(){
    return (
    <div>
        <div className = {styles.header}>
            <Link href="/adams"><a className = {styles.item}>Adams</a></Link>
            <Link href="/cabot"><a className = {styles.item}>Cabot</a></Link>
            <Link href="/currier"><a className = {styles.item}>Currier</a></Link>
            <Link href="/house"><a className = {styles.item}>Dunster</a></Link>
            <Link href="/eliot"><a className = {styles.item}>Eliot</a></Link>
            <Link href="/kirkland"><a className = {styles.item}>Kirkland</a></Link>
            <Link href="/leverett"><a className = {styles.item}>Leverett</a></Link>
            <Link href="/lowell"><a className = {styles.item}>Lowell</a></Link>
            <Link href="/mather"><a className = {styles.item}>Mather</a></Link>
            <Link href="/pforzheimer"><a className = {styles.item}>Pforzheimer</a></Link>
            <Link href="/quincy"><a className = {styles.item}>Quincy</a></Link>
            <Link href="/winthrop"><a className = {styles.item}>Winthrop</a></Link>
        </div>
        {children}
    </div>
  )
  }
}

// import Link from 'next/link'
// import Head from 'next/head'
// import styles from './housenavbar.module.css';

// export default function HouseNavBar({children}) {
//   return (
//     <div>
//         <div className = {styles.header}>
//           <Link href="/"><a className = {styles.item}>Adams</a></Link>
//           <Link href="/signup"><a className = {styles.item}>Cabot</a></Link>
//           <Link href="/search"><a className = {styles.item}>Currier</a></Link>
//           <Link href="/house"><a className = {styles.item}>Dunster</a></Link>
//           <Link href="/faq"><a className = {styles.item}>Eliot</a></Link>
//           <Link href="/profile"><a className = {styles.item}>Kirkland</a></Link>
//           <Link href="/"><a className = {styles.item}>Leverett</a></Link>
//           <Link href="/signup"><a className = {styles.item}>Lowell</a></Link>
//           <Link href="/search"><a className = {styles.item}>Mather</a></Link>
//           <Link href="/house"><a className = {styles.item}>Pforzheimer</a></Link>
//           <Link href="/faq"><a className = {styles.item}>Quincy</a></Link>
//           <Link href="/profile"><a className = {styles.item}>Winthrop</a></Link>
//         </div>
//       {children}
//     </div>
//   )
// }