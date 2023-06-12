import { Box, Typography, styled } from "@mui/material";
import { NoteObject } from "../../interface/Interface";
import Note from "./Note";

interface INoteProps {
  notes: NoteObject[];
  deleteNote: (id: string) => void;
}

const Notes: React.FC<INoteProps> = ({ notes, deleteNote }) => {
  return (
    <>
      <Box>
        <Typography variant="h5">Notes</Typography>
        <Wrapper>
          {notes.map((note) => (
            <Note key={note.id} note={note} deleteNote={deleteNote} />
          ))}
        </Wrapper>
      </Box>
    </>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
`;

export default Notes;
