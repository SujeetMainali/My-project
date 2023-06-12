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
  return (
    <>
      <NavBar />
      <Box style={{ padding: 20 }}>
        <Inputs addNotes={addNotes} />
        <Notes />
      </Box>
    </>
  );
};

export default HomePage;
