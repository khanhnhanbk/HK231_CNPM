import React from 'react';
import { Box } from '@mui/material';
import MainCard from 'components/MainCard';
import PrintingRequest from 'components/PrintingRequest';
import { samplePrintingRequests } from '../../model/samplePrintRequest';
import { updateStatus } from '../../controller/printRequest.controller';

const HomePage = () => {
  const renderPrintingRequests = () => {
    return samplePrintingRequests.map((request, index) => (
      <PrintingRequest
        key={index}
        Filename={request.filename}
        SentTime={request.sentTime}
        Status={request.status}
        Cost={request.cost}
        RequestID={index}
        updateRequestStatus={(newStatus) => updateStatus(index, newStatus)}
      />
    ));
  };

  return (
    <MainCard title="This is SPSO Home Page">
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
