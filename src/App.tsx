import React, {useEffect, useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import ModalGrid from "./components/ModalGrid";
import {Spinner, Center} from "@chakra-ui/react";


function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const startDate = "2021-08-20";
    const endDate = new Date().toISOString().slice(0, 10);

    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DLysHce6fEfIzM4lW1v7cKrhDVKfUDQil6MB7gkl&start_date=" + startDate + "&end_date=" + endDate)
            .then(res =>{
                console.log(res)
                res.data.reverse()
                setImages(res.data)
                setLoading(false);
            })
            .catch(err=>{
                console.log(err)
            })
    })

    return (
        <div>
            <Header/>
            {loading && <Center><Spinner size="xl"/></Center>}
            {!loading && <ModalGrid images={images}/>}
            <Footer/>
        </div>
    );
}

export default App;
