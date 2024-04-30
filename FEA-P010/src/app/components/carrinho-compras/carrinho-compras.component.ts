import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Item } from '../../models/item.model';
import { ShoppingService } from '../../services/shopping.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carrinho-compras',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './carrinho-compras.component.html',
  styleUrl: './carrinho-compras.component.css'
})
export class CarrinhoComprasComponent implements OnInit {
  itensNoCarrinho: Item[] = []

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.itensNoCarrinho = this.shoppingService.getItensNoCarrinho();
  }

  removerItemDoCarrinho(item: Item) { 
    this.shoppingService.removerItemDoCarrinho(item);
  }
}
