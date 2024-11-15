import { useEffect, useRef, useState, FC } from "react";
import Country from "../types/Country";
import { defaultRender } from "./MainArea";

type DetailedProp = {
    countries: Country[]
    country: Country,
    setter: Function
}

const DetailedCountryCard : FC<DetailedProp> = (props: DetailedProp): JSX.Element => {
    return (
        <div className="detailed-card-main">
            <div className="detailed-card-left">
                <div className="detailed-card-left-head">
                    <h2 className="detailed-card-name">{props.country.name.common}</h2>
                    <p>Population: {props.country.population}</p>
                    <p>Capital: {props.country.capital[0]}</p>
                    <p>The borders: {props.country.borders.join(' ')}</p>
                    <p>Languages: {Object.values(props.country.languages).join(' ')}</p>
                    <button onClick={() => defaultRender(props.countries, props.setter)}>Home</button>
                </div>
                <div className="detailed-card-left-bottom">
                    <img src= {props.country.flags.svg} alt={props.country.flags.alt} />
                </div>
            </div>
            <div className="detailed-card-right">
                
            </div>
        </div>
    )
}

export default DetailedCountryCard;