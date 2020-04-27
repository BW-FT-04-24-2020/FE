import React, { useState } from 'react';
import { authenticAxios } from '../../utils/authenticAxios';

import styled from 'styled-components';

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

    const Search = styled('form')`
        border: 1px solid blue;
        width: 35vw;
        input {
            width: 30vw;
            margin-right: 3%;
        }
    `;

    return (
        // Search bar form with button
        <div>
            <Search>
                <input
                    type="text"
                    name="searchBar"
                    value={search.searchString}
                    onChange={handleChanges}
                    placeholder="Search Strains, Effects, or Ailments"
                />
                <button>Search</button>
            </Search>
        </div>
    );
};

export default SearchBar;
