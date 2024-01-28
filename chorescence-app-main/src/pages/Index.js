import React, {Component} from 'react';
import {Container, Button, Jumbotron} from 'react-bootstrap';

class Index extends Component {
  render() {
    return (
      <Container fluid style={{padding:0}}>
        <div className="splashImg">
          <div className="text">
              <h1>Chorescence</h1>
              <hr/>
              <p>The easy way for roomates to split up chores</p>
          </div>
        </div>
        <Jumbotron>
        <h1>Chores made easier</h1>
        <p>Introducing Chorescence – Your Ultimate Roommate Harmony Solution!

Say goodbye to household chaos and hello to seamless living with Chorescence, the ultimate website designed exclusively for roommates to effortlessly track and share household tasks. We've reimagined the chore game to bring you a platform that turns everyday responsibilities into a collaborative and rewarding experience.
<br>
<b>Effortless Task Management:</b> Chorescence takes the hassle out of assigning and tracking chores. Our sleek and user-friendly interface allows you to allocate tasks with ease, ensuring everyone plays their part in maintaining a sparkling home.
<br>
<b>Synced Schedules</b>: No more clashes over conflicting schedules! Chorescence comes with a shared calendar feature, empowering roommates to coordinate tasks and plan ahead. Now, staying on top of responsibilities is as simple as a few clicks.
<br>
<b>Real-Time Notifications</b>: Stay in the loop with our real-time notification system. Receive updates on completed tasks and stay connected with your roommates, fostering a culture of accountability and collaboration.
<br>
<b>Transparent Communication:</b> Communication is key, and Chorescence ensures everyone is on the same page. Share updates, discuss tasks, and keep the lines of communication open with our integrated messaging features.
<br>
Experience the joy of hassle-free living – join the Chorescence revolution today! Sign up now and transform your shared living space into a haven of harmony and efficiency. Because when chores are managed effortlessly, roommates thrive together!</p>
        <Button type="primary" href="/signup">Join Now</Button>
        </Jumbotron>  
      </Container>
    );
  }
}

export default Index;