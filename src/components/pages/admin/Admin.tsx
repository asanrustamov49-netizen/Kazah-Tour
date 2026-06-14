"use client";
import { useForm } from "react-hook-form";
import scss from "./admin.module.scss";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { useCreate } from "@/utils/useCreate";

interface IForm {
  _id: number;
  name: string;
  url: string;
  shortOverview: string;
  overview: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  price: number;
}
const Admin = () => {
  const { handleSubmit, reset, register } = useForm<IForm>();
  const { mutate: Create } = useCreate();
  const handleData = (data: IForm) => {
    Create(data);
    reset();
  };
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>CREATE A TOUR</h1>
          <form onSubmit={handleSubmit(handleData)} className={scss.admin}>
            <input
              {...register("name", {
                required: true,
              })}
              // onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name of Tour..."
            />
            <input
              {...register("url", {
                required: true,
              })}
              // onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Photo URL"
            />
            <input
              {...register("shortOverview",{
                required: true,
              })}
              // onChange={(e) => setShortOverview(e.target.value)}
              type="text"
              placeholder="Short Overview"
            />
            <input
              {...register("overview", {
                required: true,
              })}
              // onChange={(e) => setOverview(e.target.value)}
              type="text"
              placeholder="Overview"
            />
            <select
              {...register("city")}
              // onChange={(e) => setCity(e.target.value)}
            >
              <option value="">City</option>
            </select>
            <input
              type="number"
              {...register("price", {
                required: true,
                valueAsNumber: true,
              })}
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
              // style={{
              //   cursor: disabled.name ? "pointer" : "not-allowed",
              // }}
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
