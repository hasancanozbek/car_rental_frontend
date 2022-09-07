import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(params) {
    return (
        <div>
            <Menu inverted>
                <Menu.Item>
                    <Button primary>Kayıt Ol</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={params.signIn} color='green'>Giriş Yap</Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}
