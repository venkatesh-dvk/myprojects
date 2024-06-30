const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultcontainer = document.getElementById("result");
const cn = document.getElementById("cn");
const cc = document.getElementById("cc");
const aqi = document.getElementById("aqi");
const co = document.getElementById("co");
const no2 = document.getElementById("no2");
const o3 = document.getElementById("o3");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
   const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
   const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6425e0467cmsh523d8cb8157f1c3p196c88jsn9a5e631f3d14',
		'x-rapidapi-host': 'air-quality.p.rapidapi.com'
	}
  };
  fetch(url, options)
   .then(response => response.json())
   .then(result => {
      console.log(result);
      let readings = result.data[0];
      console.log(readings);
      cn.innerHTML = result.city_name;
      cc.innerHTML = result.country_code;
      aqi.innerHTML = readings.aqi;
      co.innerHTML = readings.co;
      no2.innerHTML = readings.no2;
      o3.innerHTML = readings.o3;
      resultcontainer.style.display = 'flex';

    })

});