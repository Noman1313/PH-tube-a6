const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const categoryButton = document.getElementById('category-button');
    const categories = data.data;

    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerHTML = `
        <button onclick="handleCategoryNews('${category.category_id}')" class="btn">${category.category}</button> 
        `;
        categoryButton.appendChild(button);
    });


}

const cardContainer = document.getElementById('card-container');
const handleCategoryNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    

    if (data.status === true) {

        cardContainer.textContent = '';
        const categoryNews = data.data;


        categoryNews.forEach(news => {
            
            const div = document.createElement('div');
            div.classList = `card bg-base-100 shadow-xl`
            div.innerHTML = `
        <div class="grid justify-items-end">
            <img class="w-[100%] h-52 rounded-xl" src="${news.thumbnail}" alt="Shoes" />
            <h3 class="bg-slate-700 rounded-md mt-[-30px] mr-3 text-white">${news.others.posted_date  ? 
                convertSeconds(news.others.posted_date)
                
                : ''
                
                }</h3>    
        </div>
        <div class="flex gap-5 my-5">
            <div>
                <img class="w-10 h-10 rounded-full" src="${news.authors[0].profile_picture}" alt="">
            </div>
            <div>
                <h2 class="text-xl font-bold">${news.title}</h2>
                <div class="flex gap-2 items-center">
                    <h2 class="text-lg">${news.authors[0].profile_name}</h2>
                     
                    <p>${news.authors[0].verified ? '<img src="images/blue badge.png" alt="">' : ''}</p> 
                </div>
                <h2 class="text-lg">${news.others.views} </h2>
            </div>
        </div>
        `;
            cardContainer.appendChild(div);
        });
    }
    else {
        cardContainer.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-center">
            <img  src="images/Icon.png" alt="">
        </div>
        <p class="text-2xl font-bold text-center">Oops!! Sorry, There is no content here</p>
         `
        cardContainer.appendChild(div);
    }

}



handleCategory();
handleCategoryNews("1000");

// -------blog------
document.getElementById('blog-button').addEventListener('click', function () {
    window.location.href='BlogQuestions.html';
})

// second to time convart
const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
  
    return `${hours} hrs ${minutes} min ago`
  }




  