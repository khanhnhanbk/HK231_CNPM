import { samplePrintingRequests } from '../model/samplePrintRequest'

const updateStatus = async (id = 0, newStatus) => {
  // Update the status in the samplePrintingRequests array
  samplePrintingRequests.forEach((request) => {
    if (request.requestID === id) {
      request.status = newStatus;
    }
  });
};
updateStatus();

const getOne = async (id) => {
  const result = samplePrintingRequests.find((request) => request.requestID === id);
  return result;
}
const addRequest = async (newRequest) => {
  console.log('add request')
  // Update the status in the samplePrintingRequests array
  samplePrintingRequests.push(newRequest);
  console.log(samplePrintingRequests)
}
export { updateStatus, addRequest, getOne };