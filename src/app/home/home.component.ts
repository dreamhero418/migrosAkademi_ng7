import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      let slideCnt=0
      if($( window ).width()>=768){
        slideCnt = 3
      }else{
        slideCnt = 1.65
      }
      $('.carousel').slick({
        
        slidesToShow: slideCnt,
        slidesToScroll: 1.5,
        autoplaySpeed: 2000,
        dots:true,
        useCSS:true
      });
    });
  }

}
