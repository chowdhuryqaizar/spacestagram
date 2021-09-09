import React, {useState} from "react";
import {Box, Image, Center, Spinner, IconButton, useToast, Grid} from "@chakra-ui/react";
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

    const [liked, setLiked] = useStickyState(false, title);

    function useStickyState(defaultValue:boolean, key:string){
        const [value, setValue] = React.useState(() => {
            const stickyValue = window.localStorage.getItem(key);
            return stickyValue !== null
                ? JSON.parse(stickyValue)
                : defaultValue;
        });
        React.useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);
        return [value, setValue];
    }

    const toast = useToast();
    function onCopy(){
        toast.closeAll();
        toast({
                title: "Image Link Copied to Clipboard!",
                description: "Copied " + title,
                status: "info",
                duration: 5000,
                isClosable: true,
        })
        navigator.clipboard.writeText(url);
    }

    function onLike(){
        if(liked){
            setLiked(false);
        }
        else{
            setLiked(true);
        }
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
                    <Box marginTop="10%">
                        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                            <Center><ImageModal url={url} title={title} explanation={explanation} date={date}/></Center>
                        <Center><IconButton aria-label="copy" onClick={onCopy} icon={<LinkIcon/>} size="sm" maxW="5px"/></Center>
                        <Center><IconButton aria-label="copy" onClick={onLike} icon={<FavoriteIcon/>} color={liked === true ? "pink" : ""} size="sm" maxW="5px"/></Center>
                        </Grid>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default ImageBox;