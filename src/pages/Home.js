// import React, { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';
// import { CounterContext } from '../context/CounterContext';

const Home = () => {
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
        </div>
    )
}

export default Home