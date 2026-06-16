"use client"
import { IoMdSend } from "react-icons/io";
import "./inputReviews.scss";
import { useForm } from "react-hook-form";
import { useAddComment } from "@/utils/useAddComment";

interface IForm {
  message: string;
}

const InputReviews = () => {
  const { register, reset, handleSubmit } = useForm<IForm>({
    defaultValues: {
      message: "",
    },
  }
  );

  const {addComment} = useAddComment()
  const handleData = (data: IForm) => {
    console.log("Form data:", data);
    addComment("User", data.message)
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleData)} className="inp">
      <input
        {...register("message", { required: true, minLength: 1 })}
        type="text"
        placeholder="Comment..."
      />
      <button type="submit">
        <IoMdSend />
      </button>
    </form>
  );
};

export default InputReviews;
