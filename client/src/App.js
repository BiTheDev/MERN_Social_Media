import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import { postDetail } from "./components/Posts/Post/PostDetail/postDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
            <Route path="/" exact component={()=><Redirect to="/posts" />}/>
            <Route path="/posts" exact component={Home}  />
            <Route path="/posts/search" exact component={Home}  />
            <Route path="/posts/:id" component={postDetail}  />
            <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
