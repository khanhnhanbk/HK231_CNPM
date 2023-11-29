// material-ui
import { Box,
  //  IconButton,
  Stack,Typography,
   useMediaQuery } from '@mui/material';
// import { GithubOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';


//import data from model
import UserBalance from '../../../../model/balance.model'
// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  let balance = UserBalance.balance //this declaration is to use for latter calculation with printing cost - may call for controller
  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <Stack sx = {{width: '15%'}}>
        <Typography sx ={{width: '100%', fontWeight: 'bold', textAlign: 'center'}}>Current Balance </Typography>
          <Typography variant="body2" sx = {{textAlign: 'center', textColor: 'blue'}}>
            {balance} .000VND
          </Typography>
      </Stack>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
