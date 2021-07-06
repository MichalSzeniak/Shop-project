import React from 'react'
import Slider from './homepage/Slider'
import SpecialOffer from './homepage/SpecialOffer'

const Homepage = ({specialOffer}) => {
    console.log(specialOffer)
    return (
        <div>
            <Slider />
            <SpecialOffer specialOffer={specialOffer} />
        </div>
    )
}

export default Homepage
