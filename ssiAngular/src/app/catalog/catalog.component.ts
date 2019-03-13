import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];

  selectedItem: Item;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  onSelect(item: Item) {
    this.selectedItem = item;
  }

}
