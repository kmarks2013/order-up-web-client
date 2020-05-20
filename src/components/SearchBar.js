import React, {useState} from 'react'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTerm =(event) => {
        // console.log(searchTerm)
        setSearchTerm(event.target.value)
    }

    return (
        <div className="search-bar">
        {console.log("term ",searchTerm)}
            <input
                className='search-input'
                value={searchTerm}
                name='searchTerm'
                onChange={handleSearchTerm}
            />
        </div>
    )
}
