import React from "react";
import { Link } from "react-router-dom";

const ImageCard = (data) => {
    console.log(data)
    return(
        <Link to={`/image/${data.image.id}`}  className="link">
            <div className="image-card">

                    <img className="image-card__image"
                        alt={data.id}
                        src={data.image.image}
                    />

                <span>id: {data.image.id}</span>
            </div>
        </Link>
        
    )
}

export default ImageCard;