import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



interface Props{
  data:Object
}

const Gallery = ({data}:Props)=>{
  const [images,setImages] = useState<any[]>([])
  useEffect(()=>{
    let imgData:{original:String,thumbnail:String}[] = []
    if(typeof data['total'] != 'undefined'){
      for(let i = 1;i<=data['total'];i++){
        imgData.push({
          original:data['baseUrl']+data['name']+'/'+i+'.'+data['format'],
          thumbnail:data['baseUrl']+data['name']+'/'+i+'.'+data['format'],
        })
      }
      setImages(imgData)
    }
   
  },[data])

    return (
        <section className="ftco-section" id="gallery" >
        <div className="container">
            <div className="row justify-content-center pb-5" >
            <ImageGallery  additionalClass="w-100 "   items={images} />
            </div>
            </div>
        
        </section>
    )
}

export default Gallery