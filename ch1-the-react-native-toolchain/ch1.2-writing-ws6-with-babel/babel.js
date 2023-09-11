WelcomeHeader = (username) => do {
  if (username !== undefined) {
    `Welcome, ${username}.`;
  } else {
    ("Hello there, stranger!");
  }
};
