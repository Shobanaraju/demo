import { Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'demo';
  // msg!:string

  // reMsg:any;

  bool:boolean=false;
  // boola:boolean=false;
  // boolc:boolean=true;

  post:Array<any>

  // disabled!:boolean
  constructor(private postservice:UserService) { 


    this.post= postservice.postList
    console.log(this.post)
  }

  data:any

  new(){
    this.data =
      { "id":3, "PostLis":"Post 3"}
    
    this.postservice.addnew(this.data)
    console.log(this.postservice.postList)

  }

  // textValue:string="post title"
  // textAreaValue:string="post details"
  


  // imgurl:string='https://www.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_37741252.htm'

  
  

  // parentMsg:string='msg from parent'

  // @ViewChild(PostComponent)message!:any
 


  // ngAfterViewInit(){

  //   // this.msg=this.message.childMsg

  //   console.log(this.message)
  //   this.msg=this.message.childMsg;

   

  // }

  // receiveMsg(msg:any){

  //   this.reMsg=msg

  // }

  onKeyup(){
    this.bool=true;
    console.log("values entered")
    
  }

  // onKeyupArea(){
  //   this.boola=true;
  //   console.log(this.textAreaValue)
  // }

  // addColor(){
  //   console.log("add color")
  // }

  // onCheckboxChange($event:any){
  //   console.log($event)


  // }

  // postArray:Array<any>=['post 1','post 2','post 3','post 4','post 5']

  // objArray:Array<any>=[
  //   {'id':1,'postList':'post 1'},
  //   {'id':2,'postList':'post 2'},
  //   {'id':3,'postList':'post 3'},
  //   {'id':4,'postList':'post 4'}
  // ]

  // addNew(){

   
    
  //   this.objArray.push({'id':5,'postList':'post 5'})
  // }

  // onDelete(post:any){

  //   console.log("======delete==========")
  //   let index=this.objArray.indexOf(post);
  //   this.objArray.splice(index,1);

  // }

  name!:string
  email!:string
  address!:string
  no:string="1234"

  user:Array<any>=["Anniyam","Private","Limited",]


  userDetails:Array<any>=[]

  // onKeyup(){
  //   console.log("values entered")
  // }

  onSave(){

    

   
    this.userDetails.push(
      {"name" : this.name, 
      "email": this.email ,
      "address" :this.address}
      
    )

    console.log(this.userDetails)

  }
  onDelete(index: any){
    this.userDetails.splice(index,1)

  }

}


