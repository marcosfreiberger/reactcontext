// import React, { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';
// import { CounterContext } from '../context/CounterContext';

const Home = () => {
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    const { color } = useTitleColorContext();

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
        </div>
    )
}

export default Home