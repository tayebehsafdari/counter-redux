import React from 'react';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {incremented, decremented} from './counterSlice';

function Counter(props) {
    console.log("props: ", props);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={() => props.reset()}>Reset</span>
            <span className="input-group-text" onClick={() => dispatch(decremented())}>-</span>
            <input type="text" className="form-control" value={count} onChange={(e) => props.onChange(e)}/>
            <span className="input-group-text" onClick={() => dispatch(incremented())}>+</span>
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