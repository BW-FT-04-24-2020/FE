import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// imports of all the components
import Header from '../Header/Header';
import TopStrains from './TopStrains';
import SavedStrains from './SavedStrains';
import SleepyStrains from './SleepyStrains';

import { getStrainsDataFromActions } from '../../store/actions/index';
import serverData from '../../utils/serverData';

// Renders the link to '/home'
const HomePage = (props) => {
    useEffect(() => {
        props.getStrainsDataFromActions();
    }, []);

    console.log('TopStrains props', props);
    console.log(props.serverData);

    return (
        <div>
            {/* Header */}
            <Header />
            {/* What will be the app tiles that carousel */}

            <TopStrains props={serverData} />
            <SavedStrains />
            <SleepyStrains />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(
        'mapStateToProps state: ',
        state.FetchingStrainsReducer.strains
    );
    return { serverData: state.FetchingStrainsReducer.strains };
};
export default connect(mapStateToProps, { getStrainsDataFromActions })(
    HomePage
);
