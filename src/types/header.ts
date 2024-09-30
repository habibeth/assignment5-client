import { ReactNode } from "react";

export type TRoute = {
    path: string;
    element: ReactNode;
}

export type THeaderPaths = {
    name?: string,
    path?: string,
    element?: ReactNode,
    children?: THeaderPaths[]
}


export type THeaderItems = {
    key: string;
    label: ReactNode;
    children?: THeaderItems[]
}