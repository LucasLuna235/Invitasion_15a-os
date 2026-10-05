const getRemainTime = deadline =>{
   let now = new Date(),
       remainTime = (new Date(deadline) - now + 1000)/1000,
       remainSeconds = ( '0'+ Math.floor(remainTime % 60)).slice(-2),
       remainMinutes = ( '0'+ Math.floor(remainTime / 60 % 60)).slice(-2),
       remainHours =   ( '0'+ Math.floor(remainTime / 3600 % 24)).slice(-2), 
       remainDays =   Math.floor(remainTime / (3600 * 24)) 
        
    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }   

};

const countdown = (deadline,elem,finalMessage)=>{
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(()=>{
        let t = getRemainTime(deadline);
        el.innerHTML= `     Dias:${t.remainDays} | Horas: ${t.remainHours} | Minutos: ${t.remainMinutes} | Segundos: ${t.remainSeconds}`;
        if(t.remainTime <= 1){
           clearInterval(timerUpdate)
           el.innerHTML = finalMessage; 
        }
    },1000)
}

// console.log(getRemainTime('Oct 08 2026 02:52:55 GMT-0600'));
countdown('Oct 08 2026 14:32:48 GMT-0600','clock','Tiempo terminado')
