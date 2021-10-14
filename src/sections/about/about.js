import React from 'react';
import useStyles from './styles';
import styled from "styled-components";
import headshot from '../../images/headshot.jpg'

function About() {

  const classes = useStyles()
  const Wrapper = styled.section`
  padding: 20px 150px 140px;
  background: #d4ebf2;
`;  


  return (
    <div>
        <Wrapper>
        <h1>About Me</h1>
        <img className={classes.headshot} src={headshot}/>
        <p className={classes.text}>Root-and-branch review cta but product launch. Blue sky thinking we're starting to formalize flexible opinions around our foundations. Land the plane mobile friendly exposing new ways to evolve our design language. Business impact how much bandwidth do you have yet streamline. We need to crystallize a plan time to open the kimono. Optimize for search. Canatics exploratory investigation data masking zeitgeist nor paddle on both sides, for what's our go to market strategy?. Can you ballpark the cost per unit for me (let's not try to) boil the ocean (here/there/everywhere) we need to future-proof this, and parallel path nor when does this sunset? for collaboration through advanced technlogy. Zeitgeist. Market-facing don't over think it and my capacity is full scope creep or not a hill to die on. Target rich environment.</p>
        <p className={classes.text}> Granularity. UX. Make sure to include in your wheelhouse increase the resolution, scale it up we need a larger print. Ping me if you could do that, that would be great so all hands on deck. Three-martini lunch hire the best. Can you send me an invite? hit the ground running get six alpha pups in here for a focus group. Ultimate measure of success product market fit. Usabiltiy target rich environment looks great, can we try it a different way. Throughput we need to build it so that it scales nor fire up your browser, so drill down, can we jump on a zoom nor cloud strategy. Blue sky feed the algorithm.</p>
        <p className={classes.text}> Currying favour work so blue money. We need a recap by eod, cob or whatever comes first have bandwidth hammer out. Dogpile that. Let's prioritize the low-hanging fruit helicopter view. Who's responsible for the ask for this request? cloud strategy this is a no-brainer, yet can you run this by clearance? hot johnny coming through . Our competitors are jumping the shark creativity requires you to murder your children but reach out. We need this overall to be busier and more active quick win. Push back land the plane everyone thinks the soup tastes better after theyâ€™ve pissed in it weaponize the data both the angel on my left shoulder and the devil on my right are eager to go to the next board meeting and say weâ€™re ditching the business model. </p>
        <span className={classes.bottomSpace} />
        </Wrapper>
    </div>
  );
}


export default About;


// example of another way to export

// or export default function About(){}