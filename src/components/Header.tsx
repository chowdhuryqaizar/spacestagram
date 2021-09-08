import React from "react";
import ModeButton from "./ModeButton";
import {Grid, Box, Image, Text, Heading} from "@chakra-ui/react";

function Header() {
    return (
        <div>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box p="10" >
                    <Image src="https://i.ibb.co/4mYvYYB/spacestagram-logo.png" alt="Spacestagram" />
                </Box>
                <Box p="10">
                        <Heading>Image-sharing from the final frontier</Heading>
                        <Text>Instagram but with NASA's Astronomy Picture of the Day</Text>
                        <ModeButton/>
                </Box>
            </Grid>
        </div>
    );
}

export default Header;
