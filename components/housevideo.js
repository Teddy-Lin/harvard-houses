import Iframe from 'react-iframe'
import React from "react";
import styles from './housevideo.module.css'

export default function HouseVideo() {

  return (
<div className = {styles.all}>

    <div className = {styles.filler}>
    </div>

    <center><Iframe width="1280"
    height="680" //790-40 from nav bar
    src="https://www.youtube.com/embed/4itZalWyH70"/></center>

    <div className = {styles.filler}>
    </div>

    <center><Iframe width="1280"
    height="680" //790-40 from nav bar
    src="https://www.youtube.com/embed/nq7y1GkaV30"/></center>

    <div className = {styles.filler}>
    </div>

    <Iframe width="1440"
    height="750"
    src="https://www.youtube.com/embed/JwKQXzG-dLM"/>

    <Iframe width="1440"
    height="750"
    src="https://www.youtube.com/embed/HMZRvabwjZ8"/>

    <Iframe width="1440"
    height="750"
    src="https://www.youtube.com/embed/URGEP5YFoIY"/>

    <Iframe width="1440"
    height="750"
    src="https://www.youtube.com/embed/zhUTE7sBHRc"/>

    <Iframe width="1440"
    height="750"
    src="https://www.youtube.com/embed/QqffgR8XIuE"/>

    <Iframe width="1440"
    height="750"
    src="https://www.youtube.com/embed/l0JEMXfJ1rM"/>
</div>
  );
}
