import styles from './houseinstagram.module.css'

import InstagramEmbed from 'react-instagram-embed';
import React from 'react';

export default function HouseInstagram() {
  return (
    <div class={styles.container}>
      <InstagramEmbed
        url='https://www.instagram.com/p/B-zrooXnOOz/'
        maxWidth={400}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <InstagramEmbed
        url='https://www.instagram.com/p/B9kkHx_gE4r/'
        maxWidth={400}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <InstagramEmbed
        url='https://www.instagram.com/p/CADqZrJHh3c/'
        maxWidth={400}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <InstagramEmbed
        url='https://www.instagram.com/p/B-r4m2PngeU/'
        maxWidth={400}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>

)

}
