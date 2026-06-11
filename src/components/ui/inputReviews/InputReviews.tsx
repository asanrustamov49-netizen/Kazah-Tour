import { IoMdSend } from "react-icons/io";
import "./inputReviews.scss"

const InputReviews = () => {
  return <div className="inp">
    <input type="text" placeholder="Comment..."/>
    <button><IoMdSend /></button>
  </div>;
};

export default InputReviews;
