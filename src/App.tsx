import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";

function App() {
    return (
        <div>
            <Header/>
            <ImageCard/>
            <Footer/>
        </div>
    );
}

export default App;
