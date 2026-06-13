"use client"
import { IoMdSend } from "react-icons/io";
import "./inputReviews.scss";
import { useForm } from "react-hook-form";

interface IForm {
  message: string;
}

const InputReviews = () => {
  const { register, reset, handleSubmit } = useForm<IForm>();
  const handleData = (data: IForm) => {
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleData)} className="inp">
      <input
        {...(register("message"), { required: true })}
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
