import  React , {useState} from 'react'
import Tags from './Tags';

export default function ImageCard({image},{searchByTag}) {
 return (
    <>
       <div className="cards">
      <img src={image.largeImageURL} alt="" />
      <div className='textHolder'>
        <h2 className='cardTitle'>Photo By {image.user}</h2>
        <ul>
          <li>
            <strong>Views :{image.views}</strong>
          </li>
          <li>
            <strong>Downloads : {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes : {image.likes}</strong>
          </li>
        </ul>
      </div>
      <Tags image={image} searchByTag={searchByTag}/>
    </div>
    </>
  )
}
