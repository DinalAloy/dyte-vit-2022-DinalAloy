import fetch from "node-fetch";
import fs from 'fs';
import csv from 'csv-parser';
import Table from "cli-table";
import request from "request";

import compareVersions from 'compare-versions';
var links = [];
var out =[];
var table = new Table({
    head: ['Name', 'Repo','Version','Version_Satisfied'], 
    colWidths: [100,100,100,100]
});
export default (filename,depend, options) => {
    var links = [];
var out =[];
var table = new Table({
    head: ['Name', 'Repo','Version','Version_Satisfied']
});
    fs.createReadStream('input.csv')
  .pipe(csv({delimiter: ':'}))
  .on('data', function (row) {
    var link = row.Repo;
    var name = row.Name;
    var x = depend.split("@");
    var dep = x[0];
    var ver = x[1];
    var i=0;
    var s=link.replace("github.com","raw.githubusercontent.com")
    s= s+ "/master/package.json";
    links.push(s);
    request(s, function (error, response, body) {
//   console.log((JSON.parse(body)).dependencies[dep]);
  var a = (JSON.parse(body)).dependencies[dep];
  if(compareVersions(a,ver)>=0)
  {
    table.push([name,link,a,true]);
    
  } 
  else{
    table.push([name,link,a,false]);
     
 }
    console.log(table.toString());


});


}).on('end', function () {
    // console.log(table.toString());
    
    })

// for(let link in links){
//     console.log(link);
//     request(link, function (error, response, body) {
//         console.log(response.statusCode);
//   if (!error && response.statusCode == 200) {
//      var importedJSON = JSON.parse(body);
//      console.log("hi");
//      console.log(importedJSON);
//   }
// })
 
// }
};

