"use client";

import { Note as NoteType } from "@/db/schemas/notes";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type Props = {
  note: NoteType;
};

function Note({ note }: Props) {
  return (
    <div className="custom-scrollbar bg-muted/80 h-96 w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words rounded-lg p-6">
      <div className="relative mb-2 flex items-center gap-2">
        <h2 className="text-muted-foreground text-lg font-semibold">
          {`${("0" + note.updatedAt.getDate()).slice(-2)}-${(
            "0" +
            (note.updatedAt.getMonth() + 1)
          ).slice(-2)}-${note.updatedAt.getFullYear()}`}
        </h2>

        <EditButton note={note} />
        <DeleteButton noteId={note.id} />
      </div>
      <p>{note.text}</p>
    </div>
  );
}

export default Note;
