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
          totalOrders: state.totalOrders + 1,
        }));
      },
      removeFromOrder: (id) => {
        set((state) => ({
          orders: state.orders.filter((item) => item._id !== id),
          totalOrders:
            state.totalOrders == 0 ? state.totalOrders : state.totalOrders - 1,
        }));
      },
      totalOrders: 0,
    }),
    { name: "orders" },
  ),
);
