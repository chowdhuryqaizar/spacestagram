import React from "react";
import {useColorMode} from "@chakra-ui/react";
import {IconButton} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";


export default function ModeButton() {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <header>
            <IconButton aria-label="Search database" icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                        onClick={toggleColorMode}>
            </IconButton>
        </header>
    )
}