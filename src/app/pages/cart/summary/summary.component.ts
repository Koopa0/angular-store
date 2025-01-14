import {Component, computed, inject} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {PrimaryButtonComponent} from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-summary',
  imports: [
    PrimaryButtonComponent
  ],
  template: `
    <div class="bg-slate-100 p-8 rounded-xl shadow-xl border">
      <h2 class="text-2xl mb-6"> Summary </h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <span class="text-lg">Total:</span>
          <span class="text-lg font-bold"> {{ '$ '+ total() }} </span>
        </div>
        <app-primary-button [label]="'Checkout'" (btnClicked)="cartService.removeAllFromCart()"/>
      </div>
    </div>
  `,
  styles: ``
})
export class SummaryComponent {

  cartService = inject(CartService);

  total = computed(() => this.cartService.cart().reduce((acc, product) => acc + product.price, 0));
}
