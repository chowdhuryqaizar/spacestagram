import React from "react";
import {Box, Image, IconButton} from "@chakra-ui/react";
import {InfoIcon, LinkIcon, StarIcon} from "@chakra-ui/icons";

interface ImageBoxProps{
    url: string;
    title: string;
    explanation: string;
    date: string;
}

function ImageBox({url, title, explanation, date}:ImageBoxProps) {
    return (
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={url} alt={title} />

            <Box p="10">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                >
                    {title}
                </Box>

                <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        {explanation}
                    </Box>
                    {/*<Box p="5" >*/}
                    {/*    <IconButton aria-label="Search database" icon={<StarIcon />} />*/}
                    {/*    <IconButton aria-label="Search database" icon={<LinkIcon />} />*/}
                    {/*    <IconButton aria-label="Search database" icon={<InfoIcon />} />*/}
                    {/*</Box>*/}
                </Box>
            </Box>

        </Box>
    )
}

export default ImageBox;