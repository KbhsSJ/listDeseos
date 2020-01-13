import { Component } from '@angular/core';
import { DesosService } from 'src/app/services/desos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DesosService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Crear',
        handler: (data) => {
          console.log(data);
          if (data.titulo.length === 0) {
            return;
          }

          const listaId = this.deseosService.crearLista(data.titulo)
          // tengo que crear la listas
          this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

        }
      }]
    });

    // await.alert.present();
    alert.present();
  }

}
