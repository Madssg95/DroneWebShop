import {Component, HostBinding, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../shared/model/user';
import {nextContext} from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('style.height') height: string;
  model: any = {};
  loginform = new FormGroup({userName: new FormControl(), password: new FormControl()})

  constructor(private auth: LoginService,
              private router: Router) {
    this.height = '100%';


  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginform.value).subscribe(token => {
      if (token) {
        this.router
          .navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/denied');
      }
    });
  }
}
