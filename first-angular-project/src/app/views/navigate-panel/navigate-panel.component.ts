import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-navigate-panel',
  templateUrl: './navigate-panel.component.html',
  styleUrls: ['./navigate-panel.component.css']
})
export class NavigatePanelComponent implements OnInit {

  categories: Category[] = [];

  constructor(private dataHandler: DataHandlerService) {
  }

  // метод вызывается автоматически после инициализации компонента
  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
    console.log(this.categories);
  }

}
