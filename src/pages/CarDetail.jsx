import React from 'react'
import { useParams } from 'react-router-dom'

export default function CarDetail() {

    let { id } = useParams()

    return (
        <div>Ürün : {id}</div>
    )
}
