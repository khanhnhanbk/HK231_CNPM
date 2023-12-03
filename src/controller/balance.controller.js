const testfunc = () =>{
    // console.log("test")    
    return "test";
}

import UserBalance from '../model/balance.model';

// Function to subtract the cost from the user's balance
const subtractCostFromBalance = (cost) => {
  if (UserBalance.balance >= cost) {
    UserBalance.balance -= cost;
    return { success: true, message: `Successfully subtracted ${cost} from balance, current balance is ${UserBalance.balance}` };
  } else {
    return { success: false, message: 'Insufficient balance' };
  }
};

export {testfunc, subtractCostFromBalance };

