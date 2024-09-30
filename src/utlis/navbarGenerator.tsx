import { NavLink } from "react-router-dom";
import { THeaderItems, THeaderPaths } from "../types";


export const navbarGenerator = (items: THeaderPaths[]) => {


    const navbarItems = items.reduce((acc: THeaderItems[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`${item.path}`}>{item.name}</NavLink>
            })
        }

        return acc;
    }, [])


    return navbarItems
};