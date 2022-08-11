import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  employeename=""
  salary=""
  designation=""
  address=""
  employeecode=""

  valueread=()=>{
    let data={
      "employeename":this.employeename,
      "salary":this.salary,
      "designation":this.designation,
      "address":this.address,
      "employeecode":this.employeecode
    }
    this.api.addemployee(data).subscribe(
      (Response)=>{
        console.log(Response)
        alert(Response)

        this.employeecode=""
        this.employeename=""
        this.designation=""
        this.address=""
        this.salary=""
      }
    )
  }

}
