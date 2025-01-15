import React from "react"

export const NewsCard = (props) => {
    return(
        <div className="news-card"> 
            <img src={props.cover ?? "not-available.jpeg"} alt="news"/>
        </div>
    )
}