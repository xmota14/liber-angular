import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputDescription } from 'src/app/components/form/form.component';
import { OtherItemsService } from 'src/app/services/other-items/other-items.service';

@Component({
  selector: 'liber-other-items-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public mode: string;
  @Input() public subtitle: string;

  public formGroup: FormGroup;
  public inputDescriptions: InputDescription[];

  constructor(
    public service: OtherItemsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      itemName: this.formBuilder.control('', [Validators.required]),
      itemDescription: this.formBuilder.control('', [Validators.required]),
      barCode: this.formBuilder.control('', [Validators.required]),
    });

    this.inputDescriptions = [
      new InputDescription('itemName', 'Nome', 'text', 'delete'),
      new InputDescription('itemDescription', 'Descrição', 'text', 'delete'),
      new InputDescription('barCode', 'Código de Barras', 'number', 'delete'),
    ];
  }

}
