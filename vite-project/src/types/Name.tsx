import NativeName from "./NativeName";

type Name = {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
};

export default Name;