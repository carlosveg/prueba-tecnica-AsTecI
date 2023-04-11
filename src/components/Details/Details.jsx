import { Box, Modal, Typography } from "@mui/material";
import "./styles/Details.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Details = ({ details, handleClose }) => {
  const {
    _id,
    cityid,
    name,
    state,
    probabilityofprecip,
    relativehumidity,
    lastreporttime,
    llueve,
  } = details;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Detalles: {_id}
        </Typography>
        <hr />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          CityId: {cityid}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Name: {name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          State: {state}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Probability of Precip: {probabilityofprecip}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Relative Humidity: {relativehumidity}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Last Report Time: {lastreporttime}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ¿Llueve?: {llueve}
        </Typography>
      </Box>
    </Modal>
  );
};

export default Details;
