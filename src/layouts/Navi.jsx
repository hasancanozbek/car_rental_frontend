import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate("/")
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted >
                <Container>
                    <Menu.Item as={NavLink} to="/"
                        name='Anasayfa' />
                    <Menu.Item as={NavLink} to="/contact"
                        name='İletişim' />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
