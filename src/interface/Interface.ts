export interface NoteObject {
  id: string;
  title: string;
  body: string;
  color: string;
  date: string;
}

export const TITLE_LIMIT = 30;
export const BODY_LIMIT = 80;
