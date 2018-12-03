import {Component, HostBinding, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('style.height') height: string;

  loginGroup: FormGroup;
  constructor(private auth: LoginService,
              private router: Router) {
    this.height = '100%';
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      remember: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginGroup.value).subscribe(token => {
      if (token) {
        this.router
          .navigateByUrl('/');
      } else {

      }
    });
  }

}
