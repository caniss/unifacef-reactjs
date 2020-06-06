import { observer } from 'mobx-react';
import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import NotFound from '../containers/not-found';
import { endpoints } from './endpoint';
import MainMenu from '../containers/main-menu';

//@ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {
    render(){
        return (
            <>
            <MainMenu />
                <Divider hidden = { true } />
                    <Switch>
                        {endpoints.map ((route, key)=> (
                            <Route key = {key} {...route} />
                        ))}
                        <Route path='*' exact={true} render = {props => <NotFound {...this.props} />} />
                    </Switch>
            </>
        )
    }
}