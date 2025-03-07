import React, { useContext } from 'react'
import DataContext from './Context/dataContext'


const SearchBar = () => {
    const { search, setSearch,input } = useContext(DataContext)
    return (
        <div className='SearchBar'>
            <input
                type="search"
                required
                placeholder='Enter City Name...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={input}/>
        </div>

    )
}

export default SearchBar