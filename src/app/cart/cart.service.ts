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

  applyPromotions(cartItem: CartItem): number {
    const { pizza, toppings } = cartItem;

    // Promo 1: 1 Medium Pizza with at least 2 toppings = $5
    if (pizza.size === 'Medium' && toppings.length === 2) {
      return 5;
    }

    // Promotion 2: 2 Medium Pizzas with 4 Toppings each = $9
    const mediumPizzasInCart = this.cartItems().filter(
      (item) => item.pizza.size === 'Medium' && item.toppings.length >= 4
    );

    if (mediumPizzasInCart.length === 2) {
      return 9;
    }

    // Promotion 3: 1 Large Pizza with 4 Toppings (Pepperoni & BBQ count as 2 each) = 50% off
    if (pizza.size === 'Large') {
      let toppingCount = toppings.length;
      if (toppings.some((t) => t.name === 'Pepperoni')) toppingCount++;
      if (toppings.some((t) => t.name === 'BBQ Chicken')) toppingCount++;
      if (toppingCount >= 4) {
        const originalPrice =
          pizza.price +
          toppings.reduce((sum, topping) => sum + topping.price, 0);
        // Apply 50% discount
        return originalPrice / 2;
      }
    }

    // Otherwise, return regular price
    return (
      pizza.price + toppings.reduce((sum, topping) => sum + topping.price, 0)
    );
  }

  // Add pizza + toppings to cart
  addToCart(item: CartItem): void {
    const { pizza, toppings } = item;
    // Apply promotions before adding to cart
    const finalPrice = this.applyPromotions(item); // Update cartItems with the new pizza item and final price
    const updatedItem = { ...item, price: finalPrice };
    this.cartItems.update((items) => [...items, updatedItem]);
  }

  removeFromCart(index: number): void {
    this.cartItems.update((items) => items.filter((_, i) => i !== index));
  }
}
