import React from 'react';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, onChange, selectCount} from './counterSlice';

function Counter(props) {
    console.log("props: ", props);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const initialCount = 0;

    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={() => dispatch(reset(initialCount))}>Reset</span>
            <span className="input-group-text" onClick={() => dispatch(decrement())}>-</span>
            <input type="text" className="form-control" value={count}
                   onChange={(e) => dispatch(onChange(e.target.value))}/>
            <span className="input-group-text" onClick={() => dispatch(increment())}>+</span>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps: ", state, ownProps);
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