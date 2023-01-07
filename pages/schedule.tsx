import React from "react";
import Layout from "../components/Layout";

const Schedule: React.FC = () => {

    return (
        <Layout>
        <div className="schedule">
            <iframe className="frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFuz_BE5iHWBnM9e7rMqx9b59owCfQP7dQWU-3RlMv_Gg_i-0QYMFg3lPGbDL-bgeB6rTqFU5SoaFb/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
        <style jsx>{`
            .schedule {
                display: flex;
            }
            .frame {
                margin: auto;
                width: 100%;
                height: 70vh;
            }
        `}</style>
        </Layout>
    )
}

export default Schedule;
