

document.addEventListener('DOMContentLoaded', () => {
	// Brand colors
	const GOLD = '#9D8055'; // active gold accent
	const light_GOLD = '#CBB28A';
	const LIST_BASE = '#285f99';

	// Elements
	const tabs = {
		residential: document.getElementById('tab-residential'),
		commercial: document.getElementById('tab-commercial'),
		compound: document.getElementById('tab-compound'),
	};
	const projectListEl = document.getElementById('project-list');
	const projectImageEl = document.getElementById('project-image');
	const projectTitleEl = document.getElementById('project-title');
	const projectSummaryEl = document.getElementById('project-summary');
	const projectCtaEl = document.getElementById('project-cta');

	// Data
	const data = {
		residential: {
			label: 'Residential Projects',
			projects: [
				{
					id: 'aamal-tower',
					title: 'Aamal Tower',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Aamal Tower in West Bay provides 33 floors of flexible office and residential space with a 100-seat auditorium.',
				},
				{
					id: 'al-areen-exec-apartments',
					title: 'Al Areen Executive Apartments',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Modern executive apartments offering comfort, connectivity, and convenient access to city amenities.',
				},
				{
					id: 'al-sadd-tourist-apartments',
					title: 'Al Sadd Tourist Apartments',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Serviced apartments designed for short and long stays with hospitality-inspired facilities.',
				},
				{
					id: 'daareen-towers',
					title: 'Daareen Towers',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Daareen Towers offer premium residences with elevated views, fitness amenities, and rooftop leisure.',
				},
				{
					id: 'oryx-apartments',
					title: 'Oryx Apartments',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Stylish apartments featuring thoughtful layouts, natural light, and on-site conveniences.',
				},
				{
					id: 'serdal-tower',
					title: 'Serdal Tower',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'A contemporary tower blending refined interiors with accessible urban living.',
				},
			],
			defaultId: 'daareen-towers',
		},
		commercial: {
			label: 'Commercial Projects',
			projects: [
				{
					id: 'commercial-1',
					title: 'Commercial Project 1',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Flexible commercial spaces designed for modern teams and client-facing experiences.',
				},
				{
					id: 'commercial-2',
					title: 'Commercial Project 2',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Grade-A office floors with efficient cores, parking, and shared amenities.',
				},
				{
					id: 'commercial-3',
					title: 'Commercial Project 3',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Premium mixed-use development with adaptable retail and workspace concepts.',
				},
			],
			defaultId: 'commercial-1',
		},
		compound: {
			label: 'Compound',
			projects: [
				{
					id: 'compound-1',
					title: 'Compound Project 1',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Family-friendly residences centered around recreation, security, and greenery.',
				},
				{
					id: 'compound-2',
					title: 'Compound Project 2',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Community living with shared facilities, walkways, and neighborhood services.',
				},
				{
					id: 'compound-3',
					title: 'Compound Project 3',
					image: `${window.theme_path}/assets/static/realestate/AlFaisal_Real_Estate_DareenTower.jpg`,
					summary:
						'Well-connected compound offering privacy, play areas, and resident support.',
				},
			],
			defaultId: 'compound-1',
		},
	};

	let state = {
		category: 'residential',
		projectId: data.residential.defaultId,
	};

	// Helpers
	function setActiveTabStyles() {
		Object.entries(tabs).forEach(([key, el]) => {
			if (!el) return;
			if (key === state.category) {
				el.style.color = light_GOLD;
				el.style.fontWeight = '300';
			} else {
				el.style.color = '#FFFFFF';
				el.style.fontWeight = '300';
			}
		});
	}

	function renderProjectList() {
		const { projects } = data[state.category];
		projectListEl.innerHTML = '';
		projects.forEach((p) => {
			const item = document.createElement('button');
			item.type = 'button';
			item.textContent = p.title;
			item.className = 'text-left cursor-pointer';
			item.style.padding = '0';
			item.style.background = 'transparent';
			item.style.border = 'none';
			item.style.fontSize = '1.125rem';
			item.style.lineHeight = '1.5rem';
			const isActive = p.id === state.projectId;
			item.style.color = isActive ? GOLD : LIST_BASE;
			// item.style.fontWeight = isActive ? '600' : '400';
			item.addEventListener('click', () => {
				state.projectId = p.id;
				renderProjectList();
				renderProjectDetail();
			});
			projectListEl.appendChild(item);
		});
	}

	function renderProjectDetail() {
		const { projects } = data[state.category];
		const current = projects.find((p) => p.id === state.projectId) || projects[0];
		if (!current) return;
		if (projectImageEl) projectImageEl.src = current.image;
		if (projectTitleEl) projectTitleEl.textContent = current.title;
		if (projectSummaryEl) projectSummaryEl.textContent = current.summary;
	}

	function switchCategory(cat) {
		if (!data[cat]) return;
		state.category = cat;
		state.projectId = data[cat].defaultId || data[cat].projects?.[0]?.id;
		setActiveTabStyles();
		renderProjectList();
		renderProjectDetail();
	}

	// Events
	if (tabs.residential) tabs.residential.addEventListener('click', () => switchCategory('residential'));
	if (tabs.commercial) tabs.commercial.addEventListener('click', () => switchCategory('commercial'));
	if (tabs.compound) tabs.compound.addEventListener('click', () => switchCategory('compound'));

	if (projectCtaEl) {
		projectCtaEl.addEventListener('click', () => {
			// Placeholder; integrate navigation as needed
			console.log('Read More clicked for', state);
		});
	}

	// Init
	setActiveTabStyles();
	renderProjectList();
	renderProjectDetail();
});


//mobile menu
//sidebar
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  mobileOverlay.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
  mobileOverlay.classList.add("hidden");
});

mobileOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
  mobileOverlay.classList.add("hidden");
});

//footer
  // Smooth scroll to top
  document.querySelector('img[alt="to_top"]').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

(function initHeroVideo() {
  const heroVideo = document.getElementById('hero-video-1');
  const videoPoster = document.getElementById('video-poster-1');
  const playButton = document.getElementById('play-button-1');
  
  if (!heroVideo || !videoPoster || !playButton) return;

  heroVideo.muted = true;
  heroVideo.playsInline = true;

  let hasAutoPlayed = false;

  // Function to play video with fade-in effect
  function playVideoWithFade() {
    videoPoster.style.opacity = '0';
    playButton.style.opacity = '0';
    heroVideo.style.opacity = '1';
    
    heroVideo.currentTime = 0; // Reset to start
    heroVideo.play().catch(() => {});
  }

  // Function to show poster after video ends
  function showPoster() {
    heroVideo.style.opacity = '0';
    videoPoster.style.opacity = '1';
    playButton.style.opacity = '1';
  }

  // Auto-play after 2-3 seconds on page load
  setTimeout(() => {
    if (!hasAutoPlayed) {
      hasAutoPlayed = true;
      playVideoWithFade();
    }
  }, 2500); // 2.5 seconds delay

  // When video ends, show poster again
  heroVideo.addEventListener('ended', showPoster);

  // Click play button to replay video
  playButton.addEventListener('click', () => {
    playVideoWithFade();
  });
})();