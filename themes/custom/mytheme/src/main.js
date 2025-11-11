import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    offset: 120,
    once: false,
    easing: 'ease-out',
    mirror: true
  });
});

//countup
(function () {
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function animateCount(el) {
    const target = Number(el.dataset.target || 0);
    const duration = Number(el.dataset.duration || 1500);
    const step = Math.max(1, Number(el.dataset.step || 1));
    const start = performance.now();

    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(p) * target;

      // Snap to the nearest LOWER multiple of `step`
      const stepped = Math.floor(eased / step) * step;

      el.textContent = Math.min(stepped, target).toLocaleString();

      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target.toLocaleString(); // ensure exact final number
    }
    requestAnimationFrame(frame);
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.dataset.done) {
          el.dataset.done = "1";
          animateCount(el);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".countup").forEach(el => io.observe(el));
})();

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


(function initHeroVideo() {
  const heroVideo = document.getElementById('hero-video');
  const videoPoster = document.getElementById('video-poster');
  const playButton = document.getElementById('play-button');

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
    heroVideo.play().catch(() => { });
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


//news
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      slide.classList.remove('hidden');
    } else {
      slide.classList.remove('active');
      slide.classList.add('hidden');
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove('bg-gray-400');
      dot.classList.add('bg-gray-600');
    } else {
      dot.classList.remove('bg-gray-600');
      dot.classList.add('bg-gray-400');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ============================================
// HORIZONTAL ACCORDION - Business Verticals
// ============================================

import slide1Url from './images/Slide_RealEstate.jpg';
import slide2Url from './images/Slide_Hospitality.jpg';
import slide3Url from './images/Slide_Constractution.jpg';
import slide4Url from './images/Slide_Culture.jpg';
import slide5Url from './images/Slide_Services.jpg';
import slide6Url from './images/Slide_Trading.jpg';
import slide7Url from './images/Slide_Financial.jpg';
import slide8Url from './images/Slide_AAMAL.jpg';
import slide9Url from './images/Slide_Insdutrial.jpg';


import btnarrow from './images/arrow_icon.svg';
import btnarrowwhite from './images/arrow_white.svg';

const businessVerticals = [
  {
    id: 1,
    name: "Real Estate",
    color: "#2ECC71",
    heading: "Al Jazi Real Estate",
    underlineColor: "#2ECC71",
    content:
      "Established in 1995, Al Jazi Real Estate is a subsidiary of Al Faisal Holding and a leading real estate developer in Qatar. Known for its high-end residential and commercial properties.",
    image: slide1Url,
  },
  {
    id: 2,
    name: "Hospitality",
    color: "#3498DB",
    heading: "Al Jazi Hospitality",
    underlineColor: "#3498DB",
    content:
      "Al Jazi Hospitality offers world-class hotel and leisure experiences, managing premium resorts and catering services designed to deliver comfort and excellence.",
    image: slide2Url,
  },
  {
    id: 3,
    name: "Construction & Project Management",
    color: "#E67E22",
    heading: "Aamal Construction",
    underlineColor: "#E67E22",
    content:
      "Specializing in construction and infrastructure projects, delivering innovative solutions in residential, commercial, and industrial sectors.",
    image: slide3Url,
  },
  {
    id: 4,
    name: "Culture, Education, Leisure, Sport",
    color: "#9B59B6",
    heading: "Al Faisal Cultural Ventures",
    underlineColor: "#9B59B6",
    content:
      "Promoting cultural exchange and education through investments in institutions, sports facilities, and creative community projects.",
    image: slide4Url,
  },
  {
    id: 5,
    name: "Services",
    color: "#1ABC9C",
    heading: "Al Jazi Services",
    underlineColor: "#1ABC9C",
    content:
      "Providing diverse services including facilities management, maintenance, and technical support for both residential and commercial clients.",
    image: slide5Url,
  },
  {
    id: 6,
    name: "Trading & Distribution",
    color: "#F1C40F",
    heading: "Aamal Trading",
    underlineColor: "#F1C40F",
    content:
      "A trusted leader in distribution, offering a wide range of consumer and industrial products backed by strong logistics and reliable partnerships.",
    image: slide6Url,
  },
  {
    id: 7,
    name: "Financial Investments",
    color: "#E74C3C",
    heading: "Aamal Investments",
    underlineColor: "#E74C3C",
    content:
      "Focused on strategic financial investments that foster growth and sustainability across diverse economic sectors.",
    image: slide7Url,
  },
  {
    id: 8,
    name: "Manufacturing",
    color: "#F39C12",
    heading: "Aamal Manufacturing",
    underlineColor: "#F39C12",
    content:
      "A pioneer in industrial production, supporting Qatar's self-sufficiency through innovation and quality manufacturing facilities.",
    image: slide8Url,
  },
  {
    id: 9,
    name: "Aamal Company Q.P.S.C",
    color: "#5DADE2",
    heading: "Aamal Company Q.P.S.C",
    underlineColor: "#5DADE2",
    content:
      "The parent holding company driving diversification and excellence across all business verticals under Al Faisal Holding.",
    image: slide9Url,
  },
];
let activeAccordionIndex = 0;
let autoAccordionInterval;

// Desktop Accordion
const accordionContainer = document.getElementById("accordion-container");
const mobileAccordionContainer = document.getElementById("mobile-accordion-container");

// Create Desktop Horizontal Accordion Panels
function createDesktopAccordion() {
  if (!accordionContainer) return;

  accordionContainer.innerHTML = '';

  businessVerticals.forEach((vertical, index) => {
    const panel = document.createElement('div');
    panel.className = 'accordion-panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out';
    const rail = (index % 2 === 0) ? '#868d99' : '#868d99';
    panel.style.setProperty('--rail-color', rail);
    panel.style.flex = index === activeAccordionIndex ? '1 1 70%' : '1 1 5%';
    panel.dataset.index = index;

    // Background image
    const bgImg = document.createElement('img');
    bgImg.src = vertical.image;
    bgImg.alt = vertical.name;
    bgImg.className = 'absolute inset-0 w-full h-full object-cover transition-opacity duration-700';
    bgImg.style.opacity = index === activeAccordionIndex ? '1' : '0.7';

    // Overlay for better text readability
    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 vertical-box-overlay  transition-opacity duration-700';
    overlay.style.opacity = index === activeAccordionIndex ? '0' : '0.2';

    // Content container
    // Content container
    const content = document.createElement('div');
    content.className = 'absolute inset-0 flex items-end transition-all duration-700';

    if (index === activeAccordionIndex) {
      // Active panel - show full content with vertical heading
      content.innerHTML = `
        <div class="flex items-end gap-12 !p-8 w-full">
          <div class="flex flex-col items-center gap-4">
            <p class="text-[#ffffff] text-base tracking-widest uppercase vertical-text">${vertical.name}</p>
            <div class="w-2 h-2" style="background-color: ${vertical.color}"></div>
          </div>
          <div class="text-white space-y-6 max-w-lg flex flex-col gap-6 !mb-20 !ml-20">
            <h2 class="text-3xl font-thin underline underline-offset-8 tracking-wide" style="text-decoration-color: ${vertical.underlineColor}">${vertical.heading}</h2>
            <p class="text-base sm:text-lg leading-7 sm:leading-9 text-gray-300">${vertical.content}</p>
    <a href="#" class="group text-[#bbccd5] !mt-4 !px-5 !py-1.5 sm:w-[200px] border border-[#bbccd5] font-light
										           transition-colors duration-500 rounded text-[17px]
										          w-fit flex items-center gap-2 focus-visible:outline-none
										          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#bbccd5]" aria-label="Read more about Faisal Holding">

					<!-- Wrap content so both icon + text move together -->
					<span class="flex items-center gap-2 transform-gpu transition-transform duration-500 group-hover:translate-x-4">
						<img src="${btnarrowwhite}" alt="" class="h-5 w-5 shrink-0"/>
						<span>Explore</span>
					</span>
				</a>
          </div>
        </div>
      `;
    } else {
      // Inactive panel - show vertical text
      content.innerHTML = `
        <div class="w-full h-full flex items-end justify-center !pb-8">
          <div class="flex flex-col items-center gap-4">
            <p class="text-[#ffffff] text-base tracking-widest uppercase vertical-text">${vertical.name}</p>
            <div class="w-2 h-2" style="background-color: ${vertical.color}"></div>
          </div>
        </div>
      `;
    }

    // Click handler
    panel.addEventListener('click', () => {
      if (index !== activeAccordionIndex) {
        clearInterval(autoAccordionInterval);
        setActivePanel(index);
        startAutoAccordion();
      }
    });

    panel.appendChild(bgImg);
    panel.appendChild(overlay);
    panel.appendChild(content);
    accordionContainer.appendChild(panel);
  });
}

// Set active panel with smooth animation
function setActivePanel(newIndex) {
  const panels = accordionContainer.querySelectorAll('.accordion-panel');

  panels.forEach((panel, index) => {
    const bgImg = panel.querySelector('img');
    const overlay = panel.querySelector('.absolute.vertical-box-overlay');
    const content = panel.querySelector('.absolute.inset-0.flex');

    if (index === newIndex) {
      // Activate this panel
      panel.style.flex = '1 1 70%';
      bgImg.style.opacity = '1';
      overlay.style.opacity = '0.2';

      // Match new desktop accordion layout
      setTimeout(() => {
        content.innerHTML = `
          <div class="flex items-end gap-12 !p-8 w-full">
            <div class="flex flex-col items-center gap-4">
              <p class="text-[#ffffff] text-base tracking-widest uppercase vertical-text">${businessVerticals[index].name}</p>
              <div class="w-2 h-2" style="background-color: ${businessVerticals[index].color}"></div>
            </div>
            <div class="text-white space-y-6 max-w-lg flex flex-col gap-6 !mb-20 !ml-20">
              <h2 class="text-3xl font-thin underline underline-offset-8 tracking-wide" 
                  style="text-decoration-color: ${businessVerticals[index].underlineColor}">
                  ${businessVerticals[index].heading}
              </h2>
              <p class="text-base sm:text-lg leading-7 sm:leading-9 text-gray-300">${businessVerticals[index].content}</p>
                <a href="#" class="group text-[#bbccd5] !mt-4 !px-5 !py-1.5 sm:w-[200px] border border-[#bbccd5] font-light
										           transition-colors duration-500 rounded text-[17px]
										          w-fit flex items-center gap-2 focus-visible:outline-none
										          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#bbccd5]" aria-label="Read more about Faisal Holding">

					<!-- Wrap content so both icon + text move together -->
					<span class="flex items-center gap-2 transform-gpu transition-transform duration-500 group-hover:translate-x-4">
						<img src="${btnarrowwhite}" alt="" class="h-5 w-5 shrink-0"/>
						<span>Explore</span>
					</span>
				</a>
              
            </div>
          </div>
        `;
      }, 300);
    } else {
      // Deactivate this panel
      panel.style.flex = '1 1 5%';
      bgImg.style.opacity = '0.7';
      overlay.style.opacity = '0.2';

      // Match inactive state style
      setTimeout(() => {
        content.innerHTML = `
          <div class="w-full h-full flex items-end justify-center !pb-8">
            <div class="flex flex-col items-center gap-4">
              <p class="text-[#ffffff] text-lg tracking-widest uppercase vertical-text">${businessVerticals[index].name}</p>
              <div class="w-2 h-2" style="background-color: ${businessVerticals[index].color}"></div>
            </div>
          </div>
        `;
      }, 300);
    }
  });

  activeAccordionIndex = newIndex;
}


// Create Mobile Vertical Accordion
function createMobileAccordion() {
  if (!mobileAccordionContainer) return;

  mobileAccordionContainer.innerHTML = '';

  businessVerticals.forEach((vertical, index) => {
    const panel = document.createElement('div');
    panel.className = 'mobile-accordion-panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out';
    const rail = (index % 2 === 0) ? '#475467' : '#475467';
    panel.style.setProperty('--rail-color', rail);
    panel.style.height = index === activeAccordionIndex ? '400px' : '60px';
    panel.dataset.index = index;

    // Background image
    const bgImg = document.createElement('img');
    bgImg.src = vertical.image;
    bgImg.alt = vertical.name;
    bgImg.className = 'absolute inset-0 w-full h-full object-cover transition-opacity duration-700';
    bgImg.style.opacity = index === activeAccordionIndex ? '1' : '1';

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 vertical-box-overlay transition-opacity duration-700';
    overlay.style.opacity = index === activeAccordionIndex ? '0' : '0.2';

    // Content
    const content = document.createElement('div');
    content.className = 'absolute inset-0 p-4 flex flex-col justify-end transition-all duration-700';

    if (index === activeAccordionIndex) {
      // Active - full content
      content.innerHTML = `
        <div class="text-white space-y-6 !p-8">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-2 h-2" style="background-color: ${vertical.color}"></div>
            <p class="text-xs tracking-wide uppercase">${vertical.name}</p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-xl font-thin underline underline-offset-4 tracking-wide" style="text-decoration-color: ${vertical.underlineColor}">${vertical.heading}</h3>
            <p class="text-base sm:text-lg leading-7 sm:leading-9 text-gray-300">${vertical.content}</p>
            <a href="#" class="group text-[#bbccd5] !mt-4 !px-5 !py-1.5 sm:w-[200px] border border-[#bbccd5] font-light
										           transition-colors duration-500 rounded text-[17px]
										          w-fit flex items-center gap-2 focus-visible:outline-none
										          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#bbccd5]" aria-label="Read more about Faisal Holding">

					<!-- Wrap content so both icon + text move together -->
					<span class="flex items-center gap-2 transform-gpu transition-transform duration-500 group-hover:translate-x-4">
						<img src="${btnarrowwhite}" alt="" class="h-5 w-5 shrink-0"/>
						<span>Explore</span>
					</span>
				</a>
          </div>
        </div>
      `;
    } else {
      // Inactive - just title
      content.innerHTML = `
        <div class="flex items-center gap-3 h-full !pl-2">
          <div class="w-2 h-2 flex-shrink-0" style="background-color: ${vertical.color}"></div>
          <p class="text-white text-sm tracking-wide uppercase font-medium">${vertical.name}</p>
        </div>
      `;
    }

    // Click handler
    panel.addEventListener('click', () => {
      if (index !== activeAccordionIndex) {
        clearInterval(autoAccordionInterval);
        setActiveMobilePanel(index);
        startAutoAccordion();
      }
    });

    panel.appendChild(bgImg);
    panel.appendChild(overlay);
    panel.appendChild(content);
    mobileAccordionContainer.appendChild(panel);
  });
}

// Set active mobile panel
function setActiveMobilePanel(newIndex) {
  const panels = mobileAccordionContainer.querySelectorAll('.mobile-accordion-panel');

  panels.forEach((panel, index) => {
    const bgImg = panel.querySelector('img');
    const overlay = panel.querySelector('.absolute.vertical-box-overlay');
    const content = panel.querySelector('.absolute.inset-0.p-4');

    if (index === newIndex) {
      // Activate
      panel.style.height = '400px';
      bgImg.style.opacity = '1';
      overlay.style.opacity = '0';

      setTimeout(() => {
        content.innerHTML = `
          <div class="text-white space-y-3 opacity-0 !p-8" style="animation: fadeIn 0.7s forwards;">
            <div class="flex items-center gap-2 !mb-2">
              <div class="w-2 h-2" style="background-color: ${businessVerticals[index].color}"></div>
              <p class="text-xs tracking-wide uppercase">${businessVerticals[index].name}</p>
            </div>
            <div class="flex flex-col gap-3">
              <h3 class="text-xl font-thin underline underline-offset-4 tracking-wide" style="text-decoration-color: ${businessVerticals[index].underlineColor}">${businessVerticals[index].heading}</h3>
              <p class="text-base sm:text-lg leading-7 sm:leading-9 text-gray-300">${businessVerticals[index].content}</p>
               <a href="#" class="group text-[#bbccd5] !mt-4 !px-5 !py-1.5 sm:w-[200px] border border-[#bbccd5] font-light
										           transition-colors duration-500 rounded text-[17px]
										          w-fit flex items-center gap-2 focus-visible:outline-none
										          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#bbccd5]" aria-label="Read more about Faisal Holding">

					<!-- Wrap content so both icon + text move together -->
					<span class="flex items-center gap-2 transform-gpu transition-transform duration-500 group-hover:translate-x-4">
						<img src="${btnarrowwhite}" alt="" class="h-5 w-5 shrink-0"/>
						<span>Explore</span>
					</span>
				</a>
            </div>
          </div>
        `;
      }, 300);
    } else {
      // Deactivate
      panel.style.height = '60px';
      bgImg.style.opacity = '0.7';
      overlay.style.opacity = '0.2';

      setTimeout(() => {
        content.innerHTML = `
          <div class="flex items-center gap-3 h-full !pl-4">
            <div class="w-2 h-2 flex-shrink-0" style="background-color: ${businessVerticals[index].color}"></div>
            <p class="text-white text-sm tracking-wide uppercase font-medium">${businessVerticals[index].name}</p>
          </div>
        `;
      }, 300);
    }
  });

  activeAccordionIndex = newIndex;
}

// Auto-rotate accordion
function startAutoAccordion() {
  autoAccordionInterval = setInterval(() => {
    const nextIndex = (activeAccordionIndex + 1) % businessVerticals.length;

    if (window.innerWidth >= 1024) {
      setActivePanel(nextIndex);
    } else {
      setActiveMobilePanel(nextIndex);
    }
  }, 8000);
}

// Initialize accordion
function initAccordion() {
  if (window.innerWidth >= 1024) {
    createDesktopAccordion();
  } else {
    createMobileAccordion();
  }
  startAutoAccordion();
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    clearInterval(autoAccordionInterval);
    initAccordion();
  }, 250);
});

// Start accordion on load
if (accordionContainer || mobileAccordionContainer) {
  initAccordion();
}


//footer
// Smooth scroll to top
document.querySelector('img[alt="to_top"]').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});