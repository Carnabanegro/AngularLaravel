import { Component } from '@angular/core';
import { FilesService } from './shared/services/files.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public url = "http://127.0.0.1:8000/api/uploadFile"
   public pathProductos = "?productos"
   public urlProductosPath= 'http://127.0.0.1:8000/api/uploadFile';

  uploadedFiles: any[] = [];

  constructor(private filesService: FilesService) {}

  makeJson(event:any) {
    const jsonToSend:any[] = []
    console.log(event)
    event.files.forEach((element:File,index:number) => {
      jsonToSend.push({
        id:index,
        name:element.name,
      })
    });
    this.filesService.subirJson(jsonToSend).subscribe(
      resp => {
        console.log(resp)
      }
    )
  }
      

}
