import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { FormControl, TextField } from "@mui/material";
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { getOne } from "controller/printRequest.controller";
const ConfigRequest = () => {
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

  const handleCheckboxChange = (event) => {
    setPrototype((prev) => ({
      ...prev,
      oneside: event.target.checked,
    }));
  };

  const handleMarginChange = (direction) => (event) => {
    setPrototype((prev) => ({
      ...prev,
      margin: {
        ...prev.margin,
        [direction]: event.target.value,
      },
    }));
  };

  const handlePageSizeChange = (event) => {
    setPrototype((prev) => ({
      ...prev,
      pageSize: event.target.value,
    }));
  };

  const handleColorChange = (event) => {
    setPrototype((prev) => ({
      ...prev,
      color: event.target.value,
    }));
  };

  const handleQualityChange = (event) => {
    setPrototype((prev) => ({
      ...prev,
      quality: event.target.value,
    }));
  };
  return (
    <div>
      <h1>Detail Request</h1>
      <p>Filename: {request?.filename}</p>
      <p>Status: {request?.status}</p>
      <p>Sent time: {request?.sentTime}</p>
      <p>Cost: {request?.cost}</p>
      <p>Print prototype</p>
      <FormControl>
        <div>
          <label>
            Oneside or Double:
            <input type="checkbox" checked={prototype?.oneside} onChange={handleCheckboxChange} />
            {prototype?.oneside ? 'One side' : 'Double'}
          </label>
        </div>
        <div>

          <ul>
            <li>
              Top:
              <TextField type="number" value={prototype?.margin?.top} onChange={handleMarginChange('top')} />
            </li>
            <li>
              Bottom:
              <TextField type="number" value={prototype?.margin?.bottom} onChange={handleMarginChange('bottom')} />
            </li>
            <li>
              Left:
              <TextField type="number" value={prototype?.margin?.left} onChange={handleMarginChange('left')} />
            </li>
            <li>
              Right:
              <TextField type="number" value={prototype?.margin?.right} onChange={handleMarginChange('right')} />
            </li>
          </ul>

        </div>
        <div>
          <label>
            Page size:{' '}
            <Select
              value={prototype?.pageSize}
              onChange={handlePageSizeChange}
            >
              <Option value="A4">A4</Option>
              <Option value="A5">A5</Option>
              <Option value="A6">A6</Option>
            </Select>
          </label>
        </div>

        <label>
          Color:{' '}
          <TextField type="text" value={prototype?.color} onChange={handleColorChange} />
        </label>
        <div>
          <label>
            Quality:{' '}
            <TextField type="text" value={prototype?.quality} onChange={handleQualityChange} />
          </label>
        </div>
      </FormControl >
    </div >
  );
};

export default ConfigRequest;
