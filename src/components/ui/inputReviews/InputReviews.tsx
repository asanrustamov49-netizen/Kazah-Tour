"use client";
import { IoMdSend } from "react-icons/io";
import "./inputReviews.scss";
import { useForm } from "react-hook-form";
import { useAddComment } from "@/utils/useAddComment";

interface IForm {
  name: string;
  message: string;
}

const InputReviews = () => {
  const { register, reset, handleSubmit } = useForm<IForm>();
  const { addComment } = useAddComment();
  const handleData = (data: IForm) => {
    addComment(data.name, data.message);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleData)} className="inp">
      <input
        {...register("message", { required: true, minLength: 1 })}
        type="text"
        placeholder="Comment..."
      />
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Enter Name..."
      />
      <button type="submit">
        <IoMdSend />
      </button>
    </form>
  );
};

export default InputReviews;
