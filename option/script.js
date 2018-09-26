const getItem = browser.storage.local.get('mycolor');
getItem.then(response => {
    const delayInMinutes = response.mycolor;
    if(delayInMinutes != null ) {
     document.getElementById('myColor').value = delayInMinutes;
    } else {
    	console.log("empty")
    }
})

document.getElementById('myChoice').addEventListener('click', function(){
    alert("You have entered "+document.getElementById('myColor').value+" minute(s) to chill out");

    	delayInMinutes = Number(document.getElementById('myColor').value);
    browser.storage.local.set({mycolor: delayInMinutes})
})//123