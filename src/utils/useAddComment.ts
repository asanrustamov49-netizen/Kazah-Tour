import { IAddComment } from "@/types/Types";
import { log } from "console";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAddComment = create<IAddComment>()(
  persist(
    (set) => ({
      comments: [],
      addComment: (name, comment) => {
        console.log("Adding comment:", { name, comment });
        set((state) => ({
          comments: [...state.comments, { name, comment }],
        }));
      },
      removeComment: (name) => {
        set((state) => ({
          comments: state.comments.filter((item) => item.name !== name),
        }));
      },
    }),
    { name: "comments" },
  ),
);
