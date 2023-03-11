import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar(navItems: string[]): JSX.Element {
    const [highlighted, setHighlighted] = useState<number>();
    {
        /*todo: want to use a scrollspy to modify the state of this component AND/OR using the user's cursor to
highlight a list item*/
    }
    return (
        <div className="sidebar">
            <ul className="sidebar-list"></ul>
        </div>
    );
}
