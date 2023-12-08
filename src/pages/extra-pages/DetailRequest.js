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
  }, [rid]);

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
    prototypeTitle: {
      fontWeight: "bold",
      marginTop: "20px",
      marginBottom: "10px",
      fontSize: "20px",
    },
    marginTitle: {
      fontWeight: "bold",
      marginTop: "10px",
      marginBottom: "5px",
      fontSize: "18px",
    },
    marginList: {
      listStyleType: "none",
      paddingLeft: "0",
    },
    listItem: {
      marginBottom: "5px",
    },
    // Additional styles
    pageSize: {
      fontStyle: "italic",
      color: "#777",
    },
    quality: {
      textTransform: "capitalize",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Detail Request</h1>
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
        <p style={styles.prototypeTitle}>Print prototype</p>
        <p>
          <strong>Oneside or Double:</strong>{" "}
          {prototype?.oneside ? "One side" : "Double"}
        </p>
        <p style={styles.marginTitle}>Margin:</p>
        <ul style={styles.marginList}>
          <li style={styles.listItem}>Top: {prototype?.margin?.top}</li>
          <li style={styles.listItem}>Bottom: {prototype?.margin?.bottom}</li>
          <li style={styles.listItem}>Left: {prototype?.margin?.left}</li>
          <li style={styles.listItem}>Right: {prototype?.margin?.right}</li>
        </ul>
        <p style={styles.pageSize}>
          <strong>Page size:</strong> {prototype?.pageSize}
        </p>
        <p>
          <strong>Color:</strong> {prototype?.color}
        </p>
        <p style={styles.quality}>
          <strong>Quality:</strong> {prototype?.quality}
        </p>
      </div>
    </div>
  );
};

export default DetailRequest;
