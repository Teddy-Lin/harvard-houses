import Link from 'next/link'
import React from 'react';
import styles from './houseinfo.module.css';

export default class HouseItem extends React.Component {
    constructor(props) {
      super(props);

    render () {
      return (
        <div className = {styles.container}>
          <div className = {styles.accordion}>
                <a onClick={this.clickAdams}>
                    {this.props.title}
                </a>
                <div>
                    <p>{this.props.body}</p>
                </div>
          </div>
        </div>

      )
    }
}
