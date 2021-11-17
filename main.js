const puppeteer = require('puppeteer')
//puppeteer runs a headless browser
let page;

console.log("Before")
//launch browser
const browserOpenpromise = puppeteer.launch({ headless: false });
browserOpenpromise
    .then(function (browser) {
        // console.log("browser Opened");
        //current opened tabs->return in array format
        const pagesArrPromise = browser.pages();
        return pagesArrPromise;
    }).then(function (browserPages) {
        page = browserPages[0]; // catched homepage
        let gotoPromise = page.goto("https://www.google.com/"); // link opens
        return gotoPromise;
    }).then(function () {
        //waiting  for the element to appear on the page
        let elementwaitPromise = page.waitForSelector("input[type='text']", { visible: true });
        return elementwaitPromise;
    })
    .then(function () {
        // console.log("Reached google ho  me page");git init
        
        let keywillsendPromise = page.type("input[type='text']", "pepcoding");
        return keywillsendPromise;
    }).then(function () {
        // /press enter
        let enterwillbepressed = page.keyboard.press("Enter");
        return enterwillbepressed;
    }).then(function () {
        //waiting for the element to appaer on the page
        let elementwaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
        return elementwaitPromise;
    }).then(function () {
        // console.log("Reached google ho  me page");
        let keywillsendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
        return keywillsendPromise;
    }).then(function () {
        let elementwaitPromise = page.waitForSelector(".active .collection >.center", { visible: true });
        return elementwaitPromise;
    }).then(function(){
        let keywillsendPromise = page.click(".active .collection >.center");
        return keywillsendPromise;
    })
    .catch(function (err) {
        console.log(err);
    })
console.log("After")