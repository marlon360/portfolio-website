import { useRef, useEffect } from 'react';
import Head from 'next/head'
import TopbarComponent from '../components/topbar.component'
import Typed from 'typed.js';

export default function Home() {

  const textInput = useRef(null);
  const typedStrings = useRef(null);

  useEffect(() => new Typed(textInput.current, {
    stringsElement: typedStrings.current,
    typeSpeed: 120,
    backSpeed: 30,
    backDelay: 2000,
    showCursor: false,
    loop: true
  }));

  return (
    <>
      <Head>
        <title>Marlon Lückert</title>
        <meta name="Description" content="Marlon Lückert. Software Developer. This is the portfolio of Marlon Lückert showcasing his latest work."></meta>
      </Head>
      <TopbarComponent />
      <div id="landing" className="container">
        <div className="container-content">
          <div className="headline-container">
            <h1>
              Hey!<br />
              I'm Marlon.
            </h1>
            <div ref={typedStrings}>
              <h3>Software</h3>
              <h3>Augmented Reality</h3>
              <h3>Virtual Reality</h3>
              <h3>Web</h3>
              <h3>Game</h3>
            </div>
            <h3><span ref={textInput}/> Developer</h3>
          </div>
          <img alt="portrait" src="/portrait-1.jpg" />
        </div>
      </div>
      
      <div id="social" className="container">
        <div className="container-content">
          <a href="https://github.com/marlon360" target="_blank" rel="noopener">
            <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="github-outer" fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
            </svg>
          </a>
          <a href="https://twitter.com/Marlon360" target="_blank" rel="noopener">
            <img alt="Twitter" src="/icons/twitter.svg" />
          </a>
          <a href="https://www.youtube.com/channel/UCTbvpjAfRFcu7jFe92juhEg" target="_blank" rel="noopener">
            <img alt="Youtube" src="/icons/youtube.svg" />
          </a>
          <a href="https://www.linkedin.com/in/marlon-lueckert/" target="_blank" rel="noopener">
            <img alt="LinkedIn" src="/icons/linkedin.svg" />
          </a>
        </div>
      </div>
      
      <div id="about" className="container">
        <div className="container-content">
          <h2>About me</h2>
          <h3>Who am I?</h3>
          <div className="arrangement-container">
            <div className="text-box">
              I’m <b>Marlon Lückert</b>  from Hamburg, Germany! Currently I’m studying Digital Realiyt M.Sc. in Hamburg.
              I love building experiences for the <b>Web</b>, <b>Augmented Reality</b>, <b>Virtual Reality</b> and <b>Games</b>.<br/>
              Have a look at my portfolio below!
            </div>
            <img src="/portrait-2.jpg" alt="portrait" />
          </div>
        </div>
      </div>
      
      <div id="projects" className="container">
        <div className="container-content">
          <h2>Project Showcase</h2>
          <h3>What am I doing?</h3>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          border-top: var(--border);
          color: var(--color-1);
        }
        .container-content {
          width: 100%;
          max-width: 900px;

          margin: auto;
          padding: 3rem 1.6rem;

          box-sizing: border-box;
        }
        .container#landing {
          background: var(--bg-1);
        }
        .container#landing .container-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 650px){
          .container#landing .container-content {
            flex-direction: column;
            text-align: center;
          }
        }
        .container h1 {
          font-size: 6rem;
          line-height: 6rem;
          letter-spacing: -2.5px;
          margin: 0;
        }
        .container h2 {
          font-size: 4.2rem;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .container h3 {
          font-size: 1.4rem;
          font-weight: 400;
          margin: 0.8rem 0;
          color: var(--color-2);
        }
        @media (max-width: 650px){
          .container h1 {
            font-size: 3rem;
            line-height: 3rem;
          }
          .container h2 {
            font-size: 2.2rem;
          }
          .container h3 {
            font-size: 1.2rem;
            margin: 0.5rem 0;
          }
        }
        .container#landing img {
          height: 300px;
          outline: solid 0.6rem white;
          outline-offset: -0.55rem;
          box-shadow: var(--shadow);
          margin: 2rem 0 2rem 2rem;
        }

        @media (max-width: 650px){
          .container#landing img {
            height: 300px;
            box-shadow: var(--shadow);
            margin: 2rem auto 1rem auto;
            width: 100%;
            max-width: 300px;
            height: auto;
          }
        }

        .container#social {
          background: var(--bg-2);
        }
        .container#social .container-content {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          max-width: 650px;

          padding: 1.6rem 1.6rem;
        }
        .container#social img, .container#social svg {
          height: 40px;
          max-width: 40px;
          transition: transform 250ms ease;
        }
        .container#social a:hover img, .container#social a:hover svg {
          transform: translateY(-10%);
        }
        @media (max-width: 650px){
          .container#social img, .container#social svg {
            height: 30px;
            max-width: 30px;
          }
        }

        .container#about {
          text-align: center;
          background: var(--bg-3);
        }

        .container#about .container-content {
          
        }

        .container#about .arrangement-container {
          display: flex;
          align-items: center;
          justify-content: center;

          margin: 3rem 1rem;
        }

        .container#about img {
          height: 340px;
          border-radius: 10px;

          transform: translateX(50%);
        }
        .container#about .text-box {
          text-align: left;
          background: var(--bg-3);
          box-shadow: var(--shadow);
          padding: 1.2rem;
          border-radius: 10px;
          width: 340px;
          font-weight: 300;
          z-index: 1;
          border: var(--border-dark);

          position: absolute;
          transform: translateX(-30%) translateY(-30%);
        }

        @media (max-width: 650px){
          .container#about .arrangement-container {
            display: flex;
            flex-direction: column;
            margin: 1rem 1rem;
          }
          .container#about img {
            transform: translateX(0);
            width: 96%;
            max-width: 300px;
            height: auto;
          }
          .container#about .text-box {
            width: 100%;
            max-width: 340px;
            position: relative;
            transform: translateX(0%) translateY(10%);
          }
        }

        .container#projects {
          background: var(--bg-2);
          text-align: center;
        }

      `}</style>
    </>
  )
}