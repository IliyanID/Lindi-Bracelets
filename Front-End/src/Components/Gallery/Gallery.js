import React from 'react'

let Gallery = (props) =>{

    let entireGallery = props.gallery.map((item,index)=>{
        if(item.link.includes(".mp4")){
          return(
            <li key={index}>
              <video  autoPlay muted loop>
                <source src={item.link} type="video/mp4" />
              </video>
            </li>
          );
        }
        return(
        <li key={index}>
          <img src={item.link} alt="stand"/>
        </li>);
      })

    return(
            <div ref={props.GalleryRef} className="gallery">
                <h1>Gallery</h1>
                <ul>
                    {entireGallery}
                </ul>
            </div>
    );
}

export default Gallery;