import React from "react"
import Layout from "../components/Layout"
import useTimer from "../lib/useTimer"


const Homepage: React.FC = () => {
  return (
    <Layout>
        <h1><b>AutoHacks</b> will start in</h1>
        <Timer />
        <h2 className="subhead">Join us for a hybrid hackathon from <b>20</b> to <b>22</b> January</h2>
        <h2 className="subhead">Build a hack to automate away the repetitive tasks in your life and win awesome prizes!</h2>
        <div className="text-center">
            <a href="/register" className="btn btn-dark btn-lg" role="button" aria-pressed="true"><h2>Register Now</h2></a>
        </div>
        <style jsx>{`
            .subhead {
               margin-top: 50px;
            }
            h1 {
                margin-bottom: 50px;
            }
            a {
                margin-top: 70px;
                padding-top: 20px;
            }
            .btn {
            }
        `}</style>
    </Layout>
  )
}

const Timer = () => {
    let timeLeft : any;
    let _ : any;
    [timeLeft, _] = useTimer(new Date(2023, 0, 20, 17, 0, 0))
    return (
       <div>
        { timeLeft.seconds % 2 == 0 && <pre className="timer-text">{timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S</pre>}
        { timeLeft.seconds % 2 != 0 && <pre className="timer-text">{timeLeft.days}D   {timeLeft.hours}H   {timeLeft.minutes}M   {timeLeft.seconds}S</pre>}
      <style jsx>{`
          .timer-text {
              font-family: Syne-Mono;
              font-size: 4vw;
              text-align: center;
          }
          @media (max-width: 1200px){
              .timer-text {
                  font-size: 6.5vw
              }
          }
      `}</style>
      </div>

  )
}

export default Homepage
