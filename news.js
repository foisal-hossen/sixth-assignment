// header button part

const loadCategory = () => {
  const url = ` https://openapi.programming-hero.com/api/news/categories`
  fetch(url)
    .then(res => res.json())
  .then(data =>displayNews(data) )
  .catch(error => console.log(error));
}

const displayNews = button => {
  const categoryIdName = button.data.news_category;
  const buttonsContainer = document.getElementById('button-container');
  
  categoryIdName.forEach(buttonData =>{
    
    const li = document.createElement('li');
    li.innerHTML = `
  <button onclick="categoryId('${buttonData.category_id}')" class='hover:text-red-400 ' onclick=" "> ${buttonData.category_name} </button>
  ` ;
    buttonsContainer.appendChild(li);
  })
}
// load button complete


loadCategory();

const categoryId = (id) => {
  loadNewsById(id);
  console.log(id);
};
//  card-------------------------
const loadNewsById = (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => loadNewsIdDisplay(data))
    .catch(error => console.log(error));
};

const loadNewsIdDisplay = (data) => {
  
  const newsByIdArray = data.data;
    console.log(newsByIdArray);
  const newsItems = document.getElementById('news-items');
  newsItems.innerHTML = "";
  newsByIdArray.forEach(element => {
    const div = document.createElement('div');
    const newsDetails = element.details.slice(0, 200) + '...';
    div.innerHTML = `
    <div class="card lg:card-side bg-base-100 shadow-xl shadow-indigo-200 rounded-lg mx-32 mt-10">
   <figure><img class="rounded" src=" ${element.thumbnail_url}" alt="Album"></figure>
   <div class="card-body">
     <h2 class="card-title font-bold text-lg">${element.title}</h2>
     <p>${newsDetails}</p>
     <nav>
       <div class="navbar bg-base-100">
     <div class="flex-1">
       <div class="avatar">
         <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
           <img src="${element.author.img}" />
         </div>
       </div>
           <div class="stat">
           <p class="stat font-bold text-indigo-500 normal-case text-xl">${element.author.name}</p> 
           <p class="stat-desc ml-5">Jan 1st - Feb 1st</p> 
           </div>
          <div class="fill-pink-500 ml-20">  
         <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg>
       </div>
       <div class="stat ">
         <div class="stat-title font-bold">Page Views</div>
         <div class="stat-value text-secondary">${element.total_view}</div>
         <div class="stat-desc ">21% more than last month</div>
       </div>
   
     </div>
     <div class="flex-none">
       <div class="dropdown dropdown-end">
         <label tabindex="0" class="btn-circle">
           <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:fill-pink-500"><path d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg>
           <div class="indicator">
           </div>
         </label>
       </div>
       
       </div>
       </div>
          
     </nav>
   </div>
 </div>
    `;
    newsItems.appendChild(div);
  });

}
loadNewsById('01');

//------------------------------

const loadDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
      .then(response => response.json())
      .then(data => loadDetailsDisplay(data))
      .catch(error => console.log(error));
};

const loadDetailsDisplay = (data) => {
  const modalContainer =document.getElementById()
}