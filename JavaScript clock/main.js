var diallines = document.getElementsByClassName('diallines');
       var clockE1 = document.getElementsByClassName('clock')[0];

       for( var i = 1; i < 60; i++ ){
           clockE1.innerHTML += "<div class='diallines'></div>";
           diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
       }
       function clock(){
           var weekday = new Array(7),
           d = new Date(),
           h = d.getHours(),
           m = d.getMinutes(),
           s = d.getSeconds(),
           date = d.getDate(),
           month = d.getMonth() + 1,
           year = d.getYear(),

           hDeg = h * 30 + m * (360/720),  
           mDeg = m * 30 + s * (360/720),
           sDeg = s * 6,

           hE1 = document.querySelector('.hour-hand'),
           mE1 = document.querySelector('.minute-hand'),
           sE1 = document.querySelector('.second-hand'),
           dateE1 = document.querySelector('.date'),
           dayE1 = document.querySelector('.day');

           weekday[0] = "Sunday";
           weekday[0] = "Monday";
           weekday[0] = "Tuesday";
           weekday[0] = "Wednesday";
           weekday[0] = "Thrusday";
           weekday[0] = "Friday";
           weekday[0] = "Saturday";
           
           var day = weekday[d.getDay()];
           hE1.style.transform = "rotate("+hDeg+"deg)";
           mE1.style.transform = "rotate("+mDeg+"deg)";
           sE1.style.transform = "rotate("+sDeg+"deg)"; 
           dateE1.innerHTML = date+"/"+month+"/"+year;
           dayE1.innerHTML = day;

        }

        setInterval("clock()", 100);
    