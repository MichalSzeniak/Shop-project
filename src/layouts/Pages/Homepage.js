import React from 'react'
import Slider from './homepage/Slider'
import SpecialOffer from './homepage/SpecialOffer'
import AboutUs from './homepage/AboutUs' 
import Counters from './homepage/Counters'

const Homepage = ({specialOffer}) => {
    return (
        <div>
            <Slider />
            <SpecialOffer specialOffer={specialOffer} />
            <AboutUs/>
            <Counters />
        </div>
    )
}

export default Homepage