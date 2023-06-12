import { Box, Typography } from "@mui/material";
import { NoteObject } from "../../interface/Interface";
import Note from "./Note";

interface INoteProps {
  notes: NoteObject[];
  deleteNote: (id: string) => void
}

const Notes: React.FC<INoteProps> = ({ notes, deleteNote }) => {
  return (
    <>
      <Box>
        <Typography variant="h5">Notes</Typography>
        <Box>
          {notes.map((note) => (
            <Note key={note.id} note={note} deleteNote={deleteNote} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Notes;
