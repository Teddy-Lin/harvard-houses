import { Button } from '@material-ui/core';

import Head from 'next/head'
import Link from 'next/link';
import Layout from './../../styles/layout.js';
import SearchTab from './searchtab.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './search.module.css';
import SearchTable from './searchtable.js';
import SearchBox from './searchbox.js';
import SizeSlider from './slider.js'

export default function Search() {

  return (
    <Layout>
      <CssBaseline>
              <Head>
                  <title>Blockd</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <div className={styles.upperbanner}>
              </div>
                <SearchTab/>
                <div className={styles.box}>
                  <SearchBox/>
                </div>
                <SearchTable/>
      </CssBaseline>
    </Layout>

    )
  }
