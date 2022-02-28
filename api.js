
const loadData=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>dispalyMeals(data.meals))
}
const dispalyMeals=(meals)=>{
    // console.log(meals)
    const mealsContainer=document.getElementById('meals')
    meals.forEach(meal => {
        console.log(meal.strMeal)
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="col">
           <h3>${meal.strMeal}</h3>
           <button>Details</button>
        </div>
        `
        mealsContainer.appendChild(div)
    });
}
loadData('fish')