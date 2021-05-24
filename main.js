// API key from OpenWeather
const apiKey = "Y2b5ff1a3850dba5620b735e5d5710108";
const inputVal = input.value;

const form = document.querySelector(".top-banner form");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
  });

  const listItems = list.querySelectorAll(".ajax-section .city");
const listItemsArray = Array.from(listItems);
 
if (listItemsArray.length > 0) {
  const filteredArray = listItemsArray.filter(el => {
    let content = "";

    if (inputVal.includes(",")) {
    
      if (inputVal.split(",")[1].length > 2) {
        inputVal = inputVal.split(",")[0];
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      } else {
        content = el.querySelector(".city-name").dataset.name.toLowerCase();
      }
    } else {

      content = el.querySelector(".city-name span").textContent.toLowerCase();
    }
    return content == inputVal.toLowerCase();
  });
   
  if (filteredArray.length > 0) {
    msg.textContent = `You already know the weather for ${
      filteredArray[0].querySelector(".city-name span").textContent
    } ...otherwise be more specific by providing the country code as well`;
    form.reset();
    input.focus();
    return;
  }
}
