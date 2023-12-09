import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getOne } from "controller/printRequest.controller";
const DetailRequest = () => {
  const { rid } = useParams();
  const [request, setRequest] = useState({});
  const [prototype, setPrototype] = useState({});
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await getOne(rid);
      setRequest(result);
      setPrototype(result?.prototype);
    };
    fetchRequest();
  }, []);
  return (
    <div>
      <h1>Detail Request</h1>
      <p>Filename: {request?.filename}</p>
      <p>Status: {request?.status}</p>
      <p>Sent time: {request?.sentTime}</p>
      <p>Cost: {request?.cost}</p>
      <p>Print prototype</p>
      <p> Oneside or Double: {prototype?.oneside ? "One side" : "Double"}</p>
      <p> Margin: </p>
      <ul>
        <li>Top: {prototype?.margin?.top}</li>
        <li>Bottom: {prototype?.margin?.bottom}</li>
        <li>Left: {prototype?.margin?.left}</li>
        <li>Right: {prototype?.margin?.right}</li>
      </ul>
      <p> Page size: {prototype?.pageSize}</p>
      <p> Color: {prototype?.color}</p>
      <p> Quality: {prototype?.quality}</p>

    </div>
  );
};

export default DetailRequest;
