import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/common/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  request_body
  products: any;
  todos: any;
  complete: any;
  constructor(
    private httpService: HttpServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProducts()
  }
  loadProducts() {
    this.request_body = {
      "name": "blanket",
      "price": "3090",
      "description": "The best blanket for amazing programmers.",
      "category_id": 2,
      "created": "2018-06-01 00:35:07"
    }
    this.httpService.post("/index.php", this.request_body)
      .subscribe(res => {
        console.log(res);
        this.todos = res.uncompleted
        this.complete = res.completed

      })
  }

  addNew() {
    this.router.navigate(['todos/create'])
  }
  assign() {
    this.router.navigate(['todos/assign'])
  }

}
