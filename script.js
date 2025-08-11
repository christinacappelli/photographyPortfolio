// Category filtering logic
const images = [
	// Portrait
	{ src: 'images/portrait1.jpg', alt: 'Portrait 1', category: 'portrait' },
	{ src: 'images/portrait2.jpg', alt: 'Portrait 2', category: 'portrait' },
	{ src: 'images/portrait3.jpg', alt: 'Portrait 3', category: 'portrait' },
	{ src: 'images/portrait4.jpg', alt: 'Portrait 4', category: 'portrait' },
	{ src: 'images/portrait5.jpg', alt: 'Portrait 5', category: 'portrait' },
	{ src: 'images/portrait6.jpg', alt: 'Portrait 6', category: 'portrait' },
	{ src: 'images/portrait7.jpeg', alt: 'Portrait 7', category: 'portrait' },
	{ src: 'images/portrait8.jpeg', alt: 'Portrait 8', category: 'portrait' },
	{ src: 'images/portrait10.JPG', alt: 'Portrait 10', category: 'portrait' },
	{ src: 'images/portrait11.JPG', alt: 'Portrait 11', category: 'portrait' },
	{ src: 'images/portrait12.JPG', alt: 'Portrait 12', category: 'portrait' },
	{ src: 'images/portrait13.jpeg', alt: 'Portrait 13', category: 'portrait' },
	{ src: 'images/portrait14.JPG', alt: 'Portrait 14', category: 'portrait' },
	// Runway
	{ src: 'images/runway1.png', alt: 'Runway 1', category: 'runway' },
	{ src: 'images/runway2.jpg', alt: 'Runway 2', category: 'runway' },
	{ src: 'images/runway3.jpg', alt: 'Runway 3', category: 'runway' },
	{ src: 'images/runway4.jpg', alt: 'Runway 4', category: 'runway' },
	{ src: 'images/runway5.jpg', alt: 'Runway 5', category: 'runway' },
	{ src: 'images/runway6.jpg', alt: 'Runway 6', category: 'runway' },
	{ src: 'images/runway7.jpg', alt: 'Runway 7', category: 'runway' },
	{ src: 'images/runway8.jpg', alt: 'Runway 8', category: 'runway' },
	{ src: 'images/runway9.JPG', alt: 'Runway 9', category: 'runway' },
	{ src: 'images/runway10.jpeg', alt: 'Runway 10', category: 'runway' },
	{ src: 'images/runway11.jpeg', alt: 'Runway 11', category: 'runway' },
	// Travel
	{ src: 'images/travel1.jpg', alt: 'Travel 1', category: 'travel' },
	{ src: 'images/travel2.jpg', alt: 'Travel 2', category: 'travel' },
	{ src: 'images/travel3.jpg', alt: 'Travel 3', category: 'travel' },
	{ src: 'images/travel4.jpg', alt: 'Travel 4', category: 'travel' },
	{ src: 'images/travel5.jpg', alt: 'Travel 5', category: 'travel' },
	{ src: 'images/travel6.jpg', alt: 'Travel 6', category: 'travel' },
	{ src: 'images/travel7.png', alt: 'Travel 7', category: 'travel' },
	{ src: 'images/travel9.JPG', alt: 'Travel 9', category: 'travel' },
	{ src: 'images/travel10.jpeg', alt: 'Travel 10', category: 'travel' },
	{ src: 'images/travel11.jpeg', alt: 'Travel 11', category: 'travel' },
	{ src: 'images/travel12.jpeg', alt: 'Travel 12', category: 'travel' },
];

function renderGallery(category) {
	const grid = document.getElementById('galleryGrid');
	grid.innerHTML = '';
	images.filter(img => img.category === category).forEach(img => {
		const el = document.createElement('img');
		el.src = img.src;
		el.alt = img.alt;
		el.className = 'gallery-img';
		el.loading = 'lazy';
		grid.appendChild(el);
	});
}

document.addEventListener('DOMContentLoaded', function() {
	// Default to travel
	renderGallery('travel');
	document.querySelectorAll('.category-btn').forEach(btn => {
		btn.addEventListener('click', function() {
			renderGallery(this.dataset.category);
		});
	});

	// Modal logic for gallery (no caption, optimized)
	const modal = document.getElementById('modal');
	const modalImg = document.getElementById('modal-img');
	const closeBtn = document.querySelector('.close');
	document.getElementById('galleryGrid').addEventListener('click', function(e) {
		if (e.target.classList.contains('gallery-img')) {
			modal.style.display = 'block';
			modalImg.src = e.target.src;
		}
	});
	closeBtn.onclick = function() {
		modal.style.display = 'none';
		modalImg.src = '';
	};
	window.onclick = function(event) {
		if (event.target === modal) {
			modal.style.display = 'none';
			modalImg.src = '';
		}
	};
});
// Modal logic for gallery (no caption, optimized)
document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('modal');
	const modalImg = document.getElementById('modal-img');
	const closeBtn = document.querySelector('.close');
	document.querySelectorAll('.gallery-img').forEach(img => {
		img.addEventListener('click', function() {
			modal.style.display = 'block';
			modalImg.src = this.src;
		});
	});
	closeBtn.onclick = function() {
		modal.style.display = 'none';
		modalImg.src = '';
	};
	window.onclick = function(event) {
		if (event.target === modal) {
			modal.style.display = 'none';
			modalImg.src = '';
		}
	};
});
