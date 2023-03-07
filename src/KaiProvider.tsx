import { createContext, useContext, useEffect } from "react"

import { useRerender, usePersist } from "@lilib/hooks";
import useLocalStorage from 'react-use-localstorage';

export interface KaiContextValue {
    objs: Map<string, any>
}

export const KaiContext = createContext<KaiContextValue | undefined>(undefined);

export interface KaiProps {
    children?: React.ReactNode;
}

export function KaiProvider({ children }: KaiProps) {
    const value={
        objs: new Map()
    };
    console.log("yoX",children);
    return (
        <KaiContext.Provider value={value}>
            {children}
        </KaiContext.Provider>
    )
}

export function useKai(id: string, x: number, y: number): {x: number, y: number, move: () => void} {
    const { objs } = useContext(KaiContext)!; 
    let obj: any = objs.get(id);
    if (!obj) {
        obj = {x, y}
        objs.set(id, obj);
    }

    useEffect(() => () => {
        objs.delete(id);
    }, [id, objs])

    const rerender = useRerender();
    
    return {
        ...obj,
        move: () => {
            obj.x += 10;
            console.log(obj.x);
            rerender();
        }
    };
}