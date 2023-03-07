import { createContext, useCallback, useContext, useEffect } from "react"

import { useUpdate, useLocalStorage, useInterval } from "react-use";
import { Kai } from "./models/Kai";
import React from "react";
import { Thing } from "./models/Thing";

export type KaiContextValue = Kai;

export const KaiContext = createContext<KaiContextValue | undefined>(undefined);

export interface KaiProps {
    children?: React.ReactNode;
}

export const KAI_PERSISTENCE_KEY = "machi2-kai-persistence";

export function KaiProvider({ children }: KaiProps) {
    const [encodedKai, setEncodedKai] = useLocalStorage<string>(KAI_PERSISTENCE_KEY, "{}", { raw: true });
    const [kai] = React.useState(() => new Kai());

    useEffect(() => {
        if (encodedKai) {
            kai.load(encodedKai);
        }
    }, [encodedKai, kai]);

    
    const autoSaveKai = useCallback(() => {
        const newlyEncoded = kai.encode();
        if (newlyEncoded !== encodedKai) {
            console.log(newlyEncoded);
            setEncodedKai(newlyEncoded);
        }
    }, [encodedKai, kai, setEncodedKai])
    
    useInterval(autoSaveKai, 10000);
    
    return (
        <KaiContext.Provider value={kai}>
            {children}
        </KaiContext.Provider>
    )
}

export function useKai(): KaiContextValue {
    const kai = useContext(KaiContext)!; 
    if (!kai) {
        throw new Error("useKai should have been called inside KaiProvider");
    }
    return kai;
}

export function useThing(id: string) {
    const kai = useKai();
    const thing = kai.things.get(id);
    if (thing) return thing;
}