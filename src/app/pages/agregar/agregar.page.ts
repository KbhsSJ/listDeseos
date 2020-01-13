import { Component, OnInit } from '@angular/core';
import { DesosService } from '../../services/desos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: '';

  constructor(
    private deseosService: DesosService,
    private route: ActivatedRoute) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.item.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.item
      .filter(itemdata => !itemdata.completado)
      .length;
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.deseosService.guardarStorage();
    console.log(this.deseosService.listas);
  }

}
