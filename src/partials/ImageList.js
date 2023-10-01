import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    console.log(props)
    const images =  props.images.map( (image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list__container container">{images}</div>
};

export default ImageList;