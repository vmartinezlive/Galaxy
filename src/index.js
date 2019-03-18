import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {GalaxyAge} from "./scripts.js";


$(document).ready(function(){
  $("form#input-age").submit(function(event) {
      event.preventDefault();
      const inputAge =  $("id#age").val();
      const userGalaxyAge = new GalaxyAge();
      $("#result").text(userGalaxyAge);
    });
  });
