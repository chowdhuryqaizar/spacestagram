import React from "react";
import {Box, Image, Center, Spinner, IconButton, useToast} from "@chakra-ui/react";
import ImageModal from "./ImageModal";
import {LinkIcon} from "@chakra-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";

interface ImageBoxProps{
    url: string;
    title: string;
    explanation: string;
    date: string;
}

function ImageBox({url, title, explanation, date}:ImageBoxProps) {
    const toast = useToast();
    function onCopy(){
        toast.closeAll();
        toast({
                title: "Copied " + title,
                description: "Image link copied to clipboard",
                status: "info",
                duration: 5000,
                isClosable: true,
        })
        navigator.clipboard.writeText(url);
    }

    function onLike(){
        console.log("liked");
    }

    return (
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Center><Image maxH="300px" src={url} alt={title} padding="3%" fallback={<Spinner margin="10%" size="lg"/>}/></Center>
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
                    color="gray.500"
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
                        <IconButton aria-label="copy" onClick={onCopy} icon={<LinkIcon/>} size="sm"/>
                        <IconButton aria-label="copy" onClick={onLike} icon={<FavoriteIcon/>} size="sm"/>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default ImageBox;