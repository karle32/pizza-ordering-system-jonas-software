import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '@app/cart/cart.service';

const MODULES = [CommonModule];

interface PizzaSize {
  size: string;
  price: number;
}

interface PizzaTopping {
  name: string;
  price: number;
  type: string;
}

@Component({
  selector: 'app-pizza-builder',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './pizza-builder.component.html',
  styleUrl: './pizza-builder.component.scss',
})
export class PizzaBuilderComponent {
  cartService = inject(CartService);
  pizzaSizes: PizzaSize[] = [
    { size: 'Small', price: 5 },
    { size: 'Medium', price: 7 },
    { size: 'Large', price: 8 },
    { size: 'Extra Large', price: 9 },
  ];

  currentPizzaSelected: { size: PizzaSize; toppings: PizzaTopping[] } = {
    size: this.pizzaSizes[1], // Default to Medium
    toppings: [],
  };

  pizzaToppings: PizzaTopping[] = [
    { name: 'Tomatoes', price: 1, type: 'Veggie' },
    { name: 'Onions', price: 0.5, type: 'Veggie' },
    { name: 'Bell Pepper', price: 1, type: 'Veggie' },
    { name: 'Mushrooms', price: 1.2, type: 'Veggie' },
    { name: 'Pineapple', price: 0.75, type: 'Veggie' },
    { name: 'Sausage', price: 1, type: 'Meat' },
    { name: 'Pepperoni', price: 2, type: 'Meat' },
    { name: 'BBQ Chicken', price: 3, type: 'Meat' },
  ];

  cartItems = this.cartService.cartItems;
  subTotal = this.cartService.subTotal;
  tax = this.cartService.tax;
  totalCost = this.cartService.totalPrice;

  onPizzaSelected(pizzaSize: PizzaSize): void {
    this.currentPizzaSelected.size = pizzaSize;
  }

  onToppingSelected(topping: PizzaTopping): void {
    const index = this.currentPizzaSelected.toppings.findIndex(
      (t) => t.name === topping.name
    );

    if (index === -1) {
      this.currentPizzaSelected.toppings.push(topping);
    } else {
      this.currentPizzaSelected.toppings.splice(index, 1);
    }
  }

  addToCart(): void {
    this.cartService.addToCart({
      pizza: this.currentPizzaSelected.size,
      toppings: [...this.currentPizzaSelected.toppings],
    });

    // Reset after adding to cart
    this.currentPizzaSelected = { size: this.pizzaSizes[1], toppings: [] };

    // Reset pizza topping checkboxes
    const toppingCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]'
    );
    toppingCheckboxes.forEach((checkbox) => {
      const checkboxElement = checkbox as HTMLInputElement;
      checkboxElement.checked = false;
    });
  }
}
