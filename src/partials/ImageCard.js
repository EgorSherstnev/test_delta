import React from "react";

const ImageCard = (data) => {
    console.log(data)
    return(
        <div>
             <div >
                <img 
                    alt={data.id}
                    src={data.image.image}
                />
            </div>
        </div>
    )
}

export default ImageCard;