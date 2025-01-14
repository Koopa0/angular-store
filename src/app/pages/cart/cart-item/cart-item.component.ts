import {Component, inject, input, Input, signal} from '@angular/core';
import {Product} from '../../../models/product.model';
import {DeleteButtonComponent} from '../../../components/delete-button/delete-button.component';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [
    DeleteButtonComponent
  ],
  template: `

    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">

      <img [src]="product().image" [alt]="product().title" class="w-[50px] h-[50px] object-contain" loading="lazy" />

      <div class="flex flex-col gap-2">
        <span class="text-md font-bold" > {{ product().title }} </span>
        <span class="text-sm"> {{ product().price }} </span>
      </div>

      <div class="flex-1">

      </div>

      <app-delete-button label="Remove" (btnClicked)="cartService.removeFromCart(product().id)"/>

    </div>
  `,
  styles: ``
})
export class CartItemComponent {

  cartService = inject(CartService);

  product = input.required<Product>();
}
