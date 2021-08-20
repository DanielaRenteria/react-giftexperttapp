//import { data } from 'autoprefixer';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {loading && <p className="animate__animated animate__flash">loading</p>}
            <div className="card-grid animate__animated animate__fadeInTopLeft">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
