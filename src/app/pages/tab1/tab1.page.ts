import { Component } from '@angular/core';
import { DesosService } from 'src/app/services/desos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DesosService,
              private router: Router
    ) {}

    agregarLista(){
      this.router.navigateByUrl('/tabs/tab1/agregar');
    }

}
