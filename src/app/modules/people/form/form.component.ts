import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputDescription } from 'src/app/components/form/form.component';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'liber-people-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public mode: string;
  @Input() public subtitle: string;

  public formGroup: FormGroup;
  public inputDescriptions: InputDescription[];

  constructor(
    public service: PeopleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      phone: this.formBuilder.control('', [Validators.required]),
      class: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      cpf: this.formBuilder.control('', [Validators.required]),
    });

    this.inputDescriptions = [
      new InputDescription('name', 'Nome', 'text', 'delete'),
      new InputDescription('cpf', 'CPF', 'text', 'delete'),
      new InputDescription('phone', 'Telefone', 'number', 'delete'),
      new InputDescription('class', 'Curso', 'text', 'delete'),
      new InputDescription('email', 'E-mail', 'email', 'delete'),
    ];
  }

}
