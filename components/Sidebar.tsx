import Link from "next/link";
import React, { useState } from "react";

interface ItemHash {
    [key: number]: string;
}
interface SidebarProps {
    navItems: string[];
}
export default function Sidebar({ navItems }: SidebarProps): JSX.Element {
    {
        /* we maintain a set of indices which are to be highlighted upon rendering*/
    }
    const [highlighted, setHighlighted] = useState<Set<number>>(
        new Set<number>()
    );
    let i = 0;
    const [hashedNavItems] = useState<ItemHash>(
        navItems.reduce((accum: ItemHash, curr: string) => {
            return (accum = { ...accum, [i++]: curr });
        }, {})
    );
    {
        /*todo: want to use a scrollspy to modify the state of this component AND/OR using the user's cursor to
highlight a list item*/
    }
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {Object.keys(hashedNavItems).map((key: string) => (
                    <li key={key}>
                        {highlighted.has(Number(key)) ? (
                            <strong>{hashedNavItems[key]}</strong>
                        ) : (
                            hashedNavItems[key]
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
