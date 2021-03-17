import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJokesData } from '../store';


const Jokes = (props) => {
    const { fetchJokesData } = props;

    // useEffect(() => {
    //     fetchJokesData();
    // }, []);

    const handleButton = () => {
        props.fetchJokesData();
    }

    return(
        <div className="jokes">
            {props.isLoading ? <h2>Loading the Data </h2> : null}

            <h3>Here is some fun started with some jokes.</h3>

            <button onClick={handleButton}>Get a random Jokes</button>

            <div className="joke">{props.value}</div>

            <div className="error">
                {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            </div>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return{
        isLoading: state.isLoading,
        //type: state.type,
        value: state.value,
        error: state.error
    };
};
export default connect(mapStateToProps, {fetchJokesData})(Jokes)