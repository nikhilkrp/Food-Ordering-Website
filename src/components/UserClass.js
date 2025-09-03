// Why do we create the state in the constructor() inside class components?
// 1. The constructor is the right place to initialize things before the component mounts
// React's class components follow the JavaScript class lifecycle.
// The constructor() runs once, right when the component is being created.

// That’s your only chance to:

// initialize default values (like count: 0, name: "Nikhil"),

// set up the initial state,

// bind methods if needed.

// If you try to use this.state = {} outside the constructor,
// React will either ignore it, throw an error, or not be able to set it before render.

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count2: 1,
      // count3: 2,
      userInfo: {
        name: "dummy",
        login: "sai",
        avatar_url: " ",
      },
    };

    console.log(this.props.name + " constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Component Did Mount");
    // API call
    const data = await fetch("https://api.github.com/users/nikhilkrp");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log(this.props.name + " component Did Update");
  }
  componentWillUnmount() {
    console.log(this.props.name + " component will unmount");
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    console.log(this.props.name + " render");
    return (
      <div className="user-card">
        {/* <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count increase
        </button> */}
        <img src={avatar_url} alt="" />
        <h1>Name:{name}</h1>
        <h3>Contact:91xxxxx99</h3>
        <h3>Login:{login}</h3>
      </div>
    );
  }
}

export default UserClass;

/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE ----- 
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram

 */




// Mounting Phase
// ├── Parent Constructor
// ├── Parent Render
// │   ├── First Constructor
// │   └── First Render
// │       └── First Component Did Mount (→ triggers setState)
// ├── Parent Component Did Mount

// Updating Phase (due to setState)
// ├── First Render
// └── First Component Did Update

// Unmounting Phase (due to navigation or condition)
// ├── Parent Component Will Unmount
// └── First Component Will Unmount


// Mounting order: Parent → Child

// Unmounting order: Child → Parent

// setState in componentDidMount() causes a re-render + componentDidUpdate().