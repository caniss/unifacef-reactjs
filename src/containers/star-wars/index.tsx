import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Card, Container, Grid, GridColumn, Header, Image } from 'semantic-ui-react';
import NewRouterStore from '../../mobx/router.store';
import StarWarsStore from './store';

interface Props {
    router: NewRouterStore;
    starWars: StarWarsStore;
}

@inject('router', 'starWars')
@observer
export default class StarWars extends React.Component<Props>{
    async componentDidMount() {
        const {buildFilms} = this.props.starWars;
        await buildFilms();
    }

    render() {

        const openDetails = (id: number) => {
            this.props.router.setHistory(`/star-wars/${id}`);
        }
        const { films } = this.props.starWars;

        return (
            <Container>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <GridColumn>
                            <Header color='blue' as='h2'>
                                <Header.Content>
                                    Star Wars
                                    <Header.Subheader>
                                        Lista de filmes
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
                <Card.Group itemsPerRow={2}>
                    {films.map((film, index) => {
                        return (
                        <Card key={index} onClick={() => openDetails(film.id)}>
                            <Image src={film.photo} wrapped ui={false} size='small' />
                            <Card.Content>
                            <Card.Meta>{film.title}</Card.Meta>
                            <Card.Description>Episode {film.episode_id.toString()}</Card.Description>
                            </Card.Content>
                        </Card>)
                    })}
                    </Card.Group>
            </Container>
        )
    }
}