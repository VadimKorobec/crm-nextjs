import Header from "@/components/header";
import SearchInput from "@/components/search-input";
import Toolbar from "@/components/toolbar";
import React from "react";

export interface PageProps{ }

export default function Page({ }: PageProps) {
    return <>
        <Header>Companies</Header>
        <Toolbar>
            <SearchInput/>
        </Toolbar>
    </>
}