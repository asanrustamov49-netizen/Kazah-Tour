"use client";

import Link from "next/link";
import Image from "next/image";
import scss from "./order.module.scss";
import { useOrders } from "@/utils/useOrders";
import { useRouter } from "next/navigation";

const Order = () => {
  const { push } = useRouter();
  const { orders, removeFromOrder } = useOrders();
  const totalOrders = orders.length;
  const totalPrice = orders.reduce((sum, item) => sum + item.totalPrice, 0);
  return (
    <section className={scss.orders}>
      <div className={scss.container}>
        <h1>MY ORDERS</h1>
        <div className={scss.stats}>
          <div className={scss.statCard}>
            <h2>{totalOrders}</h2>
            <p>Total Orders</p>
          </div>
          <div className={scss.statCard}>
            <h2>${totalPrice}</h2>
            <p>Total Price</p>
          </div>
        </div>
        {orders.length ? (
          <div className={scss.list}>
            {orders.map((item, index) => (
              <div key={`${item.tour._id}-${index}`} className={scss.card}>
                <div className={scss.imageWrapper}>
                  <Image src={item.tour.url} alt={item.tour.name} fill />
                </div>
                <div className={scss.info}>
                  <h2>{item.tour.name}</h2>
                  <p>📅 {item.date}</p>
                  <p>👤 {item.guests} Adults</p>
                </div>
                <div className={scss.removePrice}>
                  <div className={scss.price}>${item.tour.price}</div>
                  <button
                    className={scss.remove}
                    onClick={() => removeFromOrder(item.tour._id)}
                  >
                    Remove
                  </button>
                </div>
                <Link
                  href={`/detailCard/${item.tour._id}`}
                  className={scss.details}
                >
                  VIEW DETAILS
                </Link>
              </div>
            ))}
            <button className={scss.view} onClick={() => push("/tours")}>
              View For More Tours!
            </button>
          </div>
        ) : (
          <div className={scss.empty}>
            <h2>No Orders Yet</h2>
            <p>Book your first adventure ✈️</p>
            <button onClick={() => push("/tours")}>
              View Tours For Order!
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;
