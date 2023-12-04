// project import
import pages from './pages';
import support from './support';
import student from './student';
import spso from './spso';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [pages]
};

const token = localStorage.getItem('token');
if (token) {
  const role = localStorage.getItem('role');
  if (role === 'student') {
    menuItems.items = [student, pages, support,]
  }
  else {
    menuItems.items = [spso, pages, support]
  }

}

export default menuItems;
