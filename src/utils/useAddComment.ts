import { IAddComment } from "@/types/Types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAddComment = create<IAddComment>()(
  persist(
    (set) => ({
      comments: [],
      addComment: (name, comment) => {
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
