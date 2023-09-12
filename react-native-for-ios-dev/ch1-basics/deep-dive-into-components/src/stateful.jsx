const App = React.createClass({
  getInitialState: function () {
    return {
      message: "this is a detailed message from state",
    };
  },
  updateState: function (e) {
    this.setState({ message: e.target.value });
  },
  render: function () {
    return (
      <div>
        <input type="text" onChange={this.updateState} />
        <h1>{this.state.message}</h1>
      </div>
    );
  },
});

React.render(<App />, document.getElementById("container"));
