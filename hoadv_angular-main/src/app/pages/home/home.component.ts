import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 productService = inject(ProductService);
 productList:any = [];
 ngOnInit() : void{
    this.productService
    .getProductList()
    .subscribe((products)=>(this.productList = products));
 }
}
