import { useState } from "react";

// or we can write it as const User=({name})=>{

// and in h1 we take it as {name}

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count2:{count2}</h1>
      <h1>Count:{count}</h1>
      <h1>Name:{props.name}</h1>
      <h3>Contact:918532092121</h3>
      <h3>Location:Saharanpur</h3>
    </div>
  );
};

export default User;
