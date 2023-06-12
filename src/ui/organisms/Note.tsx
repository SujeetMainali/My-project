import { Box, Button, Card, CardContent, Typography, styled } from "@mui/material";
import { NoteObject } from "../../interface/Interface";
// import { styled } from "styled-components";

interface INoteProp {
  note: NoteObject;
  deleteNote: (id: string) => void;
}

const Note: React.FC<INoteProp> = ({note, deleteNote}) => {
  return (
    <StyledCard style={{backgroundColor:note.color}}>
      <CardContent>
        <Wrapper>
          <Typography>{note.title}</Typography>
          <Typography>{note.body}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined" onClick={()=>deleteNote(note.id)}>Delete</Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
width: 300px;
margin: 20px;
`
const Wrapper = styled(Box)`
  &>button{
    border: 2px solid black;
    margin-top: 5px;
  }

`

export default Note;
