
//
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../styles/layout.js';
import styles from './profile.module.css';
import UploadImage from './../components/uploadimage.js'
import PersonalInfo from './personalinfo.js';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function profile() {

  return (
    <Layout>
    <CssBaseline>
        <div className={styles.container}>
        <img className={styles.blockdimage} src="/yourself.png"></img>
        <img className={styles.photo} src="/guy.jpg"></img>
        // <div className={styles.photo}></div>
        <div className={styles.person}>
        <PersonalInfo/>
        </div>
        <UploadImage/>
        </div>
        </CssBaseline>
    </Layout>
  );
}


// <div>
//   <div className={styles.container}>
//     <div className={styles.card}>
//         <div>
//           <img className={styles.blockdimage} src="/hiking-cropped.png"></img>
//         </div>
//         <div>
//           <img className={styles.photo} src="/hiking-cropped.png"></img>
//         </div>
//         <div>
//           <p className={styles.name}>Teddy Lin</p>
//         </div>
//     </div>
//   </div>
