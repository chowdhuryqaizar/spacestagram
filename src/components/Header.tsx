import React from "react";
import ModeButton from "./ModeButton";
import {Grid, Box, Text, Heading, Center} from "@chakra-ui/react";

function Header() {
    return (
        <div>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} margin={10}>
                <Box p="10" maxW="lg">
                    <Center>
                        <Heading>SPACE</Heading>
                        <Heading as="i">STAGRAM</Heading>
                    </Center>
                    <Center>
                        <Text>Image-sharing from the final frontier</Text>
                    </Center>
                </Box>
                <Box p="10" maxW="lg">
                    <Center><ModeButton/></Center>
                </Box>
                <Box p="10" maxW="lg">
                    <Text>Instagram but with NASA's Astronomy Picture of the Day</Text>
                </Box>
            </Grid>
        </div>
    );
}

export default Header;
