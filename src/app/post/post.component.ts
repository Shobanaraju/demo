import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {


  @Input()message!:string;

  msev:any
  childMsg:string='Msg from child';

  outputMsg:string='msg from output via event emitter'


  @Output()mssg=new EventEmitter<string>

  sendMsg(){

    this.mssg.emit(this.outputMsg)

    console.log(this.outputMsg)

  console.log("button clicked")

  }

}
