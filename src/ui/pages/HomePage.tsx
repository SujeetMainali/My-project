import { Box } from "@mui/material";
import NavBar from "../organisms/NavBar";
import Inputs from "../organisms/Inputs";
import Notes from '../organisms/Notes'
import { useState } from "react";
import { NoteObject } from "../../interface/Interface";

    const HomePage = () => {
      const [notes, setNotes] = useState<NoteObject[]>([])

      const addNotes = (note: NoteObject)=>{
        setNotes([note, ...notes]);
      }

      const deleteNote = (id: string)=>{
        const updatedNotes = notes.filter(note=>note.id !== id)
        setNotes(updatedNotes)
      }
  return (
    <>
      <NavBar />
      <Box style={{ padding: 20 }}>
        <Inputs addNotes={addNotes} />
        <Notes notes = {notes} deleteNote={deleteNote} />
      </Box>
    </>
  );
};

export default HomePage;
