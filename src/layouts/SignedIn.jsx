import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu inverted>
                <Menu.Item>
                    <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/79990080?v=4" />
                    <Dropdown pointing="top right" text='Hasan Can'>
                        <Dropdown.Menu>
                            <Dropdown.Item text="Bilgilerim" icon="info" />
                            <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </div>
    )
}
