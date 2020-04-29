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
            <h2>Software Developer</h2>
          </div>
          <img src="/portrait-1.jpg" />
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

      <style jsx>{`
        .container {
          width: 100%;
          border-top: 2px solid #E9E9E9;
        }
        .container-content {
          width: 100%;
          max-width: 900px;

          margin: auto;
          padding: 2rem 1.6rem;

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
        .container#landing h1 {
          font-size: 6rem;
          line-height: 6rem;
          letter-spacing: -2.5px;
          margin: 0;
        }
        .container#landing h2 {
          font-size: 1.4rem;
          font-weight: 400;
          color: #585858;
        }
        .container#landing img {
          height: 300px;
          border: 0.6rem solid white;
          box-shadow: var(--shadow);
          margin: 2rem 0 2rem 2rem;
        }

        .container#social {
          background: var(--bg-2);
        }
        .container#social .container-content {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          max-width: 600px;
        }
        .container#social img {
          height: 40px;
          max-width: 40px;
        }
      `}</style>
    </>
  )
}