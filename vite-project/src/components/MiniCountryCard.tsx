import { useEffect, useRef, useState, FC } from "react";
import Country from "../types/Country";
import { detailedCardRender } from "./Header";

type MiniProp = {
    countries: Country[]
    country: Country,
    setter: Function
}

const MiniCountryCard: FC<MiniProp> = (props: MiniProp): JSX.Element => {
    return (
        <div onClick={() => detailedCardRender(props.country.name.common, props.countries, props.setter)} className="mini-card">
            <div className="mini-card-head">
                <img src={props.country.flags.svg} alt={props.country.flags.alt} />
            </div>
            <div className="mini-card-bottom">
                <p>name: {props.country.name.common}</p>
            </div>
        </div>
    )
}


export default MiniCountryCard