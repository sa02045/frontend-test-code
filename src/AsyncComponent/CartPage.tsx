import axios from "axios";
import { useEffect, useState } from "react";

interface Menu {
  price: number;
  name: string;
}

export function CartPage() {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    axios.get("/carts").then((response) => {
      setMenus(response.data);
    });
  });

  function sortByMenuPriceAscentOrder(a: Menu, b: Menu) {
    return a.price - b.price;
  }

  const formattedMenus = menus.sort(sortByMenuPriceAscentOrder).slice(0, 4);

  return (
    <div>
      {menus.length === 0 && <div>장바구니가 비었어요</div>}

      <ul>
        {formattedMenus.map((menu) => (
          <li role="listitem" key={menu.name}>
            {menu.price}원
          </li>
        ))}
      </ul>
    </div>
  );
}
