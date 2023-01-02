`use client`;
import React from "react";
import Layout from "../components/Layout";

const Form : React.FC = () => {
        return(
        <div className="container">
            <h1>Register Now</h1>
            <h3>Complete these three steps to register</h3>
            <div className="options-container">
                <div className="option-container">
                    <h3>Register on Devpost</h3>
                    <a target="_blank" href="https://auto-hacks.devpost.com" className="btn btn-light btn-lg">
                     <img src="/static/img/devpost.png" width="20" />&nbsp;&nbsp;Register</a>
                </div>
                <div className="option-container">
                    <h3>Join the Discord</h3>
                    <a target="_blank" href="https://discord.gg/StExf8BwNb" className="btn btn-light btn-lg">
                     <img src="/static/img/discord.png" width="20" />&nbsp;&nbsp;Join</a>
                </div>
                <div className="option-container">
                    <h3>Fill the Google form</h3>
                    <a target="_blank" href="https://forms.gle/ZSqXwmfgSy3MNtyUA" className="btn btn-light btn-lg">
                     <img src="/static/img/form.png" width="20" />&nbsp;&nbsp;Fill</a>
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

