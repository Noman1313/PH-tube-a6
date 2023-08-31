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


    // console.log(data.data);
}

const handleCategoryNews = async (categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    const categoryNews = data.data;
    categoryNews.forEach(news => {
        const div = document.createElement('div');
        div.classList = `card bg-base-100 shadow-xl`
        div.innerHTML = `
        <figure><img class="w-[100%] h-52 rounded-xl" src="${news.thumbnail}" alt="Shoes" /></figure>
        <div class="flex gap-5 my-5">
            <div>
                <img class="w-10 h-10 rounded-full" src="${news.authors[0].profile_picture}" alt="">
            </div>
            <div>
                <h2 class="text-xl font-bold">${news.title}</h2>
                <h2 class="text-lg">${news.authors[0].profile_name}</h2>
                <h2 class="text-lg">${news.others.views}</h2>
            </div>
        </div>
        `;
        cardContainer.appendChild(div);
        console.log(news);
    });
    // console.log(data.data);


    // console.log(categoryId);
}

handleCategory();