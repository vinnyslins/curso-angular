import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() { }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const index = this.coracoes.length - this.tentativas - 1;
      this.coracoes[index].cheio = false;
    }
  }

  ngOnInit() {
  }
}
