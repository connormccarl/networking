import Head from 'next/head'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';

import classes from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Networking App</title>
        <meta charset="utf-8" />
        <meta name="description" content="Networking for Orange County's Elite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        {/* Marketing messaging and featurettes
        ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}

        <div className="container marketing">

          {/* Three columns of text below the carousel */}
          <div className="row">
            <div className="col-lg-4">
              <Image 
                className="rounded-circle"
                width={140}
                height={140}
                src="/broad.jpg"
                alt="Picture of people networking"
              />
              <h2 className="fw-normal">Broad</h2>
              <p>We are a networking group catering to all elite professionals no matter your industry. If you want a chance to network with other heavy-hitters, join and watch your network explode.</p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <Image 
                className="rounded-circle"
                width={140}
                height={140}
                src="/invite-only.jpg"
                alt="Picture of a lock"
              />
              <h2 className="fw-normal">Invite-Only</h2>
              <p>We are an invite-only networking group, exclusively offering unlimited networking potential to its members. Reach out to us if you have an interest in joining.</p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <Image 
                className="rounded-circle"
                width={140}
                height={140}
                src="/entertaining.jpg"
                alt="Picture of a girl laughing"
              />
              <h2 className="fw-normal">Entertaining</h2>
              <p>We aim to provide entertaining and fun networking events that allow people to connect and enjoy themselves.</p>
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}


          {/* START THE FEATURETTES */}

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Poker Tournaments <span className="text-body-secondary">That&apos;ll blow your mind.</span></h2>
              <p className="lead">Network with other heavy-hitters while playing poker. We accept people of all skill-levels. Usually only a $100 buy-in.</p>
            </div>
            <div className="col-md-5">
              <Image 
                src="/poker.jpg"
                width={500}
                height={400}
                alt="Picture of a poker player's chips and whiskey"
                className='featurette-image img-fluid mx-auto'
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Another Event <span className="text-body-secondary">See for yourself.</span></h2>
              <p className="lead">Find yourself here at this event.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Last Event <span className="text-body-secondary">Checkmate.</span></h2>
              <p className="lead">Come experience the fun. </p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
          </div>

          {/* /END THE FEATURETTES */}

        </div>{/* /.container */}
      </main>
    
    </>
  )
}
