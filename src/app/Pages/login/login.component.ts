import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor(private master: MasterService, private router: Router) {}

  onLogin() {
    this.master.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('zomatoUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/foodCategory');
      } else {
        alert(res.message);
      }
    });
  }
}
