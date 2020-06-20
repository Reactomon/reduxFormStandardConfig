import React from 'react';
import Home from './component/home/home';

const HomeContainer = () =>  {
  const fetchValues = values => {
    alert(JSON.stringify(values));
  }

  return (
      <Home onSubmit={fetchValues}/>
  );
}

export default HomeContainer;
