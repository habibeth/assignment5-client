import { NavLink } from "react-router-dom";
import { THeaderItems, THeaderPaths } from "../types";



export const sidebarGenerator = (items: THeaderPaths[], role?: string) => {
    const sidebarItems = items.reduce((acc: THeaderItems[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }

        if (item.children) {
            acc.push({
                key: item.name!,
                label: item.name,
                children: item.children.map((child: any) => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                }))
            })

        }

        return acc;
    }, [])


    return sidebarItems
};