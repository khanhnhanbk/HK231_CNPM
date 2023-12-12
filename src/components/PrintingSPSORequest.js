import React from 'react';
import {
  Card, Box, Button
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { updateStatus } from '../controller/printRequest.controller';



const PrintingSPSORequest = ({ request }) => {
  const { requestID, filename, status, sentTime, cost } = request;
  // const navigate = useNavigate();
  return (
    <>


      <Card
        sx={{
          minHeight: '56px',
          padding: '8px',
          my: '8px',
          display: 'flex',
          justifyContent: 'space-between',
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
            <Box sx={{ fontWeight: 'medium' }}>{filename}</Box>
            <Box sx={{ typography: 'body2' }}>Sent time: {sentTime}</Box>
          </Box>
        </Box>

        <Box mx="16px">
          <Box sx={{ typography: 'body1' }}>
            Status: {' '}
            <span style={{ color: status === 'pending' ? 'blue' : 'green', }}>{status}</span>
          </Box>
          <Box sx={{ typography: 'body2' }}>
            Cost: <span> {cost}.000VND</span>
          </Box>
        </Box>
        {/* Student info */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ fontWeight: 'medium' }}>Student info</Box>
          <Box sx={{ typography: 'body2' }}>Name: {request.studentName}</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant={status === "printed" ? 'disable' : "contained"} sx={{ mr: '8px' }}
            onClick={() => {
              updateStatus(requestID, 'printed');
            }}
          >Next</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant={status === ("printed" || "canceled") ? 'disable' : "contained"} sx={{ mr: '8px' }}
            onClick={() => {
              updateStatus(requestID, 'canceled');
            }}
          >Cancel</Button>
        </Box>

      </Card>
    </>
  );
};



export default PrintingSPSORequest;
