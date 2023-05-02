// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

d3.json(
  'https://raw.githubusercontent.com/angelrb91/08MBID---Visualizacion-de-Datos/main/Trabajo%20practico/Dataset/sueldo_medio_nivel.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#grafico2')
      .data(data)
      .type('bar')
      .id('experience_level')
      .x('year')
      .y('salary_in_usd')
      .draw();
  }
);
