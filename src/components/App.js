import React, {useState} from "react";

import "../css/style.css"
import Header from "../partials/header";
import { getImages } from "../http/imagesAPI";
import ImageList from "../partials/ImageList";


const App = () => {

    const [images, setImages] = useState([]);

    const getImagesList = async(e) => {
            //e.preventDefault();
            try {
                let data = await getImages()
                console.log(data)
                setImages(data)
    
            } catch (e) {
                alert(e.response.data.message)
            }
        }
    

    return(
        <div className="wrapper ">
            <div className="container">
                <Header getImagesList={getImagesList}/>
                <ImageList images={images} />
            </div>
        </div>
    );
};

export default App;