import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsFromApi } from '../redux/reducer';

function Greetings() {
  const greeting = useSelector((state) => state.greeting.name);
  const dispatch = useDispatch(fetchGreetingsFromApi());
  useEffect(() => {
    dispatch(fetchGreetingsFromApi());
  }, [dispatch]);
  return (
    <div>
      <h1>Greetings</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greetings;
