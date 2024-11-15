import { FC, useRef } from "react";
import Country from "../types/Country";
import DetailedCountryCard from "./DetailedCountryCard";
import { defaultRender } from "./MainArea";

type HeaderProp = {
    countries: Country[],
    element: JSX.Element,
    setter: Function
}


const Header: FC<HeaderProp> = (props: HeaderProp): JSX.Element => {

    let inputValue = useRef<string>('')
    const optionList: JSX.Element[] = props.countries.map(country =>
        <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
    )

    



    return (
        <div className="navigation-main">
            <nav className="navbar">
                <button className="home-btn" onClick={() => defaultRender(props.countries, props.setter)}>Home</button>
                <button onClick={() => detailedCardRender('Israel', props.countries, props.setter)}>Israel</button>
                <button onClick={() => detailedCardRender('France', props.countries, props.setter)}>France</button>
                <button onClick={() => detailedCardRender('United States', props.countries, props.setter)}>USA</button>
                <button onClick={() => detailedCardRender('Thailand', props.countries, props.setter)}>Thailand</button>
                <button onClick={() => detailedCardRender('United Kingdom', props.countries, props.setter)}>United Kingdom</button>

            </nav>
            <div className="search-section">
                <select defaultValue="1" onChange={(event) => detailedCardRender(event.target.value, props.countries, props.setter)}>
                    <option value="1" disabled hidden>Choose here</option>
                    {optionList}
                </select>
                <input type="text" onChange={(event) => inputValue.current = event.target.value}/>
                <button onClick={() => detailedCardRender(inputValue.current, props.countries, props.setter)} >Search</button>
            </div>

        </div>
    )
};

export function detailedCardRender(countryName: string, countriesArr: Country[], setFunction: Function): void {
    const currentCountry: Country | undefined = countriesArr.find(c => c.name.common == countryName);
    if (currentCountry == undefined) {
        setFunction(<h1>Error: Country Not Found</h1>)
    }
    else {
        setFunction(<DetailedCountryCard countries={countriesArr} country={currentCountry} setter={setFunction} /> )
    }
}

export default Header;