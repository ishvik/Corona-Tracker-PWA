import React from 'react'
import './BasicDetail.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const StyledCard = styled(Card)({
    width: '80%',
    height: '60%',
    backgroundColor: '#1E1E24',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px',
    textAlign: "left",
    '@media screen and (min-width:320px) and (max-width:499px)': {
        width: '90%',
        height: '90%',
    },
    '@media screen and (min-width:500px) and (max-width:720px)': {
        width: '90%',
        height: '50%',
    },
    '@media screen and (min-width:500px) and (max-width:582px)': {
        height:"90%"
    }
})

const Item = styled(Paper)({
    backgroundColor: '#070709',
    color: '#8D9293',
    padding: '1%',

    '@media screen and (min-width:320px) and (max-width:499px)': {
        textAlign: "left",
        alignItems: "left",
        backgroundColor: '#1E1E24',
    }
})

const StyledStack = styled(Stack)({
    justifyContent: 'center',
    alignItem: 'center',
    '@media screen and (min-width:320px) and (max-width:499px)': {
        display: "flex",
        flexDirection: "column",
        width: "98%",
        height: "25vh"
    },

    '@media screen and (min-width:500px) and (max-width:582px)': {
        display: "flex",
        flexDirection: "column",
        width: "98%",
        height: "25vh"
    }
})

const StyledStack2 = styled(Stack)({
    justifyContent: 'center',
    alignItem: 'center',
    marginTop: '2%'
})

const StyledTypography = styled(Typography)({
    color: 'white',
    '@media screen and (max-width: 1440px)': {
        fontSize: '25px'
    },

    '@media screen and (max-width: 865px)': {
        fontSize: '23px'
    },

    '@media screen and (min-width:584px) and (max-width:630px)': {
        fontSize: '20px'
    }

})

function BasicDetail(props) {

    const ItemComponent = ({ type, num }) => {
        return (<Item>
            <StyledTypography variant='h4'>{type} : {num}</StyledTypography>
        </Item>)
    }

    return (
        <div className='main-card'>
            <StyledCard>
                <CardContent>
                    <StyledStack direction="row" spacing={2}>
                        <ItemComponent type="Active" num={props.activeCases} />
                        <ItemComponent type="Deaths" num={props.numOfDeaths} />
                        <ItemComponent type="Recovered" num={props.numOfRecovered} />
                    </StyledStack>
                    <StyledStack2 direction="row" spacing={5}>
                        <ItemComponent type="Total Vaccinations" num={props.totalVaccinated} />
                    </StyledStack2>
                </CardContent>
            </StyledCard>
        </div>
    )
}

export default BasicDetail