// header button part

const loadNews = async () => {
  const url = ` https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.data);
}

const displayNews = butto
loadNews();