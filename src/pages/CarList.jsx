import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Card, Icon, Button, Header, Divider } from 'semantic-ui-react'
import CarService from '../services/carService'

export default function CarList() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        let carService = new CarService()
        carService.getCars().then(result => setCars(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group itemsPerRow={3}>
                {
                    cars.map(car => (
                        <Card as={NavLink} to={`/cars/${car.id}`} key={car.id} color='blue'>
                            <Image src='https://img.freepik.com/premium-vector/online-ordering-taxi-car-rent-sharing-using-service-mobile-application_333239-96.jpg?w=2000' />
                            <Card.Content>
                                <Card.Header>{car.brandName + " " + car.model}</Card.Header>
                                <Divider></Divider>
                                <Card.Description>
                                    <Header sub>Fiyat</Header>
                                    <span>{car.price} TL</span>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <Button as={NavLink} to="/payment" animated='vertical' positive size='large' attached>
                                    <Button.Content hidden>Kirala</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='shop' />
                                    </Button.Content>
                                </Button>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        </div>
    )
}
