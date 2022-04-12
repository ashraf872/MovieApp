import React from 'react'
import StarRating from './StarRating'

const Search = ({search, handelSearch, serachRating, handelRating}) => {
    return (
        <div className='header-container'>
            <h1>Our movie app</h1>
            <div className='search-container'>
                <input className='inp' type='text' value={search} onChange={handelSearch}/>
                <StarRating rating={serachRating} handelRating={handelRating}  />
            </div>
        </div>
    )
}

export default Search
