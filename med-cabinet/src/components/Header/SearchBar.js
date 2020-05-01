import React from 'react';

import { authenticAxios } from '../../utils/authenticAxios';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

//  Styled-Components
const Search = styled('form')`
    input {
        width: 30vw;

        margin-top: 3%;
    }
`;
const SearchContainer = styled('div')`
    width: 50vw;
    padding: 3%;
    button {
        margin: 2%;
    }
`;

class SearchBar extends React.Component {
    // Empty initial state for the search bar
    state = {
        search: {
            searchBar: '',
        },
    };

    // Function to handle the search bar
    handleChanges = (e) => {
        // e.preventDefault();
        this.setState({
            search: {
                ...this.state.search,
                [e.target.name]: e.target.value,
            },
        });
    };

    //Add a Submit search bar (onSubmit)
    submitSearch = (e) => {
        e.preventDefault();
        authenticAxios()
            .get(
                `https://medcabinet-strain-api.herokuapp.com/strains/query/${this.state.search}`
            ) //UPDATE ME WITH NEW POST LINK//////////
            .then((res) => {
                console.log(res);
                this.setState({
                    search: JSON.parse(res.data),
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            // Search bar form with button
            <>
                <SearchContainer>
                    <Search onSubmit={this.submitSearch}>
                        <input
                            type="text"
                            name="searchBar"
                            value={this.state.search.searchBar}
                            onChange={this.handleChanges}
                            placeholder="Search Strains, Effects, or Ailments"
                        />
                        <button>Search</button>
                    </Search>
                    {/* <AdvancedSearch /> */}
                </SearchContainer>
            </>
        );
    }
}

export default SearchBar;
