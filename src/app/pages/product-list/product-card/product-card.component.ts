import {Component, inject, input} from '@angular/core';
import {Product} from '../../../models/product.model';
import {PrimaryButtonComponent} from '../../../components/primary-button/primary-button.component';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [
    PrimaryButtonComponent
  ],
  template: `
    <article
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <!-- 商品圖片區塊 -->
      <div class="flex justify-center">
        <img
          [src]="product().image"
          [alt]="product().title"
          class="w-[200px] h-[100px] object-contain"
          loading="lazy"
        />
      </div>

      <!-- 商品資訊區塊 -->
      <div class="flex flex-col">
        <h2 class="text-md font-bold">{{ product().title }}</h2>
        <span class="text-sm text-gray-600">{{ '$'+ product().price }}</span>
        <app-primary-button
          [label]="'Add to cart'"
          class="mt-3"
          (btnClicked)="cartService.addToCart(product())"
          [disabled]="!product().stock"
        />
      </div>

      <!-- 庫存狀態標籤 -->
      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class.text-green-500]="product().stock"
        [class.text-red-500]="!product().stock"
        role="status"
      >
        @if (product().stock) {
          {{ product().stock }} left } @else { Out of stock }
      </span>
    </article>
  `
})
export class ProductCardComponent {

  cartService = inject(CartService);
  product = input.required<Product>();
}
