// header button part

const loadNews = async () => {
  const url = ` https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data.news_category);
}

const displayNews = button => {
  const buttonsContainer = document.getElementById('button-container');
  
  button.forEach(buttonData =>{
    
    const li = document.createElement('li');
    li.innerHTML = `
  <button class='hover:text-red-400 ' onclick=" "> ${buttonData.category_name} </button>
  ` ;
    buttonsContainer.appendChild(li);
  })
}
// load button complete


loadNews();
