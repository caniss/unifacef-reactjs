import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Card, Container, Grid, Header, Icon } from 'semantic-ui-react';
import HomeStore from './store';


interface Props {
    home: HomeStore
}

@inject('home')
@observer
export default class Home extends React.Component<Props> {
    async componentDidMount() {
        const { buildReords } = this.props.home
        await buildReords();
    }


    render() {
        const { records } = this.props.home;

        return (
            <Container>
                <Grid divided = 'vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header color='blue' as='h2'>
                                <Header.Content>
                                    Home
                                    <Header.Subheader>
                                        Cotação do dia
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Card.Group itemsPerRow={2}>
                    {records.map((e, index) => {
                        return (
                            <Card key = {index}>
                                <Card.Content>
                                <Card.Meta><Icon name='dollar' />{e.name}</Card.Meta>
                                <Card.Description>R$ {e.ask}</Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            </Container>
        )
    }
}