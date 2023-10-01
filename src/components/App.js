import React, {useEffect, useState} from "react";
import { 
    Routes,
    Route,
} from "react-router-dom";
import "../css/style.css"
import Header from "../partials/header";
import { getImages } from "../http/imagesAPI";
import ImageList from "../partials/ImageList";
import ImageDetailPage from "../pages/ImageDetailPage";


const App = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
          try {
            let data = await getImages();
            console.log(data);
            setImages(data);
          } catch (e) {
            alert(e.response.data.message);
          }
        };
    
        fetchImages();
      }, []);
    

    return(
        <Routes>
            <Route exact path="/" element={
                <div className="wrapper ">
                    <div className="container">
                        <Header />
                        <ImageList images={images} />
                    </div>
                </div>} 
            />
            <Route path="/image/:id" element={<ImageDetailPage />} />
        </Routes>
        
    );
};

export default App;