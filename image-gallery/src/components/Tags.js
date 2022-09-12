import React , {useState} from 'react'

export default function Tags({image} , {searchBytag}) {
    const [tagContent, setTagContent] = useState('');
    const tags = image.tags.split(", ");
    
  return (
    <div className='tagHolder'>
    {tags.map((tag,index) => <span  className='tag' key={index} onClick={()=> searchBytag(tag) } >{tag}</span> )}
  </div>
  )
}
