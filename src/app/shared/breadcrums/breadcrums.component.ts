import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnInit {

  titulo: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta) { 
   
    this.getDataRoute().subscribe( data =>{
      // console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle( this.titulo);

      const metaTag: MetaDefinition = { // Para crear descripción el las páginas cuando se busque en Google
        name: 'description', 
        content: this.titulo
      };

      this.meta.updateTag( metaTag ); // Agregamos el metatag al HMTL
    });
  }

  ngOnInit(): void {
  }

  getDataRoute(){
   return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild == null ),
      map( (event: ActivationEnd) => event.snapshot.data)
    );
  }

}
