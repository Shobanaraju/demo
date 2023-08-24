import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  

  constructor() { }

  postList:Array<any>=[
    { "id":1, "PostLis":"Post 1"},
    { "id":2, "PostLis":"Post 2"},

]

addnew(data:any){
  this.postList.push(data)
  console.log(data)
}


}
