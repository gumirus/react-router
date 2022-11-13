import { Switch, Link, Route } from "react-router-dom";
import Edit from "./edit";
import Stats from "./stats";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dschboard/edit">Edit</Link>
        </li>
        <li>
          <Link to="/dschboard">Dachboard</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/dschboard" component={Stats} />
        <Route path="/dschboard/edit" component={Edit} />
      </Switch>
    </div>
  );
};

export default Dashboard;
