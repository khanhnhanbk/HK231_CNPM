import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, List, ListItem } from '@mui/material';
import { getOne } from "controller/printRequest.controller";
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
}));
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
    <StyledPaper elevation={3}>
      <Typography variant="h4">Detail Request</Typography>
      <Typography variant="body1">Filename: {request?.filename}</Typography>
      <Typography variant="body1">Status: {request?.status}</Typography>
      <Typography variant="body1">Sent time: {request?.sentTime}</Typography>
      <Typography variant="body1">Cost: {request?.cost}</Typography>
      <Typography variant="h6">Print prototype</Typography>
      <Typography variant="body1">Oneside or Double: {prototype?.oneside ? "One side" : "Double"}</Typography>
      <Typography variant="h6">Margin:</Typography>
      <List>
        <ListItem>Top: {prototype?.margin?.top}</ListItem>
        <ListItem>Bottom: {prototype?.margin?.bottom}</ListItem>
        <ListItem>Left: {prototype?.margin?.left}</ListItem>
        <ListItem>Right: {prototype?.margin?.right}</ListItem>
      </List>
      <Typography variant="body1">Page size: {prototype?.pageSize}</Typography>
      <Typography variant="body1">Color: {prototype?.color}</Typography>
      <Typography variant="body1">Quality: {prototype?.quality}</Typography>
    </StyledPaper>
  );
};

export default DetailRequest;
