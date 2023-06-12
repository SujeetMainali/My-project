import { NoteObject } from "../../interface/Interface";

interface INoteProp {
    note: NoteObject
}

const Note: React.FC<INoteProp> = ({note}) => {
  return <div>Note</div>;
};

export default Note;
