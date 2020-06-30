import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/common/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.scss']
})
export class AssignUserComponent implements OnInit {
  request_body: any;
  users: any;
  user_id: any;

  constructor(
    private httpService: HttpServiceService,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadUsers()
  }
  loadUsers() {
    this.httpService.post("auth/list-users.php", this.request_body).
      subscribe(res => {
      this.users =res.data
    })
  }
  submit() {
    this.request_body = {
      todo_id: this.active.snapshot.params['id'],
      user_id: this.user_id
    }
    this.httpService.post('', this.request_body).subscribe(res => {
    console.log(res)
      alert('User assigned !')
       
    })
  }
 

}
