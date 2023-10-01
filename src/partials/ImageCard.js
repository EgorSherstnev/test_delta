import React from "react";
import { Link } from "react-router-dom";

const ImageCard = (data) => {
    console.log(data)
    return(
        <Link to={`/image/${data.image.id}`}  className="link">
            <div>
                <div >
                    <img 
                        alt={data.id}
                        src={data.image.image}
                    />
                </div>
                <span>{data.image.id}</span>
            </div>
        </Link>
        
    )
}

export default ImageCard;