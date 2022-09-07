import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
import CarDetail from '../pages/CarDetail'
import CarList from '../pages/CarList'
import Contact from '../pages/Contact'
import Payment from '../pages/Payment'
import Categories from './Categories'
import Footer from './Footer'

export default function Dashboard() {
    return (
        <div className='main'>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Categories />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Routes >
                                <Route path="/" element={<CarList />} />
                                <Route path="/cars" element={<CarList />} />
                                <Route path="/cars/:id" element={<CarDetail />} />
                                <Route path="/payment" element={<Payment />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer />
            </Container>
        </div>
    )
}
