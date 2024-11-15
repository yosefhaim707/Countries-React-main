import { useEffect, useRef, useState, FC } from "react";
import Country from "../types/Country";
import MiniCountryCard from "./MiniCountryCard";
import DetailedCountryCard from "./DetailedCountryCard";
import Header from "./Header";
import MainArea from "./MainArea";



const DataCenter: FC = (): JSX.Element => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [mainRender, setMainRender] = useState<JSX.Element>(<h1>Hi</h1>)

    function testRender(element: JSX.Element): void {
        setMainRender(element)
    }


    useEffect(() => {
        async function fetchData(): Promise<void> {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,capital,borders,languages,flags,maps');
            const data: Country[] = await response.json();
            
            setCountries(data);
            console.log("data", data);
            };
       
        fetchData();
        }, []
    );
    return (
        countries.length > 0 ? (
            <>
                <Header countries={countries} element={mainRender} setter={testRender}/>
                <MainArea elements={mainRender} countries={countries} setter={testRender} />
            </>
        ) : (
            <div>Loading...</div>
        )
    );
    
};



export default DataCenter;