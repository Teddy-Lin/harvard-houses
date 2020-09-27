import React from 'react';
import styles from './houseinfo.module.css';
import InstagramEmbed from 'react-instagram-embed';

export default function HouseInfo() {
      
    const houses = [
        {
            id: 1,
            nameimg: 'old.png',
            name: 'Dunster',
            namedafter: 'Henry Dunster',
            namedafterimg: 'president.png',
            facultydeans: 'Cheryl Chen'
        }
    ];

    const houseList = houses.map(house => (
        <div className={styles.boxes}>
            <div className = {styles.box}>
                <div className = {styles.pics}><img src={house.nameimg}></img></div>
                <div><p className = {styles.name}>Name</p><p className = {styles.bio}>{house.name}</p></div>
            </div>
            <div className = {styles.box}>
                <div className = {styles.pics}><img src={house.namedafterimg}></img></div>
                <div><p className = {styles.name}>Named After</p><p className = {styles.bio}>{house.namedafter}</p></div>
            </div>
        </div>

    ));

    return (
        <div>
            {houseList}
        </div>
    )

}





    //   renderNamedAfter(info) {
    //     return (
    //         <div className={styles.boxes}>
    //             <div className = {styles.box}>
    //                 <div className = {styles.pics}>
    //                     <img src={info.named.imgsrc}></img>
    //                 </div>
    //             <div>
    //                 <p className = {styles.name}>{info.named.title}</p>
    //                 <p className = {styles.bio}>{info.named.bio}</p>
    //              </div>
    //          </div>
    //      </div>
    //     );
    //   }

    //   return (
    //     <div className={styles.boxes}>
    //         <div className = {styles.box}>
    //             <div className = {styles.pics}>
    //                 <img src="/old.png"></img>
    //             </div>
    //             <div>
    //                     <a className = {styles.name}>Named After</a>
    //                     <a className = {styles.bio}>Henry Dunster</a>
    //             </div>
    //         </div>
    //     </div>

//     render () {
//         return (
//         <div className={styles.boxes}>
//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/old.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Named After</a>
//                         <a className = {styles.bio}>{this.houses.map(this.renderInfo)}</a>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/president.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Faculty Deans</a>
//                         {/* <a className = {styles.bio}>Sean Kelly<br/>Cheryl Chen</a> */}
//                         <a className = {styles.bio}>{this.houses.map(this.renderFaculty)}</a>
                        
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/woman.png"></img>
//                 </div>
//                 <div>
//                         <p className = {styles.name}>Resident Deans</p>
//                         <p className = {styles.bio}>Michael Uy</p>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/student.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Residents' Nickname</a>
//                         <a className = {styles.bio}>Meece</a>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/team.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Famous Alumni</a>
//                         <a className = {styles.bio}>Al Gore</a>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}><img src="/architect.png"></img></div>
//                 <a className = {styles.name}>Established</a>
//                 <a className = {styles.bio}>1930</a>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/population.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Population</a>
//                         <a className = {styles.bio}>400</a>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/money.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>HOCO Budget</a>
//                         <a className = {styles.bio}>$26,000</a>
//                 </div>
//             </div>


//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/birthday.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Must-see Event</a>
//                         <a className = {styles.bio}>Goat Roast<br/>Fall Hoedown</a>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/infrastructure.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Neighborhood</a>
//                         <a className = {styles.bio}>River East</a>
//                 </div>
//             </div>



//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/pooja.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Mascot</a>
//                         <a className = {styles.bio}>Moose</a>
//                 </div>
//             </div>

//             <div className = {styles.box}>
//                 <div className = {styles.pics}>
//                     <img src="/property.png"></img>
//                 </div>
//                 <div>
//                         <a className = {styles.name}>Chill At</a>
//                         <a className = {styles.bio}>Dunster Grille</a>
//                 </div>
//             </div>

//         </div>

//   );
//         }
//}
