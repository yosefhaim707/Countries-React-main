import { FC, useEffect } from "react"
import Country from "../types/Country";
import MiniCountryCard from "./MiniCountryCard";

type MainProps = {
    elements: JSX.Element,
    setter: Function,
    countries: Country[]
}

const MainArea: FC<MainProps> = (props: MainProps): JSX.Element => {

    
    useEffect(() => {
        defaultRender(props.countries, props.setter);
    }, [])
    return (
        props.elements
    )
};

export function defaultRender(countriesArr: Country[], setFunction: Function): void {
    const countries: Country[] | undefined = countriesArr.slice(0, 5);
    if (countries == undefined) {
        setFunction(<h1>Error: Cannot find countries</h1>)
    }

    else {
        const cardArr: JSX.Element[] = [];
        for (let index = 0; index < countries.length; index++) {
            const element: Country = countries[index];
            cardArr.push(<MiniCountryCard countries={countriesArr} country={element} setter={setFunction} />)
        }
        setFunction(
        <>
            {cardArr}
        </>)


    }
}



export default MainArea;