import Head from 'next/head'
import TopbarComponent from '../components/topbar.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marlon Lückert</title>
      </Head>
      <TopbarComponent />
      <div id="landing" className="container">
        <div className="container-content">
          <div className="headline-container">
            <h1>
              Hey!<br />
              I'm Marlon.
            </h1>
            <h3>Software Developer</h3>
          </div>
          <img alt="portrait" src="/portrait-1.jpg" />
        </div>
      </div>
      
      <div id="social" className="container">
        <div className="container-content">
          <img alt="Github" src="/icons/github.svg" />
          <img alt="Twitter" src="/icons/twitter.svg" />
          <img alt="Youtube" src="/icons/youtube.svg" />
          <img alt="LinkedIn" src="/icons/linkedin.svg" />
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
          border-top: 2px solid #E9E9E9;
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
          color: #585858;
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
        .container#social img {
          height: 40px;
          max-width: 40px;
        }
        @media (max-width: 650px){
          .container#social img {
            height: 30px;
            max-width: 30px;
          }
        }

        .container#about {
          text-align: center;
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
          background: white;
          box-shadow: var(--shadow);
          padding: 1.2rem;
          border-radius: 10px;
          width: 340px;
          font-weight: 300;
          z-index: 1;

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