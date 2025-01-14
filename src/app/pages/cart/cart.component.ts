import {Component, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItemComponent} from './cart-item/cart-item.component';
import {SummaryComponent} from './summary/summary.component';

@Component({
  selector: 'app-cart',
  imports: [
    CartItemComponent,
    SummaryComponent
  ],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h1 class="text-3xl">Shopping Cart</h1>
    @if (cartService.getCart().length === 0) {
        <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
          <span class="text-md font-bold" > Your cart is empty </span>
        </div>
    } @else {
        @for (product of cartService.getCart(); track product.id) {
          <app-cart-item [product]="product"/>
        }
        <app-summary />
    }
    </div>
  `,
  styles: ``
})
export class CartComponent {

  cartService = inject(CartService);
}
