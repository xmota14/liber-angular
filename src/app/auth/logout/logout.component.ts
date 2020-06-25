import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'liber-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AuthService
  ) { }

  ngOnInit(): void {
    this.service.logout().subscribe((reponse) => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }
}
