import React, {useEffect, useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ImageBox from "./components/ImageBox";
import ModalGrid from "./components/ModalGrid";


const url =
    "https://api.nasa.gov/planetary/apod?api_key=DLysHce6fEfIzM4lW1v7cKrhDVKfUDQil6MB7gkl&count=10";

const getTracks = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};


function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGetTracks = () => {
        setLoading(true);
        getTracks().then((images) => {
            setImages(images);
            setLoading(false);
        });
    };

    useEffect(() => {
        handleGetTracks();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Header/>
            {/*{!loading && <ImageBox url={images[0]['url']} date={images[0]['date']} title={images[0]['title']} explanation={images[0]['explanation']}/>}*/}
            {!loading && <ModalGrid images={images}/>}
            <Footer/>
        </div>
    );
}

export default App;
