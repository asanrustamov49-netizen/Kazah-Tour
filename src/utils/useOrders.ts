import { IOrderState } from "@/types/Types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrders = create<IOrderState>()(
  persist(
    (set) => ({
      orders: [],
      createOrders: (item) => {
        set((state) => ({
          orders: [...state.orders, item],
        }));
      },
      removeFromOrder: (id) => {
        set((state) => ({
          orders: state.orders.filter((item) => item.tour._id !== id),
        }));
      },
    }),
    { name: "orders" },
  ),
);
