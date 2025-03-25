import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error(
            "useGlobalContext() ni biz GlobalContextProvider() ichida ishlatishimiz shart!"
        );
    }

    return context;
};
