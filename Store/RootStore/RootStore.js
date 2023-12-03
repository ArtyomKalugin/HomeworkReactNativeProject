import LangStore from "../../Modules/Lang/LangStore";
import React from "react";

class RootStore {
    langStore;

    constructor() {
        this.langStore = new LangStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
