import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/common/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  task_name: any
  price: string
  description: string
  category: string
  request_body: {};
  status
  
  constructor(
    private httpService: HttpServiceService,
    private router: Router
  ) {

   }

  ngOnInit() {
  }
  submitCategory() {
    this.request_body = {
      item: this.task_name, 
      todoStatu: Number(this.status),
      category_id: Number(this.category),
     
    }
    console.log(this.request_body);
    
    this.httpService.post('create.php', this.request_body)
      .subscribe(res => {
        console.log(res);
        
        if (res.status === 200) {
         
          alert(res.message)
          this.router.navigate(['todos/list'])
        } else {
          alert(res.message)
     }
      
    })
  }
}
