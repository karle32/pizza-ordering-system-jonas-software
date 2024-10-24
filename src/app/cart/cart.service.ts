import { computed, Injectable, signal } from '@angular/core';

interface CartItem {
  pizza: PizzaSize;
  toppings: PizzaTopping[];
  price?: number; // Make price optional here
}

interface PizzaSize {
  size: string;
  price: number;
}

interface PizzaTopping {
  name: string;
  price: number;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  // Compute subtotal by summing size and topping prices multiplied by quantity
  // Compute the subtotal of all pizzas in the cart
  subTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.price || 0), 0)
  );
  tax = computed(() => this.subTotal() * 0.13); // Assuming 13% tax
  totalPrice = computed(() => this.subTotal() + this.tax());

  applyPromotions(cartItem: CartItem) {
    const { pizza, toppings } = cartItem;
    const originalPrice =
      pizza.price + toppings.reduce((sum, topping) => sum + topping.price, 0);
    let price = originalPrice;

    // Promo 1: 1 Medium Pizza with at least 2 toppings = $5
    if (pizza.size === 'Medium' && toppings.length === 2) {
      // Update the cart with the new price for the current item
      price = 5;
      this.cartItems.update((items) =>
        items.map((item) => (item === cartItem ? { ...item, price } : item))
      );
    }

    // Promotion 2: 2 Medium Pizzas with 4 Toppings each = $9
    const mediumPizzasInCart = this.cartItems().filter(
      (item) => item.pizza.size === 'Medium' && item.toppings.length === 4
    );

    if (mediumPizzasInCart.length === 2) {
      // Set prices for the pizzas in the cart
      mediumPizzasInCart.forEach((item, index) => {
        item.price = index === 0 ? 0 : 9; // Set first pizza to 0 and second to 9
      });

      // Update cart with modified prices
      this.cartItems.update((items) =>
        items.map((item) =>
          mediumPizzasInCart.includes(item)
            ? { ...item, price: item.price }
            : item
        )
      );
    }

    // Promotion 3: 1 Large Pizza with 4 Toppings (Pepperoni & BBQ count as 2 each) = 50% off
    if (pizza.size === 'Large') {
      let toppingCount = toppings.length;
      if (toppings.some((t) => t.name === 'Pepperoni')) toppingCount++;
      if (toppings.some((t) => t.name === 'BBQ Chicken')) toppingCount++;
      if (toppingCount >= 4) {
        price /= 2; // Apply 50% discount
      }
    }

    // Update the cartItem price
    cartItem.price = price;

    // Update the cart with the new price for the current item
    this.cartItems.update((items) =>
      items.map((item) => (item === cartItem ? { ...item, price } : item))
    );
  }

  // Add pizza + toppings to cart
  addToCart(item: CartItem): void {
    const { pizza, toppings } = item;
    this.cartItems.update((items) => [...items, item]);
    // Apply promotions before adding to cart
    this.applyPromotions(item); // Update cartItems with the new pizza item and final price
  }

  removeFromCart(index: number): void {
    this.cartItems.update((items) => items.filter((_, i) => i !== index));
  }
}
