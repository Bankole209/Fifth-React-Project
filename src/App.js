import React from "react";
import Navbar from "./component/Navbar.js";
import Card from "./component/Card.js";
import Joke from "./component/Joke.js";
import gift from './gift.png';
import donots from './donots.png';
import chicken from './rolls and chicken.png';
import rolls from './rolls.png';




function App() {
   
 return(
     <div>
         <Navbar />
         <div className="contact">
                <Card
                img= {gift}
                name="Asquare Gift Basket"
                phone="+234 567 3827"
                email="asquarepastries.com" />
                <Card
                img={donots}
                name="Asqaure Donots"
                phone="+234 567 3827"
                email="asquarepastries.com" />
                <Card
                img={chicken}
                name="Asquare Chicken"
                phone="+234 567 3827"
                email="asquarepastries.com" />
                <Card
                img={rolls}
                name="Asquare Rolls"
                phone="+234 567 3827"
                email="asquarepastries.com" />

                <Joke
                setup="I got my daughter a fridge for her birthday"
                punchline="I can't wait to see her face light up when she opens it." />
                <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomeware!" />
                <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy." />
                <Joke 
                setup="Why do bees stay in the hive in the wintter?"
                punchline="Swarm" />
                <Joke 
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"/>

            </div>
     </div>
 )
}


export default App;
