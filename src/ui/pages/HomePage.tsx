import { Box } from "@mui/material";
import NavBar from "../organisms/NavBar";
import Inputs from "../organisms/Inputs";
import Notes from "../organisms/Notes";
import { useEffect, useState } from "react";
import { NoteObject } from "../../interface/Interface";

const HomePage = () => {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    localStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <>
      <NavBar />
      <Box style={{ padding: 20 }}>
        <Inputs addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </>
  );
};

export default HomePage;
