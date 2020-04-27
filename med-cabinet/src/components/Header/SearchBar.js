import React from 'react'

const SearchBar = () => {
    // Empty initial state for the search bar
    state = {
        searchString: ''
    }

    // Function to handle the search bar
    handleChanges = (e)=>{
        this.setState({
            searchString:{ [e.target.name]: e.target.value}
        })
    }

    //Add a Submit search bar


        return (
            // Search bar form with button
            <div>
                <form onSubmit={}>
                    <input
                        type='text'
                        name='searchBar'
                        value={'testValue'}  // UPDATE ME///////////////
                        onChange={handleChanges}
                    />
                </form>
            </div>
        )
    
}

export default SearchBar