import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      let slickCnt = 0
      if($(window).width>768){
        slickCnt=3
      }else{
        slickCnt=1
      }
      $('.carousel').slick({
        centerPadding:50,
        slidesToShow: slickCnt,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots:true,
        useCSS:true
      });

      // $('.slick-active').css('transform','scale(1.1)')

      
    });
  }

}
