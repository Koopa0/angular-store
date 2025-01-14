import {Injectable, signal} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  getCart(){
    return this.cart();
  }

  addToCart(product: Product) {
    const exists = this.cart().some(p => p.id === product.id);

    if (!exists) {
      this.cart.set([...this.cart(), product]);
    }
  }

  removeFromCart(id: number){
    this.cart.set(this.cart().filter(p => p.id !== id));
  }

  removeAllFromCart(){
    this.cart.set([]);
  }

  constructor() { }
}
