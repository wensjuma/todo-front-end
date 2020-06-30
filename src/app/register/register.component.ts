import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../common/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  request_body: { username: any; password: any; };
  username: any
  password
  re_password
  constructor(private httpService: HttpServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  register() {
    this.request_body = {
      username: this.username,
      password: this.password
    }
    this.httpService.post('auth/register.php', this.request_body)
      .subscribe(res => {
        console.log(res);
        alert(res.message)
        this.router.navigate(['/'])
      })
  }
}
