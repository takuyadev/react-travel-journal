import React from 'react'

export default function Card(props){
    return (
        <section className="card">
            <img className="card__image" src={props.item.imageUrl}/>
            <div className="card__information">    
                <div className="card__tags">
                    <div className="card__location">
                        <img src="../images/location-icon.png" alt="Location Icon"/>
                        <p>{props.item.location}</p>
                    </div>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card__title">{props.item.title}</h1>
                <p className="card__subheading"><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                <p className="card__description">{props.item.description}</p>
            </div>
        </section>
    )
}