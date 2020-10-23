import React from 'react'
import Grid from '@material-ui/core/Grid';
import { FlagWrapper, GridContainer } from './styles'

const CreditCardFlags: React.FC = () => {

    const flags = [
        {
            imagePath: '/images/card_flags/master-card.svg',
            alt: 'Bandeira do cartão Master Card'
        },
        {
            imagePath: '/images/card_flags/visa.svg',
            alt: 'Bandeira do cartão Visa'
        },
        {
            imagePath: '/images/card_flags/elo.svg',
            alt: 'Bandeira do cartão Elo'
        },
        {
            imagePath: '/images/card_flags/diners-club.svg',
            alt: 'Bandeira do cartão Diners Club'
        }
    ]
      
  return (
    <GridContainer container justify="center" spacing={1}>
            {flags.map(({ imagePath, alt }, index) => (
                <Grid key={index} item >
                    <FlagWrapper >
                        <img src={imagePath} alt={alt}></img>
                    </FlagWrapper>
                </Grid>
            ))}
    </GridContainer>
  )
}

export default CreditCardFlags;