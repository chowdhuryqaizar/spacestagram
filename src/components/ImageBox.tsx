import React from "react";
import {Box, Image, IconButton, Center} from "@chakra-ui/react";
import {InfoIcon, LinkIcon, StarIcon} from "@chakra-ui/icons";
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
            <Center><Image src={url} alt={title} /></Center>
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
                </Box>
                {/*<Box p="5" >*/}
                {/*    <Center>*/}
                {/*        <ImageModal url={url} title={title} explanation={explanation} date={date}/>*/}
                {/*        <IconButton aria-label="Search database" icon={<StarIcon />} />*/}
                {/*        <IconButton aria-label="Search database" icon={<LinkIcon />} />*/}
                {/*    </Center>*/}
                {/*</Box>*/}
            </Box>

        </Box>
    )
}

export default ImageBox;