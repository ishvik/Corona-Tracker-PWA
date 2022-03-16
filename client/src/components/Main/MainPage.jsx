import React from 'react';
import './MainPage.css';
import BasicDetail from '../BasicDetails/BasicDetail';
import StatesData from '../StateDetail/StatesData';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FiRefreshCcw } from 'react-icons/fi';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

const ColorButton = styled(Button)({
  backgroundColor: '#D8FA33',
  color: '#1E1E24',
  fontWeight:'bold',
  '&:hover': {
    backgroundColor:'#1E1E24',
    color:'white'
  }
});

function MainPage() {

  const [activeCases, setActiveCases] = useState('');
  const [numOfDeaths, setNumOfDeaths] = useState('');
  const [numOfRecovered, setNumOfRecovered] = useState('');
  const [totalVaccinated, setTotalVaccinated] = useState('');

  const [dataOfState, setdataOfState] = useState([]);

  const getBasicData = async () => {
    let temp = await axios.get('http://localhost:8081/api/basicdata');
    let res = temp.data;
    setActiveCases(res[0]);
    setNumOfDeaths(res[1]);
    setNumOfRecovered(res[2]);
    setTotalVaccinated(res[3]);
  }

  const getStateData = async () => {
    let res = await axios.get('http://localhost:8081/api/statedata');
    setdataOfState(res.data);
  };

  useEffect(() => {
    getBasicData();
    getStateData();
  }, [])

  const onRefresh = () => {
    getBasicData();
    getStateData();
  }

  
  return (
    <div className='body-section'>
      <div className='header'>
        <div className='heading'>
          The Corona Tracker
        </div>
        <div className='btn-refresh'>
          <ColorButton variant="contained" startIcon={<FiRefreshCcw />} onClick={onRefresh}>Refresh</ColorButton>
        </div>
      </div>
      <BasicDetail activeCases={activeCases} numOfDeaths={numOfDeaths} numOfRecovered={numOfRecovered} totalVaccinated={totalVaccinated} />
      <StatesData dataOfState={dataOfState}/>
    </div>
  )
}

export default MainPage