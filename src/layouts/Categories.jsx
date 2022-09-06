import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Dropdown
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        placeholder='Marka' />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        placeholder='Yakıt tipi' />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        placeholder='Vites tipi' />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        placeholder='Renk' />
                </Menu.Item>

            </Menu>
        </div>
    )
}
