import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Profile />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
