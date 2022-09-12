import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import './style.css'



function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const key = '28552801-a3e6e9f67ad2dff3fb1d28365';
  

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div>
      <ImageSearch searchText={(text) => setTerm(text)}/>
      <div className="containerCards">
       { isLoading ? <h1>Its Loading....</h1>
        : <>
           {images.map(image => (
             <ImageCard key={image.id} searchByTag={(image) => setTerm(image) } image={image}  />
           ))}
        </>
       } 
      </div>
    </div>
  );
}

export default App;