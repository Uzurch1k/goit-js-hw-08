console.log('Number of categories:', document.querySelectorAll('.item').length);

const categoriesItem = document.querySelectorAll('.item');

categoriesItem.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('ul li').length}`);
});
