import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    console.log("props: ", props);
    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={() => props.reset()}>Reset</span>
            <span className="input-group-text" onClick={() => props.decrement()}>-</span>
            <input type="text" className="form-control" value={props.count} onChange={(e) => props.onChange(e)}/>
            <span className="input-group-text" onClick={() => props.increment()}>+</span>
        </div>
    );
}

const mapStateToProps = state => {
    console.log("mapStateToProps: ", state);
    return {count: state.count};
};

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps: ", dispatch);
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'}),
        reset: () => dispatch({type: 'reset', payload: 0}),
        onChange: (e) => dispatch({type: 'onChange', payload: e.target.value})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);