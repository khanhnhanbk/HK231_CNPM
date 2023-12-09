import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import MainCard from 'components/MainCard';
import PrintingSPSORequest from 'components/PrintingSPSORequest';
import { samplePrintingRequests } from '../../model/samplePrintRequest';

const HomePage = () => {

  const renderPrintingRequests = () => {
    return samplePrintingRequests.map((request, index) => (
      <PrintingSPSORequest
        key={index}
        request={{ ...request }}
      />
    ));
  };
  useEffect(() => {

  }, []);

  return (
    <MainCard title="Home Page">
      <Box sx={{
        marginBottom: '16px',
        fontSize: '1.5rem',
        fontWeight: 'bolder',
        // textAlign: 'center'
      }} >
        <span>Printing requests:</span>
      </Box>
      {renderPrintingRequests()}
    </MainCard>
  );
};

export default HomePage;
