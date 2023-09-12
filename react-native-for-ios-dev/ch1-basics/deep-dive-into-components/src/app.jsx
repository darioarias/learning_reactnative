// const App = React.createClass({
//   render: function () {
//     let txt = this.props.myProp;
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{txt}</h1>
//       </div>
//     );
//   },
// });

const App = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    age: React.PropTypes.number,
  },
  render: function () {
    let message = this.props.message,
      age = this.props.age;
    return (
      <div>
        <h1> {message}</h1>
        <p>My age is {age}</p>
      </div>
    );
  },
  getDefaultProps: function () {
    return {
      message: "Please set 'message' property",
      age: 0,
    };
  },
});

// React.render(
//   <App message="Hello there!" age={12} />,
//   document.getElementById("container")
// );

React.render(<App />, document.getElementById("container"));
