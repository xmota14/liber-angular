import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import { InputDescription } from 'src/app/components/form/form.component';

@Component({
  selector: 'liber-book-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public mode: string;
  @Input() public subtitle: string;

  public formGroup: FormGroup;
  public inputDescriptions: InputDescription[];

  constructor(
    public service: BookService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      author: this.formBuilder.control('', [Validators.required, Validators.max(35), Validators.pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)]),
      barCode: this.formBuilder.control('', [Validators.required]),
      volume: this.formBuilder.control('', [Validators.required]),
      edition: this.formBuilder.control('', [Validators.required]),
      publishedBy: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
    });

    this.inputDescriptions = [
      new InputDescription('title', 'Título', 'text', 'delete'),
      new InputDescription('author', 'Autor', 'text', 'delete'),
      new InputDescription('barCode', 'Código de Barras', 'number', 'delete'),
      new InputDescription('volume', 'Volume', 'number', 'delete'),
      new InputDescription('edition', 'Edição', 'number', 'delete'),
      new InputDescription('publishedBy', 'Editora', 'text', 'delete'),
      new InputDescription('description', 'Descrição', 'text', 'delete'),
    ];
  }

}
