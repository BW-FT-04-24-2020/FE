import React, { useState } from 'react';
import { authenticAxios } from '../../utils/authenticAxios';

const SearchBar = () => {
    // Empty initial state for the search bar
    const [search, setSearch] = useState({
        searchString: '',
    });

    // Function to handle the search bar
    const handleChanges = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    //Add a Submit search bar (onSubmit)
    const submitSearch = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('/', search) //UPDATE ME WITH NEW POST LINK//////////
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        // Search bar form with button
        <div>
            <form>
                <input
                    type="text"
                    name="searchBar"
                    value={search.searchString}
                    onChange={handleChanges}
                />
            </form>
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
