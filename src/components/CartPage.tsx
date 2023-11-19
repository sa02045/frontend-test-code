import { useState } from "react";

interface Menu {
  name: string;
  price: number;
}

interface Props {
  menus: Menu[];
}
export function CartPage({ menus }: Props) {
  const [orderType, setOrderType] = useState<"배달" | "포장">("배달");
  const [defaultMenus, setDefaultMenus] = useState(menus.map((menu) => ({ ...menu, quantity: 1 })));

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement;
    setOrderType(input.value as "배달" | "포장");
  }

  function handleButtonClick(name: string, quantity: number) {
    setDefaultMenus((prev) => {
      return prev.map((menu) => {
        if (menu.name === name) {
          return { ...menu, quantity: quantity };
        }
        return menu;
      });
    });
  }

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        <label htmlFor="배달">배달</label>
        <input type="checkbox" id="배달" checked={true} onChange={handleCheckboxChange} />

        <label htmlFor="포장">포장</label>
        <input type="checkbox" id="포장" onChange={handleCheckboxChange} />
      </div>
      <div>
        {defaultMenus.length === 0 ? (
          <div>장바구니가 비었어요</div>
        ) : (
          <ul>
            {defaultMenus.map((menu) => (
              <li key={menu.name} role="li">
                {menu.name} {menu.price}원
                <div>
                  <button
                    onClick={() => {
                      handleButtonClick(menu.name, menu.quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{menu.quantity}개</span>
                  <button
                    onClick={() => {
                      handleButtonClick(menu.name, menu.quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button>{orderType} 주문하기</button>
    </div>
  );
}
