import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const bordersStyle = {
  borderColor: "secondary.main",
  border: 2,
};

const commonStyles = {
  ...bordersStyle,
  bgcolor: "background.paper",
  m: 1,
  minWidth: 200,
};

const Task = (props) => {
  const [status, setstatus] = useState(props.data.status);
  const [name, setname] = useState(props.data.name);
  const [description, setdescription] = useState(props.data.description);
  const [assignedto, setassignedto] = useState(props.data.assignedTo);
  const [dueDate, setdueDate] = useState(props.data.dueDate);
  const [createdAt, setcreatedAt] = useState(props.data.createdAt);

  return (
    <Box sx={{ ...commonStyles }}>
      <Card>
        <CardContent>
          <Typography align="center" variant="h4" component="div">
            {name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Estado: {status}
          </Typography>
          <Typography color="text.secondary">
            Fecha limite: {dueDate}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Descripcion:<br></br>
            {description}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Creada el: {createdAt}
          </Typography>
        </CardContent>

        <CardActions>
          <Typography size="small">Assignada a: {assignedto}</Typography>
        </CardActions>
      </Card>
    </Box>
  );
};
export default Task;
