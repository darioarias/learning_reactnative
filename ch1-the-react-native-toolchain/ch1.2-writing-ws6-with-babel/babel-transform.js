AsyncStorage.getItem("loginParameters").then((login) => {
  this.setState({
    login,
  });
});
