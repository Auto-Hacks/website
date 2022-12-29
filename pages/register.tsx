`use client`;
import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import {toast} from "react-toastify";

function toastError(error: string){
    toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

function toastSuccess(message: string){
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}
const Form : React.FC = () => {
    useEffect(()=>setRegistered((localStorage.getItem("registered") === "true")))
    
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [verify, setVerify] = useState(false);
    const [registeredAlready, setRegistered] = useState(false);
    const submitForm = async e  => {
        e.preventDefault();
        try {
          const response = await fetch("/api/register", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({name, school, email, phone}) 
          });
          if (response.status === 200){
              localStorage.setItem("registered", "true");
              setRegistered(true);
              return toastSuccess("Registered successfully!");
          }
          if (response.status === 400){
              const json = await response.json()
              if (json.message === "exists"){
                  return toastError("Sorry, an account with this email or phone number already exists.");
              } 
              console.log(json);
              return toastError("Please check if you have inputted your information correctly (check console logs for details).");
          }
          if (response.status === 429){
              return toastError("You are being rate limited! Please try again later.");
          }
          return toastError("There was an error contacting the server. Please try again later. If the problem persists, contact us at autohackspsn@gmail.com");

        }
        catch (e){
            console.log(e);
            toastError("There was an error contacting the server. Please try again later. If the problem persists, contact us at autohackspsn@gmail.com");
        }
    }
    if (registeredAlready){
        return(
        <div className="container">
            <h1>Thanks for registering!</h1>
            <h3>Next steps</h3>
            <div className="options-container">
                <div className="option-container">
                    <h3>Register on devpost</h3>
                    <a target="_blank" href="https://auto-hacks.devpost.com" className="btn btn-light btn-lg">
                     <img src="/static/img/devpost.png" width="20" />&nbsp;&nbsp;Register</a>
                </div>
                <div className="option-container">
                    <h3>Join the discord</h3>
                    <a target="_blank" href="https://discord.gg/GF8rbvPuWC" className="btn btn-light btn-lg">
                     <img src="/static/img/discord.png" width="20" />&nbsp;&nbsp;Join</a>
                </div>
            </div>
            <style jsx> {`
                h1 {text-align: center}
                h3 {text-align: center}
                .container {
                    display: flex;
                    flex-direction: column
                }
                .options-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .option-container {
                    display: flex;
                    flex-direction: column;
                    margin-top: 40px;
                }

            `}</style>
        </div>)
    }
    return (
        <form className="form">
            <style jsx>{`
                .form {
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    max-width: 400px;
                }
                .form-group {
                    margin: 10px;
                }
                .form-check {
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                .btn {
                    width: 100px;
                    align-self: center;
                }
                
            `}</style>
          <div className="form-group">
            <label>Name</label>
              <input id="form-name" className="form-control" onChange={e=>setName(e.target.value)} placeholder="Enter name" value={name} />
          </div>
          <div className="form-group">
            <label>School</label>
            <input id="form-school" className="form-control" onChange={e=>setSchool(e.target.value)}  placeholder="Enter school" value={school} />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input id="form-email" type="email" className="form-control" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Phone number</label>
              <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">+91</span>
              </div>
                  <input onChange={e=>setPhone(e.target.value)} type="number" id="form-phone" className="form-control" placeholder="Enter phone number" value={phone} />
            </div>
          </div>
          <div className="form-check">
              { verify &&<input checked onChange={e=>setVerify(e.target.checked)} type="checkbox" id="form-confirm" className="form-check-input"/>}
              { !verify &&<input onChange={e=>setVerify(e.target.checked)} type="checkbox" id="form-confirm" className="form-check-input"/>}
            <label className="form-check-label">By checking this box, I verify that I am a high school student who is at least 13 years old and currently resides in India.</label>
          </div>
            {(name && school && email && phone && verify) && 
    <button type="submit" onClick={submitForm} className="btn btn-success">Submit</button>
           }
            {!(name && school && email && phone && verify) && 
                <button disabled type="submit" className="btn btn-success">Submit</button>
           }
            
        </form>
        )
}
const Register: React.FC = () => {

    return (
        <Layout>
        <div className="register">
            <Form />

        </div>
        <style jsx>{`
            .register {
                display: flex;
            }
        `}</style>
        </Layout>
    )
}

export default Register;

