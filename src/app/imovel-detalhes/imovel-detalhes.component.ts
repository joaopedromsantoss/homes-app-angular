import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imovel-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './imovel-detalhes.component.html',
  styleUrl: './imovel-detalhes.component.css'
})
export class ImovelDetalhesComponent {

  imovel: Imovel | undefined

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ) {
    const id = this.route.snapshot.params["id"]
    this.imovel = this.imvService.buscarImovelPeloId(id)
  }

  paginaAluguel(){
    const url = `/detalhes/${this.imovel?.id}/aluguel`
    this.rt.navigate([url])
  }

  voltarDetalhes(){
    const url = `/detalhes/${this.imovel?.id}/`
    this.rt.navigate([url])
  }

  paginaFinanciamento(){
    const url = `/detalhes/${this.imovel?.id}/financiamento`
    this.rt.navigate([url])
  }
}
