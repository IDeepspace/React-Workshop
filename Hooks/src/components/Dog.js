import React from 'react';

const Dog = target => {
  console.log(target);
  return <h1>Hello, {target.target}</h1>;
};

export default Dog;
