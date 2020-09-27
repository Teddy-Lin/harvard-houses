import Iframe from 'react-iframe'
import React from "react";
import styles from './housevideo.module.css'

export default function HouseVideo() {

    const videos = [
      'https://www.youtube.com/embed/4itZalWyH70',
      'https://www.youtube.com/embed/nq7y1GkaV30',
      'https://www.youtube.com/embed/JwKQXzG-dLM',
      'https://www.youtube.com/embed/HMZRvabwjZ8',
      'https://www.youtube.com/embed/URGEP5YFoIY',
      'https://www.youtube.com/embed/zhUTE7sBHRc',
      'https://www.youtube.com/embed/QqffgR8XIuE',
      'https://www.youtube.com/embed/l0JEMXfJ1rM',

    ]

    const videoList = videos.map(video => (
      <div>
        <div className = {styles.filler}></div>
        <center>
          <Iframe width="1280"
          height="680" //790-40 from nav bar
          src={video}/>
        </center>
      </div>

    )
    )

    return (
      <div>
        {videoList}
      </div>
    )


}
