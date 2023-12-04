import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  // IconButton, 
  Card, Box
} from '@mui/material';




const PrintingRequest = ({ Filename, Status, SentTime, Cost, TimePrint, RequestID }) => {
  const [currentStatus, setCurrentStatus] = useState(Status);
  let timeinterval = TimePrint ? TimePrint * 1000 : 5000;
  console.log(TimePrint)
  console.log(timeinterval)
  useEffect(() => {
    const handleStatusChange = async () => {
      if (currentStatus === 'pending') {
        setTimeout(() => {
          setCurrentStatus('printed');
          const { updateStatus } = require('../controller/printRequest.controller');
          updateStatus(RequestID, 'printed');

        }, timeinterval); // Change the status after 5 seconds
      } else if (currentStatus === 'printed' && Status === 'pending') { // from pending to printed Status

        try {
          const { subtractCostFromBalance } = require('../controller/balance.controller')
          const response = await subtractCostFromBalance(Cost);


          // Handle the response or perform necessary actions
          console.log('Cost subtracted:', response);
        } catch (error) {
          console.error('Error subtracting cost:', error);
        }
      }
    };

    handleStatusChange();
  }, [currentStatus, Cost, timeinterval]);


  return (
    <>


      <Card
        sx={{
          width: '50%',
          minHeight: '56px',
          padding: '8px',
          my: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          // shadow: 'none',
        }}
      >
        <Box sx={{
          display: 'flex',
        }}>
          <Box>
            <img
              src="https://s3-alpha-sig.figma.com/img/ec03/71f1/624c2d08ecd578abdecb6d5c3aa295aa?Expires=1702252800&Signature=IOFv7OFZZnQ5bONaTCMc1dSxZQ38CIsIZ-ghDNwiFiwC92ZbNzfLEXPeMq6rzahX-XRdW4fqsznaIHSvfIQ8j2wi5exphuGfugiAQNPzKtXDD0A9cdVQ2x4S4sHGEYVRFda4OZKW67ygl~DSJpXlnCZbttowdeuKeevPzqfsqOV5ZHqo6TwjF8G9cj6up4rJuRsIqzu6qQ~vUS~aT8iGL4Ux2-3YHdHzQ7CImiwYmooM5pWyb9uuJZ2kz8x9uPDWmi9fCG8Cgq5kwoaoBfa-6RKpOs-5AZTxMuup3f~7zm6c5i-PJqrNWmTkShz8NKR~uiOUKB7GJSXNvQQVEXK~iQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              style={{ height: '50px' }}
            ></img>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between'
          }}>
            <Box sx={{ fontWeight: 'medium' }}>{Filename}</Box>
            <Box sx={{ typography: 'body2' }}>Sent time: {SentTime}</Box>
          </Box>
        </Box>

        <Box mx="16px">
          <Box sx={{ typography: 'body1' }}>
            Status: {' '}
            <span style={{ color: currentStatus === 'pending' ? 'blue' : 'green', }}>{currentStatus}</span>
          </Box>
          <Box sx={{ typography: 'body2' }}>
            Cost: {' '} <span> {Cost}.000VND</span>
          </Box>
        </Box>
      </Card>
    </>
  );
};

PrintingRequest.propTypes = {
  Filename: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired,
  SentTime: PropTypes.string,
  Cost: PropTypes.number.isRequired,
  TimePrint: PropTypes.number,
  RequestID: PropTypes.number.require,
};

export default PrintingRequest;
