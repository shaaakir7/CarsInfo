import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shazon';

  ngOnInit(): void {
  //  alert("heloooo megartron"); 

   $(document).ready(function (){
    $(window).on("load", function () {
        setTimeout(function () {
            $("#loaderWrap").fadeOut("slow", function () {
                $("#pageContent").fadeIn("slow");
            });
        }, 5000); 
    });
  });

  }

  // count: number = 0;
  // incrementCount() {
  //   this.count++;
  // }

  // showSpinner: boolean = false;

  // loadData() {
  //   // Implement your data loading logic here
  //   this.showSpinner = true; // Show the spinner while loading data
    
  //   // setTimeout(() => {
  //   //   this.showSpinner = false; 
  //   // }, 2000); 
  // }

// for on load 
  
  

  

}

