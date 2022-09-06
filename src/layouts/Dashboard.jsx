import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CarList from '../pages/CarList'
import Categories from './Categories'
import Footer from './Footer'

export default function Dashboard() {
    return (
        <div>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Categories />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <CarList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer />
            </Container>
        </div>
    )
}
