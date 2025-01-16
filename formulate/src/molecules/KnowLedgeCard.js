import React from "react";

export const KnowLedgeCard = (props) => {
    return (
        <div className="knowledge-card">
            <img src={props.cover ?? "not-available.jpeg"} alt ="knowledge"/>
            <h4 className="title">{props.title}</h4>
            <p className="description">{props.description}</p>
            {props.link && (
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    Learn more
                </a>
            )}
        </div>
    )
}