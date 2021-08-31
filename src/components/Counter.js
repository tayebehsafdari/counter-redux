import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {
    increment,
    decrement,
    reset,
    onChange,
    selectCount,
    incrementByAmount,
    incrementAsync
} from './counterSlice';

function Counter(props) {
    console.log("props: ", props);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const initialCount = 0;
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div className="input-group my-5">
            <span
                className="input-group-text"
                onClick={() => dispatch(reset(initialCount))}>Reset</span>
            <input
                type="text"
                className="form-control"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}/>
            <span
                className="input-group-text"
                onClick={() => dispatch(decrement())}>-</span>
            <input
                type="text"
                className="form-control" value={count}
                onChange={(e) => dispatch(onChange(e.target.value))}/>
            <span
                className="input-group-text"
                onClick={() => dispatch(increment())}>+</span>
            <span className="input-group-text"
                  onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</span>
            <span className="input-group-text"
                  onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</span>
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