import { samplePrintingRequests } from '../model/samplePrintRequest'

const updateStatus = async (id = 0, newStatus) => {
  console.log('change status')
  // Update the status in the samplePrintingRequests array
  samplePrintingRequests[id].Status = newStatus ? newStatus : 'printed';
  console.log(samplePrintingRequests[id])
};
updateStatus();

const addRequest = async (newRequest) => {
  console.log('add request')
  // Update the status in the samplePrintingRequests array
  samplePrintingRequests.push(newRequest);
  console.log(samplePrintingRequests)
}
export { updateStatus , addRequest};