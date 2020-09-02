import Head from 'next/head';
import Link from 'next/link';
import styles from './house.module.css';
import React from "react";
import ReactPlayer from "react-player";
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../styles/layout.js';
import HouseNavBar from './housenavbar.js';
import HouseTab from './housetab.js';
import CssBaseline from '@material-ui/core/CssBaseline';


export default class House extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Layout>
          <HouseNavBar/>
            <CssBaseline>
                  <div className={styles.background} id="top">
                    <div className={styles.container}>
                        <h1 className = {styles.blockdtitle}>Dunster</h1>
                        <a href="https://dunster.harvard.edu/" target="_blank"><img className={styles.blockdimage} src="/dunster.jpg"></img></a>
                    </div>
                        <HouseTab/>
                  </div>
            </CssBaseline>
        </Layout>
    );
  }
}
