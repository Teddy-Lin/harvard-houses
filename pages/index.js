import { Button } from '@material-ui/core';
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../styles/layout.js';
import styles from './index.module.css';
import { makeStyles } from '@material-ui/core/styles';
import FourNumberCards from '../components/fournumbercards.js'
import ThreeHouseCards from '../components/threehousecards.js'
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Home()  {
  return (
    <Layout>
    <CssBaseline>
              <Head>
                  <title>Blockd</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
                <div className={styles.imgcontainer}>
                    <img className={styles.blockdimage} src="/hiking-cropped.png"></img>
                    <h1 className={styles.blockdtitle}>Blockd</h1>
                </div>
                    <div className={styles.main}>
                        <img className={styles.harvardicon} src="/harvard.png"></img>
                        <h1 className={styles.title}>
                            Welcome <span className={styles.blueword}>Class of 2024</span></h1>
                          <Link href="/signup"><img src="/signup.png" className={styles.signupicon}></img></Link>
                    </div>
                  <div className={styles.section4}><FourNumberCards/></div>
                  <div className={styles.section3}><ThreeHouseCards/></div>

                  <div className={styles.imageblock}>
                      <img className={styles.image2} src="/maze3.png"></img>
                      <p className={styles.imagetext}>Blocking was stressful for a lot of people<br/>It doesn't have to be.</p>
                      <Button variant="outlined">Default</Button>
                  </div>

                  <div className = {styles.bottomheader}>
                      <a className = {styles.item}>Developed by Teddy Lin, Alex Cheng, Paula Leyes. All rights reserved. Images used with permission.</a>
                  </div>
        </CssBaseline>
</Layout>
    )
  }
