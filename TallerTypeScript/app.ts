
import { Serie } from "./Serie.js";

import { seriesData } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById("series")!;
const totalSeasons: HTMLElement = document.getElementById("total-seasons")!;

renderSeriesInTable(seriesData);

totalSeasons.innerHTML = `${getTotalSeasons(seriesData)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td style="color: blue; text-decoration: underline;">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
                           
    seriesTbody.appendChild(trElement);
  });
}

function getTotalSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    totalSeasons= totalSeasons/series.length
    return Math.round(totalSeasons) ;
  }




function SeriesInfo(serie: Serie) {

  const serieInfo = document.getElementById('serieInfo');

  if (serieInfo) {
    
    const cardHtml = `
      <div class="card">
      <img src=${serie.image} class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href=${serie.url}>Mas sobre la serie</a>
        </div>
      </div>
    `;

    serieInfo.innerHTML = cardHtml;
  }
}


const seriesNombres = document.querySelectorAll('#series td:nth-child(2)');


seriesNombres.forEach((nombre, index) => {
  nombre.addEventListener('click', () => {
    SeriesInfo(seriesData[index]);
  });
});