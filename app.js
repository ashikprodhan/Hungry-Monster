
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click',function(){
    const input = document.getElementById('input').value;
    foodsName(input);
})
const foodsName=input =>{

 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
 .then(res => res.json())
 .then(data => {
    displayFoodItem(data.meals);
 })
}

const displayFoodItem = foodName => {
 const foodDiv =document.getElementById('food');
 
foodName.forEach(food => {
    const div=document.createElement('div');
         div.className='food';
       
         const foodInfo=` <h3>${food.strMeal}</h3>
         <img src = "${food.strMealThumb}">
     
      
         `;
         div.innerHTML=foodInfo;
         foodDiv.appendChild(div);
});
}
// const displayFoodDetail =name =>{
//     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))

// }



/* button

   //  <button onclick="displayFoodDetail(${food.strMeal})"> details</button>
*/