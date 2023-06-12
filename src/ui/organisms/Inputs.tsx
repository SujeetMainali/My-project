import { Box, Button, InputBase, Typography, styled } from "@mui/material";
import { useState } from "react";
import { NoteObject, TITLE_LIMIT, BODY_LIMIT } from "../../interface/Interface";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  & > * {
    margin: 0px 20px 20px 0px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid black;
    opacity: 0.4;
  }

  & > div > input[type="color"] {
    width: 30px;
    height: 30px;
    bottom: -30px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;
const Error = styled(Typography)`
  background-color: red;
  color: white;
  padding: 10px;
  width: 50%;
  border-radius: 10px;
`;
const defaultObject = {
  id: "",
  title: "",
  body: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

const Inputs: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObject);
  const [error, setError] = useState<String>("");
  const onValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    // console.log(e.target.name, e.target.value);
    if (error) setError("");
    setNote({ ...note, [e.target.name]: e.target.value });
    // console.log(note);
  };
  const onCreateNote = () => {
    if (!note.title || !note.body) {
      setError("All fields are required");

      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultObject);
  };
  return (
    <>
      <div className="wrapper">
        <Container>
          <InputBase
            placeholder="title"
            onChange={(e) => onValueChange(e)}
            name="title"
            value={note.title}
            inputProps={{
              maxLength: TITLE_LIMIT
            }}
          ></InputBase>
          <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>
          <InputBase
            placeholder="body"
            onChange={(e) => onValueChange(e)}
            name="body"
            value={note.body}
            inputProps={{
              maxLength: BODY_LIMIT
            }}
          ></InputBase>
          <Box component="span">{note.body.length}/{BODY_LIMIT}</Box>
          <InputBase
            type="color"
            defaultValue={"#000000"}
            onChange={(e) => onValueChange(e)}
            name="color"
          ></InputBase>
          <Button variant="outlined" onClick={() => onCreateNote()}>
            Create
          </Button>
          {error && <Error>{error}</Error>}
        </Container>
      </div>
    </>
  );
};

export default Inputs;
