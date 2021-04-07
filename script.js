const dayEle= document.getElementById("DaysEle");
const hourEle= document.getElementById("HoursEle");
const minEle= document.getElementById("MinutesEle");
const secsEle= document.getElementById("SecondsEle");


function getTime(){
    var newYear = new Date("1 jan 2022");
    const today = new Date();
    const totSeconds =(newYear-today)/1000;
    const days =  Math.floor(totSeconds/3600/24);
    const hours = Math.floor(totSeconds/3600)%24;
    const minutes= Math.floor(totSeconds/60)%60;
    const seconds=Math.floor(totSeconds%60);

    dayEle.innerHTML=  addZero(days);
    hourEle.innerHTML= addZero(hours);
    minEle.innerHTML=  addZero(minutes);
    secsEle.innerHTML= addZero(seconds);
  }


  getTime();
  setInterval(getTime,1000);

  function addZero(time){
    return time < 10 ? ("0"+time) : time;
  }