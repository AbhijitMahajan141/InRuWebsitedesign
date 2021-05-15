import React from 'react'
import {ServicesContainer,ServicesH1,ServicesH2,ServicesWrapper,ServicesCard,ServicesP,ServicesIcon} from './ServiceElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-3.svg'

function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expences</ServicesH2>
                    <ServicesP>
                        We Help reduce your fees and increase your overall revenue.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        Access platform online any where in the world.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>
                        Unlock our special membership card that returns 5% cash Back.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
