import React from "react";
import Ubication from "../Image/ubication.svg";

export default function MainContent(props){
    return (
        <div>
            <section className="container">
                <img src={props.data.imageUrl} alt="" className="picture"/>
                <div className="info">
                    <div className="ubication">
                        <img src={Ubication} alt="" />
                        <span>{props.data.location}</span>
                        <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2>{props.data.title}</h2>
                    <h3>{props.data.startDate} - {props.data.endDate}</h3>
                    <p>{props.data.description}</p>
                </div>
            </section>
            {props.data.hr && <div className="line"></div>}
        </div>
    );
}

