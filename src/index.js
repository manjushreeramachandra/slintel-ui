import _ from 'lodash';
import './style.scss';
var json = require("./config/content.json")
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

 // dynamic data binding from json
for (let key in json){
  if(json.hasOwnProperty(key)){
    document.getElementById(key).innerHTML = json[key];
  }
} 

//fixed header
  var fixHeader = ()=>{
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  //function to scroll the side bar up when we are in the bottom of the page
  var scrollSidebar = (event) =>{
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && document.getElementById("side-nav").scrollTop !== 0) {
      document.getElementById("side-nav").scrollTop = 0;
    }  
    };
    window.onscroll = function() {
      scrollSidebar();
      fixHeader();
    };


