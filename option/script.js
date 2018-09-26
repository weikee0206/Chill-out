const test = browser.storage.local.get("monster")
  test.then(getStorageValue, onError);

  function getStorageValue(item){

      const delayInMinutes = item.monster.mycolor;
      const catgifs = item.monster.catgifs;
      const setting = item.monster.setting;
          if(delayInMinutes != null ) {
     document.getElementById('myColor').value = delayInMinutes;
    } else {
        console.log("empty")
    }

    if(setting != null ) {
        string = 'radio'+setting;
        console.log(string);
        document.getElementById(string).checked = true;
    }

}

function onError(error) {
  console.log(error)
}





document.getElementById('myChoice').addEventListener('click', function(){
    if(document.getElementById('radio1').checked)
{
 CATGIFS = "http://chilloutandwatchsomecatgifs.com/";
 Setting = '1';
}
else if(document.getElementById('radio2').checked)
{
   CATGIFS = "http://www.chillingvibes.com/";
    Setting = '2';

}
else if(document.getElementById('radio3').checked)
{
 CATGIFS = "http://myfresh.my/OSD/landscapeGif.gif";
  Setting = '3';

}



    alert("You have entered "+document.getElementById('myColor').value+" minute(s) to chill out!");

        delayInMinutes = Number(document.getElementById('myColor').value);
        var monster = {
  mycolor: delayInMinutes,
  catgifs: CATGIFS,
  setting: Setting
}
    browser.storage.local.set({monster})


})