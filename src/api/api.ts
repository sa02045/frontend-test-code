import axios from "axios";
import type { Menu } from "../types/Menu";

export async function fetchCarts() {
  const { data } = await axios.get<Menu>("/carts");
  return data;
}
