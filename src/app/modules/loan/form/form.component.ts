import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputDescription } from 'src/app/components/form/form.component';
import { LoanService } from 'src/app/services/loan/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';
import { PeopleService } from 'src/app/services/people/people.service';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'liber-loan-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public title = 'Cadostro de Empréstimos';
  @Input() public subtitle: string;
  @Input() public mode: string;

  public formGroup: FormGroup;
  public inputDescriptions: InputDescription[];
  public idFormControlName = '_id';
  public users: any[];
  public persons: any[];
  public books: any[];
  public isCreate: boolean;
  public isRead: boolean;
  public isUpdate: boolean;
  public isDelete: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: LoanService,
    private userService: UserService,
    private peopleService: PeopleService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {


    this.formGroup = this.formBuilder.group({
      user: this.formBuilder.control('', [Validators.required]),
      person: this.formBuilder.control('', [Validators.required]),
      book: this.formBuilder.control('', [Validators.required]),
      loanDate: this.formBuilder.control('', [Validators.required]),
    });

    this.setIsMode();

    if (!this.isCreate) {
      this.formGroup.addControl(this.idFormControlName, this.formBuilder.control('', [Validators.required]));
      this.fillFormGroup();
    }

    this.fillSelects();

    console.log(this.formGroup.value);
  }

  private setIsMode(): void {
    this.isCreate = (this.mode === 'create');
    this.isRead = (this.mode === 'read');
    this.isUpdate = (this.mode === 'update');
    this.isDelete = (this.mode === 'delete');
  }

  private fillFormGroup() {
    const paramID = this.route.snapshot.params.id;
    this.service.read(paramID).subscribe((response) => {
      console.log(response);
      this.formGroup.patchValue(response.data);
    });
  }

  private fillSelects() {
    this.userService.list().subscribe((response) => {
      console.log(response);
      // @ts-ignore
      this.users = response.data;
    });
    this.peopleService.list().subscribe((response) => {
      console.log(response);
      // @ts-ignore
      this.persons = response.data;
    });
    this.bookService.list().subscribe((response) => {
      console.log(response);
      // @ts-ignore
      this.books = response.data;
    });
  }

  public onSubmit() {

    if (this.isCreate) {
      this.service.create(this.formGroup.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(['..'], { relativeTo: this.route });
      }, (response) => {
        console.log(response);
        this.snackBar.open(response.error.error, '', {
          duration: 2000,
        });
      });
    }

    if (this.isUpdate) {
      this.service.update(this.formGroup.get(this.idFormControlName).value, this.formGroup.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(['../..'], { relativeTo: this.route });
      }, (response) => {
        console.log(response);
        this.snackBar.open(response.error.error, '', {
          duration: 2000,
        });
      });
    }

    if (this.isDelete) {
      this.service.delete(this.formGroup.value.id).subscribe((response) => {
        console.log(response);
        this.router.navigate(['../..'], { relativeTo: this.route });
      }, (response) => {
        console.log(response);
        this.snackBar.open(response.error.error, '', {
          duration: 2000,
        });
      });
    }

  }

}
