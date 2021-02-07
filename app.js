
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
 foodDiv.innerHTML='';
 
foodName.forEach(food => {
    const div=document.createElement('div');
         div.className='food';
         console.log(food);
        
         const foodInfo=` <h3>${food.strMeal}</h3>
         <img onclick="displayFoodDetails('${food.strMeal}')" src = "${food.strMealThumb}"> `;
         div.innerHTML=foodInfo;
         foodDiv.appendChild(div);
        //  displayFoodDetail(name.strMeal)
});
// input.value='';
}
const displayFoodDetails= name =>{
    // console.log(name);
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals[0]))


};
const renderFoodInfo = food =>{
    console.log(food);
    const foodDiv=document.getElementById('foodDetail');
    foodDiv.innerHTML=`<img src="${food.strMealThumb}">
    <h3>Ingredient</h3>
    <p>${food.strIngredient1}</p>
    <p>${food.strIngredient2}</p>
    <p>${food.strIngredient3}</p>
    <p>${food.strIngredient4}</p>
    <p>${food.strIngredient5}</p>
     `;

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