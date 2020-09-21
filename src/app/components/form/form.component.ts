// angular imports
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// angular material imports
import { MatSnackBar } from '@angular/material/snack-bar';

// project imports
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'liber-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public mode: string;
  @Input() public formGroup: FormGroup;
  @Input() public inputDescriptions: InputDescription[];
  @Input() public service: ApiService;
  @Input() public idFormControlName: string;

  public isCreate: boolean;
  public isRead: boolean;
  public isUpdate: boolean;
  public isDelete: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.setIsMode();

    if (!this.isCreate) {
      this.formGroup.addControl(this.idFormControlName, this.formBuilder.control('', [Validators.required]));
      this.fillFormGroup();
    }

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
      this.service.delete(this.formGroup.get(this.idFormControlName).value).subscribe((response) => {
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

export class InputDescription {

  constructor(
    public name: string,
    public label: string,
    public type: string,
    public icon: string,
  ) { }

}

