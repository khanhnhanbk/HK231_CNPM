import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { getOne } from "controller/printRequest.controller";
import { FormControl, TextField, Checkbox } from "@mui/material";

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

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      fontSize: "28px",
      marginBottom: "20px",
      color: "#333",
    },
    info: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#555",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    marginInput: {
      width: "100px",
      marginRight: "10px",
      backgroundColor: "#fff"
    },
    selectInput: {
      width: "200px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
    },
    textFieldInput: {
      width: "200px",
      backgroundColor: "#fff"
    },
  };

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
    <div style={styles.container}>
      <h1 style={styles.title}>Printing Properties Configuration</h1>
      <div style={styles.info}>
        <p>
          <strong>Filename:</strong> {request?.filename}
        </p>
        <p>
          <strong>Status:</strong> {request?.status}
        </p>
        <p>
          <strong>Sent time:</strong> {request?.sentTime}
        </p>
        <p>
          <strong>Cost:</strong> {request?.cost}
        </p>
        <p style={styles.info}>Print prototype</p>
        <FormControl>
          <div style={styles.checkboxLabel}>
            <label>
              Oneside or Double:
              <Checkbox
                checked={prototype?.oneside}
                onChange={handleCheckboxChange}
              />
              {prototype?.oneside ? "One side" : "Double"}
            </label>
          </div>
          <div>
            <ul style={styles.info}>
              <li>
                Top:
                <TextField
                  style={styles.marginInput}
                  type="number"
                  value={prototype?.margin?.top}
                  onChange={handleMarginChange("top")}
                />
              </li>
              <li>
                Bottom:
                <TextField
                  style={styles.marginInput}
                  type="number"
                  value={prototype?.margin?.bottom}
                  onChange={handleMarginChange("bottom")}
                />
              </li>
              <li>
                Left:
                <TextField
                  style={styles.marginInput}
                  type="number"
                  value={prototype?.margin?.left}
                  onChange={handleMarginChange("left")}
                />
              </li>
              <li>
                Right:
                <TextField
                  style={styles.marginInput}
                  type="number"
                  value={prototype?.margin?.right}
                  onChange={handleMarginChange("right")}
                />
              </li>
            </ul>
          </div>
          <div>
            <label>
              Page size:{" "}
              <Select
                style={styles.selectInput}
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
            Color:{" "}
            <TextField
              style={styles.textFieldInput}
              type="text"
              value={prototype?.color}
              onChange={handleColorChange}
            />
          </label>
          <div>
            <label>
              Quality:{" "}
              <TextField
                style={styles.textFieldInput}
                type="text"
                value={prototype?.quality}
                onChange={handleQualityChange}
              />
            </label>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default ConfigRequest;
