import { it, expect, describe, vi } from "vitest";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Product } from "./Product";

describe("Product Component", () => {
  const product = {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  };

  const loadCart = vi.fn();

  it("display the product details correctly", () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();
    expect(screen.getByText("$10.90")).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );
    expect(screen.getByTestId("product-rating-stars")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png"
    );
    expect(screen.getByText("87")).toBeInTheDocument();
  });

  it("can selects a quantity", async () => {
    render(<Product product={product} loadCart={loadCart} />);

    const quantitySelector = screen.getByTestId("product-quantity-selector");
    expect(quantitySelector).toHaveValue("1");

    const user = userEvent.setup();
    await user.selectOptions(quantitySelector, "3");
    expect(quantitySelector).toHaveValue("3");

    const addToCartButton = screen.getByTestId('add-to-cart-button');
    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith(
      '/api/cart-items',
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 3
      }
    );
    expect(loadCart).toHaveBeenCalled();
  });
});
