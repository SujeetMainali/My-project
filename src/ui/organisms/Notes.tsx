import { Box, Typography } from "@mui/material";
import { NoteObject } from "../../interface/Interface";
import Note from "./Note";

interface INoteProps {
  notes: NoteObject[];
}

const Notes: React.FC<INoteProps> = ({ notes }) => {
  return (
    <>
      <Box>
        <Typography variant="h5">Notes</Typography>
        <Box>
          {
            notes.map(note=>(
              <Note note = {note} />
            ))
          }
        </Box>
      </Box>
    </>
  );
};

export default Notes;
