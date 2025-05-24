import { DeliveryDate } from "./DeliveryDate";
import { DeliveryOption } from "./deliveryOption";
import { CartItemDetails } from "./CartItemDetails";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />

                <DeliveryOption
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
