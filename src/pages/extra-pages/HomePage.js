import React from 'react';
import { Box } from '@mui/material';
import MainCard from 'components/MainCard';
import PrintingRequest from 'components/PrintingRequest';
import { samplePrintingRequests } from '../../model/samplePrintRequest';

const HomePage = () => {
  const renderPrintingRequests = () => {
    return samplePrintingRequests.map((request, index) => (
      <PrintingRequest
        key={index}
        request={{ ...request }}
      />
    ));
  };

  return (
    <MainCard title="">
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
