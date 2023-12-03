
class PrintingRequest {
    constructor(filename, status, sentTime, cost){
      this.filename = filename;
      this.status = status;
      this.sentTime = sentTime?sentTime:'';
      this.cost = cost;

    }
  }
  
export default PrintingRequest;
