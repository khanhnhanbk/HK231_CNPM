import {samplePrintingRequests} from '../model/samplePrintRequest'

const updateStatus  = async (id = 0, newStatus) => {
    console.log('change status')
    // Update the status in the samplePrintingRequests array
    samplePrintingRequests[id].Status = newStatus?newStatus:'printed';
    console.log(samplePrintingRequests[id])
  };
updateStatus();
export {updateStatus};