import { seriesData } from "./data.js";
var seriesTbody = document.getElementById("series");
var totalSeasons = document.getElementById("total-seasons");
renderSeriesInTable(seriesData);
totalSeasons.innerHTML = "".concat(getTotalSeasons(seriesData));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td style=\"color: blue; text-decoration: underline;\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    totalSeasons = totalSeasons / series.length;
    return Math.round(totalSeasons);
}
function SeriesInfo(serie) {
    var serieInfo = document.getElementById('serieInfo');
    if (serieInfo) {
        var cardHtml = "\n      <div class=\"card\">\n      <img src=".concat(serie.image, " class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <a href=").concat(serie.url, ">Mas sobre la serie</a>\n        </div>\n      </div>\n    ");
        serieInfo.innerHTML = cardHtml;
    }
}
var seriesNombres = document.querySelectorAll('#series td:nth-child(2)');
seriesNombres.forEach(function (nombre, index) {
    nombre.addEventListener('click', function () {
        SeriesInfo(seriesData[index]);
    });
});
