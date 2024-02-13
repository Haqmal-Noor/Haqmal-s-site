// showing the side
const header = document.querySelector('header');
const Allproducts = document.querySelector('.all-products');
const articleShowing = document.querySelector('.dropdown-icon');
const mainArticle = document.querySelector('article');
const categoriesShowing = document.querySelector('#toggleCategories');
const categoryList = document.querySelector('.categories .category-list');

const scrolledLoginButton = document.querySelector('.login-button');
const scrolledTexts = document.querySelectorAll('.shouldChange');
const scrollSearchBar = document.querySelector('#mainHeader .input-group');
const scrollGlobeIcon = document.querySelector('.globe-icon');

categoriesShowing.addEventListener('click', function () {
	if (categoryList.classList.contains('active')) {
		categoryList.classList.remove('active');
	} else {
		categoryList.classList.add('active');
	}
});
// showing and hiding the header while scrolling
let lastScrollTop = 0;
window.addEventListener(
	'scroll',
	function () {
		let currentScroll =
			window.pageYOffset || document.documentElement.scrollTop;

		if (currentScroll > lastScrollTop) {
			// Scrolling down
			header.style.transform = 'translateY(-100%)'; // Hide the header
		} else {
			// Scrolling up
			header.style.transform = 'translateY(0)'; // Show the header
		}

		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
	},
	false
);
// open and closing the categories
articleShowing.addEventListener('click', () => {
	if (mainArticle.classList.contains('hidden') === true) {
		mainArticle.classList.remove('hidden');
	} else {
		mainArticle.classList.add('hidden');
	}
});

const scrolledItems = function () {
	if (window.scrollY !== 0) {
		scrolledTexts[0].style.color = 'black';
		scrolledTexts[1].style.color = 'black';
		header.classList.add('scrolled');
		header.style.padding = '10px';
		header.style.boxShadow = '0px 0px 40px 0px #000';
		scrolledLoginButton.classList.remove('btn-outline-light');
		scrolledLoginButton.classList.add('btn-outline-success');
		scrollSearchBar.classList.remove('d-none');
		scrollGlobeIcon.src = 'icons/Globe-black.png';
	}
	if (window.scrollY === 0) {
		scrolledTexts[0].style.color = 'white';
		scrolledTexts[1].style.color = 'white';
		header.style.boxShadow = 'none';
		scrolledLoginButton.classList.add('btn-outline-light');
		scrollSearchBar.classList.add('d-none');
		scrollGlobeIcon.src = 'icons/Globe.png';
	}
};

window.addEventListener('scroll', function () {
	var scrolledHeader = document.getElementById('mainHeader');
	if (window.scrollY > 0) {
		scrolledItems();
	} else {
		scrolledHeader.classList.remove('scrolled');
		scrolledItems();
	}
});

// Show the scroll-to-top button when user scrolls down
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('scrollToTop').style.display = 'block';
	} else {
		document.getElementById('scrollToTop').style.display = 'none';
	}
}

// Smooth scroll to the top of the page
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
