// burger icon 
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("close");

  if (burger && menu && closeBtn) {
    // Open sidebar
    burger.addEventListener("click", () => {
      menu.style.right = "0"; 
    });

    // Close sidebar
    closeBtn.addEventListener("click", () => {
      menu.style.right = "-100%"; 
    });
  }

  //----------------------------
  // animation 
  const section = document.querySelector('section');
  const cards = document.querySelectorAll('.card');

  if (cards.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.add('show');
            }, idx * 300);
          });
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.3 }); 

    if (section) {
      observer.observe(section);
    }
  }

  // -----------------------------
  // fetch products 
  const container = document.querySelector('.products');

  const productData = async () => {
    try {
      const res = await fetch('products.json');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Products loaded:", data);
      const repeated = [...data, ...data, ...data];
      displayProducts(repeated);
    } catch (error) {
      console.error("Error loading products:", error);
      if (container) {
        container.innerHTML = '<p class="text-red-500 p-4">Error loading products. Please make sure products.json exists.</p>';
      }
    }
  };

  const displayProducts = (products) => {
    if (!container) return;
    container.innerHTML = '';
    
    products.forEach(product => {
      const productcard = document.createElement("div");
      productcard.classList.add('product-card', 'flex-shrink-0'); 
      
      // rating stars
      let stars = "";
      for (let i = 0; i < (product.rating || 5); i++) {
        stars += "⭐";
      }

      productcard.innerHTML = `
        <div class="w-[250px] h-fit bg-white rounded-lg flex flex-col gap-4">
          <div class="w-full bg-[#FAFAFA] flex items-center justify-center p-4">
            <img src="${product.image}" alt="${product.title}" class="w-full h-[200px] object-contain" onerror="this.src='https://via.placeholder.com/250'">
          </div>
          <div class="px-3">
            <p class="text-gray-600">chair</p>
            <p class="font-bold text-lg">${product.title}</p>
            <p class="rate text-sm">${stars}</p>
            <div class="flex justify-between items-center mb-4">
              <p class="text-orange-500 font-semibold">$${product.price}</p>
              <button class="Add bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-white text-lg hover:bg-gray-800 transition">+</button>
            </div>
          </div>
        </div>
      `;
      container.appendChild(productcard);
    });
  };


  productData();

  const leftArrow = document.querySelector('.leftArrow');
  const rightArrow = document.querySelector('.rightArrow');
  const productsContainer = document.querySelector('.products');
  
  if (leftArrow && rightArrow && productsContainer) {
    rightArrow.addEventListener('click', () => {
      console.log('Right arrow clicked');
      productsContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
    
    leftArrow.addEventListener('click', () => {
      console.log('Left arrow clicked');
      productsContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
  }
});

// -----------------------
// testimonial container 
const testContainer = document.querySelectorAll('.test-container');
testContainer.forEach(container => {
  for (let i = 0; i <= 7; i++) {
    container.innerHTML += `
     <div class="bg-[url('./images/testimonel1.jpg')] bg-cover w-[370px] h-[400px] rounded-xl flex-shrink-0 relative text-white p-6 flex flex-col justify-end">
     
  <div class="relative bg-white w-full rounded-xl p-6 text-center text-black">
    <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
      <div class="w-16 h-16 rounded-full bg-white p-1">
        <img src="./images/profile.png" alt="profile picture" class="w-full h-full rounded-full object-cover"/>
      </div>
    </div>
    <div class="pt-10 space-y-2">
      <p class="font-semibold text-lg">Bang Upin</p>
      <p class="text-gray-500 text-sm">Pedagang Asongan</p>
      <p class="text-gray-700 text-sm mt-4">
        "Terimakasih banyak, kini ruanganku<br>
        menjadi lebih mewah dan terlihat<br>
        mahal"
      </p>
      <div class="flex justify-center gap-1 mt-4 rating">
      </div>
    </div>
  </div>
</div>
    `;
  }
});

// --------------------
// ---------------------

const testRight = document.querySelector('.rightArrow-T'); 
const testLeft = document.querySelector('.leftArrow-T');   
const scrollContainer = document.querySelector('.scrool'); 

if (testLeft && testRight && scrollContainer) {

  testLeft.addEventListener('click', () => {
    console.log('Testimonial left arrow clicked');
    scrollContainer.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  
  testRight.addEventListener('click', () => {
    console.log('Testimonial right arrow clicked');
    scrollContainer.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
}x
  // TESTIMONEL RATING 
  const ratings = document.querySelectorAll('.rating');
  ratings.forEach(ratings => {
  for ( let i=0 ; i<=4 ; i++ ){
  ratings.innerHTML += `<i class="ri-star-fill text-orange-400"></i>`;
  }
  ratings.innerHTML += `<i class="ri-star-fill text-gray-500"></i>`;
  });

  