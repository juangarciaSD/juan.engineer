import React from "react";
import { Data } from "use-lanyard";

interface ContextType {
    revalidate: () => void;
    data: Data;
};

const AppContext = React.createContext<ContextType>({
    revalidate: () => null,
    data: null
});

export const AppProvider = AppContext.Provider;
export default AppContext;