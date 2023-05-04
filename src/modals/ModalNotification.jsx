import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
const regName = /[a-zA-Zа-яА-Я]/;

function validateEmail(email) {
  return regEmail.test(email);
}
function validateName(name) {
  return name.length > 2 && regName.test(name);
}

export default function ModalNotification({ isOpen }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isValidateEmail, setValidEmail] = useState(false);
  const [isValidateName, setValidName] = useState(false);
  const [isTochedEmail, setTochedEmail] = useState(false);
  const [isTochedName, setTochedName] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (validateName(name)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [name]);
  useEffect(() => {
    if (validateEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [email]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Подпишитесь!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Подпишитесь на рассылку, чтобы получать уведомления о новых статьях.
          Введите свой email в поле ниже.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Ваше имя"
          type="text"
          fullWidth
          variant="standard"
          color={
            isTochedName ? (isValidateName ? "success" : "error") : "primary"
          }
          onChange={(event) => {
            setName(event.target.value);
          }}
          onClick={(event) => {
            setTochedName(true);
          }}
        />
        <TextField
          margin="dense"
          id="email"
          label="Почта"
          type="email"
          fullWidth
          variant="standard"
          color={
            isTochedEmail ? (isValidateEmail ? "success" : "error") : "primary"
          }
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onFocus={(event) => {
            setTochedEmail(true);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Закрыть</Button>
        <Button
          disabled={!isValidateEmail}
          variant={isValidateEmail && isValidateName ? "success" : "error"}
          onClick={handleClose}
        >
          Подписаться
        </Button>
      </DialogActions>
    </Dialog>
  );
}
