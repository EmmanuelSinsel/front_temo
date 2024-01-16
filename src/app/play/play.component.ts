import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  code: string = ""
  output: string = ""
  error: string = ""

  constructor(private Api: ApiService){}

  title = 'playground';

  compilar(){
    this.Api.compilar(this.code).subscribe(
      (res: any) => {
        console.log(res)
        this.output = res['return']
        this.error = res['error']
        if(this.error != ''){
          this.output=this.error
        }
      },
      (error) => {
      }
    );

  }
}
