import Link from 'next/link'
import React from 'react';
import Layout from '../../styles/layout.js';
import styles from './faq.module.css';
import FAQItem from './faqitem.js';
import Button from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class FAQPage extends React.Component {
    constructor(props) {
      super(props);
      this.intro = [
          {title: "What is blocking?",
          body: "Blocking is the process of finding a group of people that you’ll live in the same House with after your freshman year."},
          {title: "How many people can be in a blocking group?",
          body: "1 - 8 people."},
          {title: "Do I have to room with the people I blocked with?",
          body: "You will live in the same House, but you don’t necessarily have to be roommates. Though many people do end up rooming together, some may choose to room with other floaters."},
          {title: "What is linking?",
          body: "Each blocking group can link with another blocking group (aka your linking group) so that they are assigned to the same neighborhood."},
    ];

    this.houses = [
        {title: "What are Dorms and what are Houses?",
        body: "Freshmen live in one of the 17 Dorms in the Yard, whereas sophomores, juniors, and seniors live in one of the 12 Houses."},
        {title: "What’s being in a House like?",
        body: "Many people cited their House lives as one of the best parts of their Harvard experience. Each House is a very tight-knit community, and you get to know all sophomores, juniors, and seniors. Houses organize many House-wide bonding activities, such as outings, Stein, and more."},
        {title: "What’s inside each House?",
        body: "Each House has its dining hall, common spaces, and library. Some Houses also have a gym, art studios, music rooms, and squash courts."},
        {title: "Which House is the best House?",
        body: "“As a [Insert House name here] resident, I have to say that [Insert House name here] is the best House.” In reality, each House has its pros and cons. For example, a House closer to the Square might have smaller rooms."},
  ];

    this.neighborhoods = [
        {title: "What are the 4 neighborhoods?",
        body: "The 12 Houses are broken into 4 neighborhoods based on proximity, and each of them comprises three Houses: River Central (Adams, Lowell, Quincy), River West (Eliot, Kirkland, Winthrop), River East (Dunster, Leverett, Mather), Quad (Cabot, Currier, Pforzheimer). Therefore, 9 Houses are River Houses and 3 Houses are Quad Houses."},
        {title: "Is the Quad bad?",
        body: "According to most River people, yes (keep in mind that they don’t live there). According to most Quad people, no."},
        {title: "How do I get to the Quad?",
        body: "The Radcliffe Quadrangle, popularly known as the Quad, is located about 15 minutes away from the Square. You can walk there or take the Quad Express."},
        {title: "Can I transfer to another House?",
        body: "Usually, people live in their House and find a great community there. If that is not your case, you can petition to transfer to another House after spending two academic terms in your original House. You should make your decision carefully as your blocking group dynamics might change as a result. "},
  ];

  this.start = [
      {title: "When should I start talking about blocking?",
      body: "Don’t stress about it. You might want to start talking about it earlier if you are considering multiple groups. Typically conversations begin in the early spring semester."},
      {title: "Should I block with my best friend(s)?",
      body: "It’s up to you. One important thing to remember is that you can still be friends if you don’t block together."},
      {title: "What if I have multiple friend groups?",
      body: "Well, you’ll just have to figure that one out."},
      {title: "When was the blocking group registration deadline?",
      body: "In 2020, the blocking group registration opened on March 2nd at 10:00 AM and closed on March 4th at 10:00 AM."},
      {title: "Do I get to indicate my preference for Houses?",
      body: "Unfortunately, no. The sorting process is randomized now, but maybe doing a River Run will increase your chance to get a River House, if that’s what you want."},
      {title: "Is it true that you’re more likely to get Quadded if you have a bigger blocking group?",
      body: "While this is a very popular rumor, it has already been debunked by an HOPD project. The project concluded that there is no consistent relationship between blocking group size and Quad rate. "},
    ];

  this.drama = [
      {title: "What is a blocking drama?",
      body: "Blocking drama typically happens when there is someone you want or don’t want in your blocking group. You likely either have too few or too many people in your blocking group, or your blockmates have different opinions about a person joining your blocking group."},
      {title: "How to tell somebody that I don’t want to block with him/her?",
      body: "Tell them directly and don’t make any false promises. It is easier to be honest. You can still stay friends with other people if you don’t block with them."},
      {title: "What if somebody doesn’t want me in their blocking group?",
      body: "Move on. It isn’t a big deal. Remember different circumstances may have led to this, such as their group being full. And if you were friends before, you can still be friends after."},
      {title: "What should I do if I want to block with a friend but I don’t know if (s)he has a blocking group yet?",
      body: "You can check your friend’s blocking status on Blockd and reach out to him/her if (s)he is open to blocking."},
      {title: "What is float?",
      body: "Float means blocking alone."},
      {title: "What if I float?",
      body: "A lot of people float, and regardless of your blocking group, you’ll get assigned to a House with a great community of different people."},
  ];

  this.day = [
      {title: "What is Housing Day?",
      body: "On Housing Day, blocking groups find out which House they are assigned to."},
      {title: "When is Housing Day?",
      body: "In 2020, Housing Day was scheduled to take place on March 12th, but it was delayed to April 10th due to Covid-19."},
      {title: "What is River Run?",
      body: "It’s an opportunity for you to drink in the name of celebrating an age-old tradition. On Housing Day Eve, freshmen do a shot of alcohol in the River Houses they want to end up in to please the “River Gods”."},
      {title: "What are Housing Day videos?",
      body: "In the weeks leading up to Housing Day, HOCOs (House Committees) get freshmen excited by releasing Housing Day videos on YouTube. Those videos are really fun because they roast one another."},
      {title: "What is a pre-Covid Housing Day like?",
      body: "Typically, the entire blocking group would all be in one room. The day started with representatives from each House chanting and marching in the Yard. Shortly thereafter, they would rush into each room and chant their House name. The rest of the day included having dinner at the House, touring the House, meeting upperclassmen, among other fun things.?"},
      {title: "What is a Covid Housing Day like?",
      body: "Due to Covid-19, Housing Day took a virtual form in 2020. On Housing Day, each freshman received a link to a Zoom call, where they found out their Housing assignment and got HOCO and the House residents’ warm welcome message."},
    ];


this.blockd = [
    {title: "What is Blockd?",
    body: "The normal blocking process is already stressful enough for freshmen, and we only imagine how difficult it would be to navigate all this in the age of Covid. Our goal is to create a website and an app that gives people accurate information about each House, helps people navigate the blocking process, and reduces blocking drama."},
    {title: "Can I suggest some improvements?",
    body: "Of course! Please email appblockd@gmail.com with any suggestions. We appreciate your feedback."},
  ];

}


    render () {
      return(
<Layout>
        <CssBaseline/>
        <div>

            <div className={styles.imgcontainer}>
                <img className={styles.blockdimage} src="/faq.png"></img>
                <h1 className = {styles.blockdtitle}>FAQ</h1>
            </div>
          <div className={styles.wrap}>
              <h2 className = {styles.subtitle}>Blocking 101</h2>
              {this.intro.map(item => <FAQItem title={item.title} body={item.body}/>)};
              <h2 className = {styles.subtitle}>Houses</h2>
              {this.houses.map(item => <FAQItem title={item.title} body={item.body} />)};
              <h2 className = {styles.subtitle}>Neighborhoods</h2>
              {this.neighborhoods.map(item => <FAQItem title={item.title} body={item.body} />)};
              <h2 className = {styles.subtitle}>Start Blocking</h2>
              {this.start.map(item => <FAQItem title={item.title} body={item.body} />)};
              <h2 className = {styles.subtitle}>Blocking Drama</h2>
              {this.drama.map(item => <FAQItem title={item.title} body={item.body} />)};
              <h2 className = {styles.subtitle}>Housing Day</h2>
              {this.day.map(item => <FAQItem title={item.title} body={item.body} />)};
              <h2 className = {styles.subtitle}>Blockd</h2>
              {this.blockd.map(item => <FAQItem title={item.title} body={item.body} />)};
          </div>
        </div>
</Layout>
      );
    }
}
