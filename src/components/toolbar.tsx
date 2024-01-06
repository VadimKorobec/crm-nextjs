import React from "react";

export interface ToolbarProps{
    children: React.ReactNode;
}

export default function Toolbar({children}:ToolbarProps) {
    return <div>{ children}</div>
}