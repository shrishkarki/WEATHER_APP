//Dom manupulation

const cityForm= document.querySelector('form');
const card= document.querySelector('.card'); 
const detail=document.querySelector('.details');

const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img')




const updateCity=async(city)=>{
console.log(city);
 const cityReport= await getCity(city);

 const weatherReport=await getWeather(cityReport.Key);//capital key
  
 //when multiple function are present in asyn function then we have to return object here 

 return{
cityReport:cityReport,
weatherReport:weatherReport
 };

//here property & value are same in object so we can use  object shorthand Notation

// return{
//     cityReport,weatherReport};
 };





// update data

const updateData=(data)=>{
      console.log(data);
 const cityReport=data.cityReport;
 const weatherReport=data.weatherReport;

 //destructure properties

//  const {cityReport,weatherReport}=data;


 
// const {cityReport,weatherReport}=data;

    detail.innerHTML=`
    <h5 class="my-3">${cityReport.EnglishName}</h5>
    <div class="my-3">${weatherReport.WeatherText}</div>
    
    <div class="display-4 my-4">
    <span>${weatherReport.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
         </div>   
    `;
   

    //  card.setAttribute('src',timeSrc);

    let timeSrc=null;

    if(weatherReport.IsDayTime)
    {
        timeSrc='day.svg';
    }
    else{
        timeSrc='night.svg';
    }
    time.setAttribute('src',timeSrc);


    //updating the night/day & icon image
    const iconSrc=`icons/${weatherReport.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    //remove the d-none class if present

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');

}


};











cityForm.addEventListener('submit',e=>{
e.preventDefault();




//here name=city in form

//get city value
const city=cityForm.city.value.trim();
cityForm.reset();
// console.log(city);




//update the ui with new city
//update the ui with new city
//update the ui with new city

updateCity(city)
.then(data=>updateData(data))
.catch(err=>{console.log(err);});

});