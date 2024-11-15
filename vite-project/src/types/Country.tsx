import Flags from "./Flags";
import Name from "./Name";

type Country = {
    flags: Flags;
    name: Name;
    capital: string[];
    languages: Record<string, string>;
    borders: string[];
    population: number;
    maps: Record<string, string>;
};


export default Country;


