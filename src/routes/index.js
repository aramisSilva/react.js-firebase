import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
export default () =>{

    return (
        <Router>
        <Switch>
            <Route  path="/dashboard" component={Dashboard} isPrivate />
            <Route  path="/register" component={SignUp}/>
            <Route  path="/" component={SignIn}/>
        </Switch>
        </Router>
    )

}
