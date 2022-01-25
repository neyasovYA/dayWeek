let week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

let myDate = new Date().getDay();

for (const iterator of week) {
    if(iterator == 'Воскресенье' || iterator == 'Суббота'){
        document.write((iterator + "<br>").italics());

    }
    else if(iterator == week[myDate]){
        document.write((iterator + "<br>").bold());

    }
    else{
        document.write(iterator + "<br>");

    }
    
}


