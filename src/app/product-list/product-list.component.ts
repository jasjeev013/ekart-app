import { Component } from '@angular/core';
import * as products from '../../assets/MOCK_DATA.json'
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  data: any = products;
}
