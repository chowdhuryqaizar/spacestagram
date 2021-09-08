import React from "react";
import {Grid} from "@chakra-ui/react";
import ImageBox from "./ImageBox";

function ModalGrid({images}:any){
    return(
    <Grid templateColumns="repeat(3, 1fr)" gap={6} margin={10}>
        {images.map((image:any) => {
            return(
            <ImageBox url={image['url']} title={image['title']} explanation={image['explanation']} date={image['date']}/>
            )
        })}
    </Grid>
    );
}

export default ModalGrid;