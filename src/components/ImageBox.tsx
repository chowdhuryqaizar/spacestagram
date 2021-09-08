import React from "react";
import {Box, Image, Center} from "@chakra-ui/react";
import ImageModal from "./ImageModal";

interface ImageBoxProps{
    url: string;
    title: string;
    explanation: string;
    date: string;
}

function ImageBox({url, title, explanation, date}:ImageBoxProps) {
    return (
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Center><Image maxH="300px" src={url} alt={title} marginTop="5%"/></Center>
            <Box p="10">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                >
                    {title}
                </Box>
                <Box
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                    color="gray.600"
                    fontSize="sm"
                >
                    {date}
                </Box>
                <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        {explanation.substr(0,250).concat('...')}
                    </Box>
                    <Box>
                        <ImageModal url={url} title={title} explanation={explanation} date={date}/>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default ImageBox;