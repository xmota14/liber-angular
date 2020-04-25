import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputDescription } from 'src/app/components/form/form.component';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'liber-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
