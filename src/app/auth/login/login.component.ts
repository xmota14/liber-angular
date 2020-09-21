import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'liber-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AuthService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });

  }

  public onSubmit() {
    this.service.login(this.formGroup.value).subscribe((response) => {
      localStorage.setItem('token', 'Bearer ' + response.token);
      this.router.navigate(['/modules'], { relativeTo: this.route });
    }, (response) => {
      this.snackBar.open(response.error.message, '', {
        duration: 2000,
      });
    });
  }

}
