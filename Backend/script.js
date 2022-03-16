const pup = require("puppeteer");
const fileSystem = require('fs');
let website_link = "https://www.mohfw.gov.in/";

const basicCoronaData = 'basicCoronaData.json';
const stateDataFile = 'stateData.json';

async function getCoronaData() {
    let basicCoronaDetail = [];
    let stateCoronaDetail = [];
  let browser = await pup.launch({
    headless: true,
    defaultViewport: false,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  let tab = pages[0];
  await tab.goto(website_link);
  let li = await tab.$$(
    "#main-content #site-dashboard .container .row .col-xs-12 .col-xs-8.site-stats-count ul li .mob-hide"
  );
  let liData = [];

  for (let i = 0; i < li.length; i++) {
    let temp = await tab.evaluate(function (ele) {
      return ele.textContent;
    }, li[i]);
    liData.push(temp);
  }
  for (let i = 0; i < liData.length; i++) { 
    if(i%2 != 0) basicCoronaDetail.push(liData[i]);
  }

  let total = await tab.$(
    "#main-content #site-dashboard .container .row .col-xs-12 .col-xs-8.site-stats-count.sitetotal .fullbol .coviddata"
  );
  let temp1 = await tab.evaluate(function (ele) {
    return ele.textContent;
  }, total);
  console.log(temp1);
  basicCoronaDetail.push(temp1);
  fileSystem.writeFile(basicCoronaData,JSON.stringify(basicCoronaDetail),function(){
      console.log("Written Successfully1")
  });
  console.log("1st");
  await tab.waitForSelector(
    "#main-content #site-dashboard .container .row .col-xs-12 .col-xs-2.btns ul li .trigger-state"
  );
  console.log("2nd");
  await tab.click('a[href="#state-data"]');
  console.log("3rd");
  await tab.waitForSelector(
    "#main-content #state-data .container .row .col-xs-12 .data-table.table-responsive .statetable.table.table-striped"
  );
  console.log("4th");
 
  let nodeChildren = await tab.$$eval("tbody tr", (uiElement) => {
    let row = uiElement;
    let data = row.map((val, ind) => {
      let td = Array.prototype.slice.call(val.childNodes);
      return td.filter((val, ind) => {
        return ind == 1 || ind == 2 || ind == 4 || ind == 6;
      }).map((val,ind)=>{return val.textContent});
    });
    return data;
  });
  nodeChildren = nodeChildren.slice(0,nodeChildren.length-6);
  for(let i=0;i<nodeChildren.length;i++){
    let tempObj = {};
    tempObj['state'] = nodeChildren[i][0];
    tempObj['Active'] = nodeChildren[i][1];
    tempObj['Discharged'] = nodeChildren[i][2];
    tempObj['Deaths'] = nodeChildren[i][3];
    stateCoronaDetail.push(tempObj);
  }

  fileSystem.writeFile(stateDataFile,JSON.stringify(stateCoronaDetail),function(){
    console.log("Written Successfully2")
  });
  browser.close();
}

module.exports = getCoronaData;
