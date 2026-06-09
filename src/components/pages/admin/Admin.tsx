"use client";
import { useForm } from "react-hook-form";
import scss from "./admin.module.scss";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

interface IForm {
  name: string;
  url: string;
  shortOverview: string;
  overview: string;
  city: string;
  price: number;
}
const Admin = () => {
  const { handleSubmit, reset, register } = useForm<IForm>();
  const [name, setName] = useState<string>("");
  const [shortOverview, setShortOverview] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [overview, setOverview] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const disabled: any = {
    name,
    shortOverview,
    overview,
    url,
    city,
    price,
  };
  const handleData = (data: IForm) => {
    reset();
  };
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>CREATE A TOUR</h1>
          <form onSubmit={handleSubmit(handleData)} className={scss.admin}>
            <input
              {...(register("name"),
              {
                required: true,
              })}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name of Tour..."
            />
            <input
              {...(register("url"),
              {
                required: true,
              })}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Photo URL"
            />
            <input
              {...(register("shortOverview"),
              {
                required: true,
              })}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Short Overview"
            />
            <input
              {...(register("overview"),
              {
                required: true,
              })}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Overview"
            />
            <select
              {...(register("city"),
              {
                required: true,
              })}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="">City</option>
            </select>
            <input
              {...(register("price"),
              {
                required: true,
              })}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Price"
            />
            <div className={scss.images}>
              <p>___________________</p>
              <span>
                <FaCircle />
              </span>
              <span className={scss.center}>
                <FaCircle />
              </span>
              <span>
                <FaCircle />
              </span>
              <p>___________________</p>
            </div>
            <button
              style={{
                cursor: disabled.name ? "pointer" : "not-allowed",
              }}
              // disabled={!disabled.name}
              type="submit"
            >
              CREATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
