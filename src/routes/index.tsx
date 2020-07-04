import { observer } from "mobx-react";
import * as React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import NotFound from "../containers/not-found";
import { isLoggedIn } from "../utils/auth.util";
import MainMenu from "../components/main-menu";
import { endpoints, loginEndpoints } from "./endpoint";



// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {
    return (
      <>
        {loginEndpoints.map((route, key) => (
          <Route key={key} {...route} />
        ))}
        {isLoggedIn() ?
          <>
            <MainMenu />
            <Divider hidden={true} />
            <Switch>
              {endpoints.map((route, key) => (
                <Route key={key} {...route} />
              ))}
              <Route path='*' exact={true} render={props => <NotFound {...props} />} />
            </Switch>
          </> : <Redirect to={{ pathname: 'login' }} />
        }
      </>
    )
  }
}