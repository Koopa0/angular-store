import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-delete-button',
  imports: [],
  template: `
    <button class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class DeleteButtonComponent {

  label = input('')

  btnClicked = output()
}
