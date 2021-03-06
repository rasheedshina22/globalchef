import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Navbar from "./includes/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Classes from "./components/Classes/Classes";
import Resources from "./components/Resources/Resources";
import Learning from "./components/Learning/Learning";
import { ThemeProvider } from "@chakra-ui/core";
import Enrolled from "./components/Enrolled";
import SavedClasses from "./components/SavedClasses/SavedClasses";
import Profile from "./components/Profile/Profile";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/classes" component={Classes} />
            <Route path="/resources" component={Resources} />
            <Route path="/learning" component={Learning} />
            <Route path="/saved" component={SavedClasses} />
            <Route path="/enrolled" component={Enrolled} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
