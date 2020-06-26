import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputDescription } from 'src/app/components/form/form.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'liber-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public mode: string;
  @Input() public subtitle: string;

  public formGroup: FormGroup;
  public inputDescriptions: InputDescription[];

  constructor(
    public service: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      cpf: this.formBuilder.control('', [Validators.required, Validators.pattern(/\d{11}/)]),
      phone: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required]),
  });

    this.inputDescriptions = [
      new InputDescription('name', 'Nome', 'text', 'delete'),
      new InputDescription('cpf', 'CPF (somente números)', 'text', 'delete'),
      new InputDescription('phone', 'Telefone', 'number', 'delete'),
      new InputDescription('email', 'E-mail', 'email', 'delete'),
      new InputDescription('password', 'Senha', 'password', 'delete')
    ];
  }

}
