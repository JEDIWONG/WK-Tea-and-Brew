import "../style/ImageGallery.css"

function ImageGallery(props){
    return(
        <>
            <div className="image-gallery row">

                <img src={props.imgUrl[0]}></img>

                <div className="column">
                    <img src={props.imgUrl[1]}></img>
                    <img src={props.imgUrl[2]}></img>
                </div>
            </div>
        </>
    )
}

export default ImageGallery;