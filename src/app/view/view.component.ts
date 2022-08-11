import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api:ApiService) {
    this.displaydata() 
  }
   displaydata=()=>{
    this.api.fetchemployee().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[]

  deletedata=(id:any)=>{
    this.api.deleteemployee(id).subscribe(
      result => {
        // Handle result
        console.log(result)
        this.displaydata()
      },
      error => {
        console.log("error")
        this.displaydata()
      },
      () => {
        // No errors, route to new page
        this.displaydata()
      }
    )
  }
}
