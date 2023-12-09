class PrintingRequest {
  constructor(filename, status, sentTime, cost) {
    this.requestID = Math.random().toString(36).substring(7);
    this.filename = filename;
    this.status = status;
    this.sentTime = sentTime || new Date().toLocaleString();
    this.cost = cost;
    this.studentName = 'Nguyen Van A';
    this.prototype = new PrintPrototype();
  }
}
class PrintPrototype {
  constructor(isOneSide, margin, pageSize, color, quality) {
    this.oneside = isOneSide || true;
    this.margin = margin || { top: 0, bottom: 0, left: 0, right: 0 }
    this.pageSize = pageSize || "A4";
    this.color = color || "black and white";
    this.quality = quality || "normal";
  }
}
export default PrintingRequest;
