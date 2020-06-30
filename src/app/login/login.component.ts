import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../common/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any
  password: any
  request_body: { username: any; password: any; };
  constructor(
    private httpService: HttpServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.request_body = {
      username: this.username,
      password: this.password
    }
    this.httpService.post('auth/login.php', this.request_body)
      .subscribe(res => {
      console.log(res);
      this.router.navigate(['todos/list'])
    })
  }

}
