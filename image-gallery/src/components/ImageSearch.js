import React , {useState} from 'react'

export default function ImageSearch({searchText}) {
    console.log(searchText)
    const[text , setText] = useState('');
function onSubmit(e){
    e.preventDefault();
    searchText(text);
}
  return (
    <div className='searchContainer'>
        <form onSubmit={onSubmit} action="">
            <div className='elementContainer'>
                <input onChange={e => setText(e.target.value)} id='searchInput' type="text" placeholder='Search for an image' />
                <button id='searchButton'>Search ! </button>
            </div>
        </form>
    </div>
  )
}
