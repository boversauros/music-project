import React, { useState } from 'react'


function Search(props) {
    const [query, setQuery] = useState('');

    function handleSubmit(e) {
        const { onSearch } = props

        e.preventDefault()

        onSearch(query)
    }

    return (<div className="box">
        <form onSubmit={handleSubmit} >
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input className="input has-text-centered" type="search" placeholder="search an artist" name="query" onChange={e => setQuery(e.target.value)} />
                </div>
                <div className="control">
                    <input className="button is-dark" type="submit" value="search" />
                </div>
            </div>
        </form>
    </div>)
}

export default Search