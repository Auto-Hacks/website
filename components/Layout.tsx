import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head"

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="page">
      <Head>
            <title>AutoHacks | Hackathon</title>
            <meta name="description" content="Join AutoHacks for a weekend of hacking and and win awesome prizes! This free, 48 hour long hybrid hackathon takes place on January 20-22." />
            <meta property="og:title" content="AutoHacks" />
            <meta property="og:site_name" content="AutoHacks" />
            <meta property="og:description" content="Join AutoHacks for a weekend of hacking and and win awesome prizes! This free, 48 hour long hybrid hackathon takes place on January 20-22." />
            <meta property="og:image" content="https://i.imgur.com/4ihwUEw.png" />
            <meta property="og:type" content="website" />
        </Head>

      <ToastContainer />
    <Header />
    <div className="layout">{props.children}</div>
    <Footer />
    <img className="circuit-bl" src="static/img/circuit_bl.png" />
    <img className="circuit-br" src="static/img/circuit_br.png" />

    <style jsx global>{`
        .page {
            position: relative;
        }
      @font-face {
          font-family: Syne-Mono;
          src: url(/static/ttf/SyneMono-Regular.ttf);
      }
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: "Helvetica Neue", sans-serif;

      }

      p {
          word-break: break-all;
          white-space: pre-line;
      }
      pre {
          word-break: break-all;
          white-space: pre-wrap;
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
      .layout {
        padding: 50px 25%;
        background: rgba(0, 0, 0, 0.05);
      }
      h1 {
          text-align: center;
      }
      h2 {
          text-align: center;
      }
      @media (max-width: 1200px){
          .layout {
              padding: 50px 10%;
          }
          .circuit-bl {
              display: none;
          }
          .circuit-br {
              display: none;
          } 
      }
      .circuit-bl {
          position: absolute;
          bottom: 0;
          left: 10px;
          height: 120px;
      }
      .circuit-br {
          position: absolute;
          bottom: 0;
          right:  0;
          height: 100px;
      } 

    `}</style>
    <style jsx>{`
         `}</style>
  </div>
);

export default Layout;
