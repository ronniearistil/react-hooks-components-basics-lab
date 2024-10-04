import React from "react";

// NavBar component
function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// Home component
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// About component (this is the one you need to add)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App component
function App() {
  return (
    <div>
      <NavBar />
      <Home />   {/* Add the Home component here */}
      <About />  {/* Add the About component here */}
    </div>
  );
}

export default App;

