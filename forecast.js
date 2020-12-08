//  let key='tv5ZSMKMEU4Wkl12TyMLGkTDHmoii5fp';
let key='bDhsdk3y2TLGmQdfI4nVzu7s3XOeaseG';

 const getCity =async(city)=>{

    const base='http://dataservice.accuweather.com/locations/v1/cities/search';

    const query=`?apikey=${key}&q=${city}`;


    const response =await fetch(base + query);
    if(response.status!==200)
    {
        throw new Error('error found');
    }
    const data=await response.json();
    return data[0];
    console.log('hello');
 };


 const getWeather=async(id)=>{
     const base ='http://dataservice.accuweather.com/currentconditions/v1/';
     const query =`${id}?apikey=${key}`;

     const response =await fetch(base + query);
     if(response.status!==200){
         throw new Error('error found dude')
     }
     const data=await response.json();
     return data[0];
     };



     //testing 
     //testing

//  getCity('Kapilvastu')
//  .then(data=>{
//     return getWeather(data.Key);//capital K okey
//  }).then(data=>{
//      console.log(data);
//  }).catch(err=>{
//      console.log(err.message);
//  });