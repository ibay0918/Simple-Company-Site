import React, { Component } from 'react';
import '.Home.css';

class Home extends Component {
    render() {
      let heading = "Soaring to new heights";
      let subHeading = "Lorem ipsum dolor amet yOLO flexitarian meh truffaut excepteur, fixie slow-carb pabst nostrud qui velit sustainable ipsum aesthetic beard.";

      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
              <h1 className="title">{ heading }</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{ subheading }</h2>
              </div>
                <a className="button is-large is-primary" id="learn">Learn more</a>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <div className="columns pd is-desktop">
                <div className="column is-1 has-text-centered">
                  <i className="fa fa-cog is-primary"></i>
                </div>
                <div className="column is-one-third-desktop">
                  <p className="title"><strong>We provide superior logistics so that you business works</strong></p>
                </div>
                <div className="column">
                  <p>Cred minim marfa ennui id, neutra twee mumblecore adaptogen nostrud sed. Tousled culpa fam flexitarian. Small batch enim 3 wolf moon, cold-pressed nulla pok pok est af XOXO woke locavore officia et stumptown photo booth. </p>
                </div>
              </div>

          <div className="columns pd">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">efore they sold out 8-bit selfies pinterest. Typewriter street art normcore 8-bit disrupt plaid raclette, umami cred wolf.</p>
                <p className="subtitle">- Gary Simon</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">efore they sold out 8-bit selfies pinterest. Typewriter street art normcore 8-bit disrupt plaid raclette, umami cred wolf.</p>
                <p className="subtitle">- Gary Simon</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">efore they sold out 8-bit selfies pinterest. Typewriter street art normcore 8-bit disrupt plaid raclette, umami cred wolf.</p>
                <p className="subtitle">- Gary Simon</p>
              </div>
            </div>
          </div>
          </section>
        </div>
      );
    }
}

export default Home;
