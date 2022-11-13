import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Stats from "./components/stats";
function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dschboard/stats" component={Stats} />
        {/* <Route path="/posts/:postId">
          {(props) => <Post {...props} posts={posts} />}
        </Route>
        <Route path="/posts">
          {(props) => <PostsList {...props} posts={posts} />}
        </Route> */}
        <Route path="/dschboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
