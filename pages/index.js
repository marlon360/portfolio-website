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

      <style jsx>{`
        .container {
          width: 100%;
        }
        .container-content {
          width: 100%;
          max-width: 900px;

          margin: auto;
          padding: 5rem 1.6rem;

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
          margin: 0 0 0 2rem;
        }
      `}</style>
    </>
  )
}