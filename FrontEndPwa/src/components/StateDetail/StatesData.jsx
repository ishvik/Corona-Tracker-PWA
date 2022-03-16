import React from 'react'
import './StatesData.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { BsSortUpAlt } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { Typography } from '@mui/material';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const ColorButton = styled(Button)({
    backgroundColor: '#D8FA33',
    color: '#1E1E24',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#D8FA33',
        color: '#1E1E24',
    },
    '@media screen and (max-width: 1024px)': {
        width: '120px'
    },
    '@media screen and (max-width: 1249px)': {
        width: '150px'
    }
    ,
    '@media screen and (max-width: 1035px)': {
        width: '145px'
    },
    '@media screen and (max-width: 1003px)': {
        width: '135px'
    },
    '@media screen and (max-width: 939px)': {
        width: '130px'
    },
    '@media screen and (max-width: 902px)': {
        width: '125px'
    },
    '@media screen and (max-width: 887px)': {
        width: '125px',
        fontSize: '12px'
    },
    '@media screen and (max-width: 865px)': {
        width: '120px',
        fontSize: '12px'
    },
    '@media screen and (min-width:320px) and (max-width:373px)':{
        backgroundColor: 'black',
        color: '#0A8A51',
    }

});

const ColorButtonActive = styled(Button)({
    backgroundColor: '#0A8A51',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#0A8A51',
    color: 'white',
    },
    '@media screen and (max-width: 1024px)': {
        width: '120px'
    },
    '@media screen and (max-width: 1249px)': {
        width: '150px'
    }
    ,
    '@media screen and (max-width: 1035px)': {
        width: '145px'
    },
    '@media screen and (max-width: 1003px)': {
        width: '135px'
    },
    '@media screen and (max-width: 939px)': {
        width: '130px'
    },
    '@media screen and (max-width: 902px)': {
        width: '125px'
    },
    '@media screen and (max-width: 887px)': {
        width: '125px',
        fontSize: '12px'
    },
    '@media screen and (max-width: 865px)': {
        width: '120px',
        fontSize: '12px'
    },
    '@media screen and (max-width:320px) and (max-width:373px)':{
        backgroundColor: '#0A8A51',
        color: 'white',
    }

});

const StyledMainCard = styled(Card)({
    width: '20%',
    height: '93%',
    padding: '0',
    borderRadius: '25px',
    backgroundColor: 'transparent',
    '&:hover': {
        cursor: 'pointer',
    },
    '@media screen and (max-width: 1440px)': {
        width: '25%',
        height: '93%'
    },
    '@media screen and (min-width:320px) and (max-width:581px)':{
        width:"90%",
        height:'30%',
        
    }
})

const StyledMainCardContent = styled(CardContent)({
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d'
})

const StyledFrontCard = styled(Card)({
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    webkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    
})

const StyledBackCard = styled(Card)({
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    webkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    marginBottom: 'auto',
    marginTop: '-65%',
    '@media screen and (max-width: 1529px)': {
        marginTop: '-67%'
    }
    ,
    '@media screen and (max-width: 1440px)': {
        marginTop: '-55%'
    },
    '@media screen and (max-width: 1337px)': {
        marginTop: '-59%'
    },
    '@media screen and (max-width: 1273px)': {
        marginTop: '-63%'
    },
    '@media screen and (max-width: 1179px)': {
        marginTop: '-68%'
    },
    '@media screen and (max-width: 1127px)': {
        marginTop: '-71%'
    },
    '@media screen and (max-width: 1127px)': {
        marginTop: '-80%'
    },
    '@media screen and (max-width: 1120px)': {
        marginTop: '-75%'
    },
    '@media screen and (max-width: 1050px)': {
        marginTop: '-80%'
    },
    '@media screen and (max-width: 890px)': {
        marginTop: '-90%'
    },
    '@media screen and (max-width: 863px)': {
        marginTop: '-100%'
    },
    '@media screen and (max-width: 776px)': {
        marginTop: '-130%'
    },
    '@media screen and (min-width:500px) and (max-width:720px)':{
        marginTop:"-140%"
    },
    '@media screen and (min-width:320px) and (max-width:499px)':{
        marginTop:"-50%"
    },
    '@media screen and (min-width:500px) and (max-width:582px)': {
        marginTop:"-40%",
        
    }
})

const StyledTypography = styled(Typography)({
    color: '#15FFAB',
    fontFamily: 'cursive',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    '@media screen and (max-width: 1440px)': {
        fontSize: '35px'
    },
    '@media screen and (max-width: 1099px)': {
        fontSize: '32px'
    },
    '@media screen and (max-width: 1042px)': {
        fontSize: '30px'
    },
    '@media screen and (min-width:500px) and (max-width:720px)':{
        fontSize:'22px'
    },
    


});

const StyledBackTypography = styled(Typography)({
    color: '#06D7F6',
    // display: 'flex',
    textAlign: 'left',
    fontWeight: 'bold'
});

const StateCard = ({ statename, active, deaths, discharged }) => {
    return (<StyledMainCard className='card'>
        <StyledMainCardContent className='card-content'>
            <StyledFrontCard>
                <CardContent>
                    <StyledTypography variant='h4'>{statename}</StyledTypography>
                    <p className='swipe'>swipe >>></p>
                </CardContent>
            </StyledFrontCard>
            <StyledBackCard className='back-card'>
                <CardContent>
                    <StyledBackTypography variant='h6'>Active-Cases : {active}</StyledBackTypography>
                    <StyledBackTypography variant='h6'>Deaths : {deaths}</StyledBackTypography>
                    <StyledBackTypography variant='h6'>Discharged : {discharged}</StyledBackTypography>
                </CardContent>
            </StyledBackCard>

        </StyledMainCardContent>
    </StyledMainCard>)
}

function StatesData({ dataOfState }) {

    // let arr = dataOfState;
    const [statedatadummy, setStateDataDummy] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const [isSortByActive, setIsSortByActive] = useState(false);
    const [isSortByDeath, setIsSortByDeath] = useState(false);
    const [isSortByDischarged, setIsSortByDischarged] = useState(false);

    const statePerPage = 3;
    const pageVisited = pageNumber * statePerPage;
    let dataShown = statedatadummy.length == 0?dataOfState:statedatadummy;
    const dataPerPage = dataShown.slice(pageVisited, pageVisited + statePerPage);

    const pageCount = Math.ceil(dataShown.length / statePerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const sortDataByActive = () => {
        setIsSortByActive(!isSortByActive);
        setIsSortByDeath(false);
        setIsSortByDischarged(false);
        let unsortedData = [...dataOfState];
        let sortedData = [];
        if (!isSortByActive) {
            sortedData = unsortedData.sort(function (state1, state2) {
                return state1.Active - state2.Active;
            })
            setStateDataDummy(sortedData);
        } else {
            setStateDataDummy(dataOfState);
            
        }
    }

    const sortDataByDeaths = () => {
        setIsSortByDeath(!isSortByDeath);
        setIsSortByActive(false);
        setIsSortByDischarged(false);
        let unsortData = [...dataOfState];
        let sortedData = [];
        if (!isSortByDeath) {
            sortedData = unsortData.sort(function (state1, state2) {
                return state1.Deaths - state2.Deaths;
            })
            setStateDataDummy(sortedData);
        } else {
            setStateDataDummy(dataOfState);
        }
    }

    const sortDataByDischarged = () => {
        setIsSortByDischarged(!isSortByDischarged);
        setIsSortByActive(false);
        setIsSortByDeath(false);
        let unsortData = [...dataOfState];
        let sortedData = [];
        if (!isSortByDischarged) {
            sortedData = unsortData.sort(function (state1, state2) {
                return state2.Discharged - state1.Discharged;
            })
            setStateDataDummy(sortedData);
        } else {
            setStateDataDummy(dataOfState);
        }
    }

    return (
        <div className='main-state'>
            <div className='state-nav'>
                <div className='state-nav-head'>
                    State Corona Data
                </div>
                <div className='state-sort-filter'>
                    {isSortByActive ? <ColorButtonActive variant="contained" startIcon={<BsSortUpAlt />} title='Sort States by number of active cases' onClick={sortDataByActive}>Sort By Active</ColorButtonActive>
                        : <ColorButton variant="contained" startIcon={<BsSortUpAlt />} title='Sort States by number of active cases' onClick={sortDataByActive}>Sort By Active</ColorButton>}
                    {isSortByDeath ? <ColorButtonActive variant="contained" startIcon={<BsSortDown />} title='Sort States by number of deaths' onClick={sortDataByDeaths}>Sort By Death</ColorButtonActive>
                        : <ColorButton variant="contained" startIcon={<BsSortDown />} title='Sort States by number of deaths' onClick={sortDataByDeaths}>Sort By Death</ColorButton>}
                    {isSortByDischarged ? <ColorButtonActive variant="contained" startIcon={<BsSortUpAlt />} title='Sort States by number of discharged' onClick={sortDataByDischarged}>Sort By Discharged</ColorButtonActive>
                        : <ColorButton variant="contained" startIcon={<BsSortUpAlt />} title='Sort States by number of discharged' onClick={sortDataByDischarged}>Sort By Discharged</ColorButton>}
                </div>
            </div>
            <div className='states'>
                {
                    dataPerPage.map((val, index) => {
                        return <StateCard statename={val.state} active={val.Active} deaths={val.Deaths} discharged={val.Discharged} key={index} />;
                    })
                }
            </div>
            <div className='pagination-section'>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    pageRangeDisplayed={2}
                />
            </div>
        </div>
    )
}

export default StatesData