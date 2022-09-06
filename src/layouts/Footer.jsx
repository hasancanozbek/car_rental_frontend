import React from 'react'
import { Statistic } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <Statistic.Group size='tiny' >
                <Statistic>
                    <Statistic.Value>200</Statistic.Value>
                    <Statistic.Label>Adet Kullanıcı</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>35</Statistic.Value>
                    <Statistic.Label>Adet Kiralık Araç</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>5</Statistic.Value>
                    <Statistic.Label>Adet Ticari Ortaklık</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </div>
    )
}
