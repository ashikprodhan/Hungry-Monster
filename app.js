
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    foodsName(input);
})
const foodsName = input => {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
        .then(res => res.json())
        .then(data => {
            displayFoodItem(data.meals);
        })

        /* code for error handling */
        .catch(err => {
            alert('write correct food');
        })

}
// This function will show the food with picture one you entered valid food name
const displayFoodItem = foodName => {
    const foodDiv = document.getElementById('food');
    foodDiv.innerHTML = '';

    foodName.forEach(food => {
        const div = document.createElement('div');

        div.className = 'col-md-4';
        console.log(food);

        const foodInfo = ` <h3>${food.strMeal}</h3>
         <img onclick="displayFoodDetails('${food.strMeal}')" src = "${food.strMealThumb}"> `;
        div.innerHTML = foodInfo;
        foodDiv.appendChild(div);

    });

}
const displayFoodDetails = name => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]))


};

//this function will show the food details once you clicked on food item
const renderFoodInfo = food => {
    console.log(food);
    const foodDiv = document.getElementById('foodDetail');
    foodDiv.innerHTML = `<img src="${food.strMealThumb}">
    <h3>Ingredients :</h3>
    <ul class="list">

    <li>${food.strIngredient1}</li>
    <li>${food.strIngredient2}</li>
    <li>${food.strIngredient3}</li>
    <li>${food.strIngredient4}</li>
    <li>${food.strIngredient5}</li>
    <li>${food.strIngredient6}</li>
    <li>${food.strIngredient7}</li>
    <li>${food.strIngredient8}</li>
    <li>${food.strIngredient9}</li>
    </ul>
    
     `;

}











