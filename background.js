/*
DELAY is set to 6 seconds in this example. Such a short period is chosen to make
the extension's behavior more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less than a minute. In Chrome:

* if you install this extension "unpacked", you'll see a warning
in the console, but the alarm will still go off after 6 seconds
* if you package the extension and install it, then the alarm will go off after
a minute.

var CATGIFS = http://chilloutandwatchsomecatgifs.com/
*/



var CATGIFS = 'http://chilloutandwatchsomecatgifs.com/';
var delayInMinutes = '0.1';

function setGif(variable,item) {
        const catgifs = item.monster.catgifs;
    window[variable] = catgifs;
}

function setDelay(variable,item) {
        const mycolor = item.monster.mycolor;
    window[variable] = mycolor;
}



const test = browser.storage.local.get("monster")
  test.then(setupStart, onError);

function setupStart(item){
  setGif("CATGIFS",item);
  setDelay("delayInMinutes",item);
  startAlarm(delayInMinutes);

}

function getStorageValue(item){
  setGif("CATGIFS",item);
  setDelay("delayInMinutes",item);
}

function onError(error) {
  console.log(error)
}



//document.getElementById('myButton').addEventListener('click', function(){
  //  document.getElementById('myLabel').textContent = "YAY!";
//})


function startAlarm(delayInMinutes){
browser.alarms.create("testAlarm", {delayInMinutes});
  console.log("Installed");
}

/*
On alarm, show the page action.
*/
function restartAlarm(){
var clearAlarms = browser.alarms.clearAll();
clearAlarms.then(onClearedAll);

const restart = browser.storage.local.get("monster")
  restart.then(getStorageValue, onError);
  console.log(CATGIFS);
  console.log(delayInMinutes);
  browser.alarms.create("testAlarm", {delayInMinutes});

}
      
function onClearedAll(wasCleared) {
  console.log(wasCleared);  // true/false
}


browser.alarms.onAlarm.addListener(handleAlarm);
function handleAlarm(alarmInfo) {
  console.log("on alarm: " + alarmInfo.name);
    action();

  restartAlarm();
}

/*
On page action click, navigate the corresponding tab to the cat gifs.
*/

// browser.runtime.onInstalled.addListener(() => {
//   browser.tabs.update({url: CATGIFS});
// });
//browser.tabs.update({url: CATGIFS});
function action(){
  var activeTabPromise = browser.tabs.query({active: true, currentWindow: true});
      activeTabPromise.then((tabs) => {

            if (tabs[0].url != CATGIFS)
  {
  browser.tabs.create({url: CATGIFS});
  console.log(tabs[0].url);

} else {
  console.log("Same url");
}
      });
}

browser.pageAction.onClicked.addListener(() => {
  action();
});



