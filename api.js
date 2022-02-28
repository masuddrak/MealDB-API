
const toggleSpinner=display=>{
    document.getElementById('loding').style.display=display
}
const toggleMeals=display=>{
    document.getElementById('meals').style.display=display
}
const togglNotMeals=display=>{
    document.getElementById('notResult').style.display=display
}
const togglShowDEtails=display=>{
    document.getElementById('showDEtails').style.display=display
}
// input
const searchBtn=()=>{
    const searchFild=document.getElementById('search-fild')
    const serachValu=searchFild.value
    // displaay spinner
    toggleSpinner('block')
    toggleMeals('none')
    togglNotMeals('none')
    togglShowDEtails('none')

    loadData(serachValu)
    searchFild.value=''
}
// load data
const loadData=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>dispalyMeals(data.meals))
}
// display search meals
const dispalyMeals=(meals)=>{
    // console.log(meals)
    const mealsContainer=document.getElementById('meals')
    mealsContainer.textContent=''
    if(!meals){
    togglNotMeals('block')
    }
    meals?.forEach(meal => {
        // console.log(meal)
        const div=document.createElement('div')
        div.innerHTML=`
           <div weidth="70px" height="70px class="card">
           <img weidth="100px" height="130px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
           <button onclick="mealDetails('${meal.idMeal}')">Details</button>
           </div>
         </div>
                  
        `
        mealsContainer.appendChild(div)
    });
    // display spinner none
    toggleSpinner('none')
    toggleMeals('block')
}
loadData('fish')


// mela details
const mealDetails=(ID)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>detailsMeal(data.meals[0])) 
}
const detailsMeal=(mealDetails)=>{
    console.log(mealDetails.strMealThumb)
    const showDEtails=document.getElementById('showDEtails')
    showDEtails.textContent=''
    const div=document.createElement('div')
    div.innerHTML=`
    <img  src="${mealDetails.strMealThumb}">
    `
    showDEtails.appendChild(div)
    togglShowDEtails('block')
}
