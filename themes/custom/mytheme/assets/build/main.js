const L="/themes/custom/mytheme/assets/build/Business_Vericals_Slide1.jpg",g="/themes/custom/mytheme/assets/build/arrow_icon.svg",k=document.getElementById("mobile-menu-btn"),A=document.getElementById("close-menu-btn"),r=document.getElementById("mobile-menu"),p=document.getElementById("mobile-overlay");k.addEventListener("click",()=>{r.classList.remove("-translate-x-full"),r.classList.add("translate-x-0"),p.classList.remove("hidden")});A.addEventListener("click",()=>{r.classList.remove("translate-x-0"),r.classList.add("-translate-x-full"),p.classList.add("hidden")});p.addEventListener("click",()=>{r.classList.remove("translate-x-0"),r.classList.add("-translate-x-full"),p.classList.add("hidden")});(function(){const e=document.getElementById("hero-video"),t=document.getElementById("video-poster"),s=document.getElementById("play-button");if(!e||!t||!s)return;e.muted=!0,e.playsInline=!0;let o=!1;function a(){t.style.opacity="0",s.style.opacity="0",e.style.opacity="1",e.currentTime=0,e.play().catch(()=>{})}function c(){e.style.opacity="0",t.style.opacity="1",s.style.opacity="1"}setTimeout(()=>{o||(o=!0,a())},2500),e.addEventListener("ended",c),s.addEventListener("click",()=>{a()})})();let d=0;const y=document.querySelectorAll(".slide"),b=document.querySelectorAll(".slider-dot");function x(i){y.forEach((e,t)=>{t===i?(e.classList.add("active"),e.classList.remove("hidden")):(e.classList.remove("active"),e.classList.add("hidden"))}),b.forEach((e,t)=>{t===i?(e.classList.remove("bg-gray-400"),e.classList.add("bg-gray-600")):(e.classList.remove("bg-gray-600"),e.classList.add("bg-gray-400"))})}b.forEach((i,e)=>{i.addEventListener("click",()=>{d=e,x(d)})});setInterval(()=>{d=(d+1)%y.length,x(d)},5e3);const n=[{id:1,name:"Real Estate",color:"#2ECC71",heading:"Al Jazi Real Estate",underlineColor:"#2ECC71",content:"Established in 1995, Al Jazi Real Estate is a subsidiary of Al Faisal Holding and a leading real estate developer in Qatar. Known for its high-end residential and commercial properties.",image:L},{id:2,name:"Hospitality",color:"#3498DB",heading:"Al Jazi Hospitality",underlineColor:"#3498DB",content:"Al Jazi Hospitality offers world-class hotel and leisure experiences, managing premium resorts and catering services designed to deliver comfort and excellence.",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"},{id:3,name:"Construction & Project Management",color:"#E67E22",heading:"Aamal Construction",underlineColor:"#E67E22",content:"Specializing in construction and infrastructure projects, delivering innovative solutions in residential, commercial, and industrial sectors.",image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"},{id:4,name:"Culture, Education, Leisure, Sport",color:"#9B59B6",heading:"Al Faisal Cultural Ventures",underlineColor:"#9B59B6",content:"Promoting cultural exchange and education through investments in institutions, sports facilities, and creative community projects.",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"},{id:5,name:"Services",color:"#1ABC9C",heading:"Al Jazi Services",underlineColor:"#1ABC9C",content:"Providing diverse services including facilities management, maintenance, and technical support for both residential and commercial clients.",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"},{id:6,name:"Trading & Distribution",color:"#F1C40F",heading:"Aamal Trading",underlineColor:"#F1C40F",content:"A trusted leader in distribution, offering a wide range of consumer and industrial products backed by strong logistics and reliable partnerships.",image:"https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1200&auto=format&fit=crop"},{id:7,name:"Financial Investments",color:"#E74C3C",heading:"Aamal Investments",underlineColor:"#E74C3C",content:"Focused on strategic financial investments that foster growth and sustainability across diverse economic sectors.",image:"https://images.unsplash.com/photo-1522205408450-add114ad53fe?q=80&w=1200&auto=format&fit=crop"},{id:8,name:"Manufacturing",color:"#F39C12",heading:"Aamal Manufacturing",underlineColor:"#F39C12",content:"A pioneer in industrial production, supporting Qatar's self-sufficiency through innovation and quality manufacturing facilities.",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"},{id:9,name:"Aamal Company Q.P.S.C",color:"#5DADE2",heading:"Aamal Company Q.P.S.C",underlineColor:"#5DADE2",content:"The parent holding company driving diversification and excellence across all business verticals under Al Faisal Holding.",image:"https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1200&auto=format&fit=crop"}];let l=0,f;const m=document.getElementById("accordion-container"),u=document.getElementById("mobile-accordion-container");function $(){m&&(m.innerHTML="",n.forEach((i,e)=>{const t=document.createElement("div");t.className="accordion-panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out",t.style.flex=e===l?"1 1 70%":"1 1 5%",t.dataset.index=e;const s=document.createElement("img");s.src=i.image,s.alt=i.name,s.className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700",s.style.opacity=e===l?"1":"0.7";const o=document.createElement("div");o.className="absolute inset-0 bg-black transition-opacity duration-700",o.style.opacity=e===l?"0.3":"0.5";const a=document.createElement("div");a.className="absolute inset-0 flex items-end transition-all duration-700",e===l?a.innerHTML=`
        <div class="flex items-end gap-12 !p-8 w-full">
          <div class="flex flex-col items-center gap-4">
            <p class="text-white text-lg tracking-widest uppercase vertical-text">${i.name}</p>
            <div class="w-4 h-4 rounded-sm" style="background-color: ${i.color}"></div>
          </div>
          <div class="text-white space-y-6 max-w-2xl flex flex-col gap-6 !mb-20 !ml-20">
            <h2 class="text-3xl font-light underline underline-offset-8 tracking-wide" style="text-decoration-color: ${i.underlineColor}">${i.heading}</h2>
            <p class="text-base sm:text-lg leading-7 sm:leading-9 lg:leading-12 text-gray-300">${i.content}</p>
            <a href="#" class="text-white !mt-4 !px-4 !py-1.5 sm:!py-2 sm:w-[200px] border border-[#9D8055] font-medium
			          hover:bg-[#9D8055] transition-all duration-300 rounded text-lg
			          flex items-center gap-2 focus-visible:outline-none
			          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9D8055]" aria-label="Read more about Faisal Holding">
			<img src="${g}" alt="" class="h-6 w-6 -ml-1"/>
			<span>Explore</span>
		</a>
          </div>
        </div>
      `:a.innerHTML=`
        <div class="w-full h-full flex items-end justify-center !pb-8">
          <div class="flex flex-col items-center gap-4">
            <p class="text-white text-lg tracking-widest uppercase vertical-text">${i.name}</p>
            <div class="w-4 h-4 rounded-sm" style="background-color: ${i.color}"></div>
          </div>
        </div>
      `,t.addEventListener("click",()=>{e!==l&&(clearInterval(f),w(e),h())}),t.appendChild(s),t.appendChild(o),t.appendChild(a),m.appendChild(t)}))}function w(i){m.querySelectorAll(".accordion-panel").forEach((t,s)=>{const o=t.querySelector("img"),a=t.querySelector(".absolute.bg-black"),c=t.querySelector(".absolute.inset-0.flex");s===i?(t.style.flex="1 1 70%",o.style.opacity="1",a.style.opacity="0.3",setTimeout(()=>{c.innerHTML=`
          <div class="flex items-end gap-12 !p-8 w-full">
            <div class="flex flex-col items-center gap-4">
              <p class="text-white text-lg tracking-widest uppercase vertical-text">${n[s].name}</p>
              <div class="w-4 h-4 rounded-sm" style="background-color: ${n[s].color}"></div>
            </div>
            <div class="text-white space-y-6 max-w-2xl flex flex-col gap-6 !mb-20 !ml-20">
              <h2 class="text-3xl font-light underline underline-offset-8 tracking-wide" 
                  style="text-decoration-color: ${n[s].underlineColor}">
                  ${n[s].heading}
              </h2>
              <p class="text-base sm:text-lg leading-7 sm:leading-9 lg:leading-12 text-gray-300">${n[s].content}</p>
                <a href="#" class="text-white !mt-4 !px-4 !py-1.5 sm:!py-2 sm:w-[200px] border border-[#9D8055] font-medium
			          hover:bg-[#9D8055] transition-all duration-300 rounded text-lg
			          flex items-center gap-2 focus-visible:outline-none
			          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9D8055]" aria-label="Read more about Faisal Holding">
			<img src="${g}" alt="" class="h-6 w-6 -ml-1"/>
			<span>Explore</span>
		</a>
              
            </div>
          </div>
        `},300)):(t.style.flex="1 1 5%",o.style.opacity="0.7",a.style.opacity="0.5",setTimeout(()=>{c.innerHTML=`
          <div class="w-full h-full flex items-end justify-center !pb-8">
            <div class="flex flex-col items-center gap-4">
              <p class="text-white text-lg tracking-widest uppercase vertical-text">${n[s].name}</p>
              <div class="w-4 h-4 rounded-sm" style="background-color: ${n[s].color}"></div>
            </div>
          </div>
        `},300))}),l=i}function I(){u&&(u.innerHTML="",n.forEach((i,e)=>{const t=document.createElement("div");t.className="mobile-accordion-panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out",t.style.height=e===l?"400px":"60px",t.dataset.index=e;const s=document.createElement("img");s.src=i.image,s.alt=i.name,s.className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700",s.style.opacity=e===l?"1":"0.7";const o=document.createElement("div");o.className="absolute inset-0 bg-black transition-opacity duration-700",o.style.opacity=e===l?"0.3":"0.6";const a=document.createElement("div");a.className="absolute inset-0 p-4 flex flex-col justify-end transition-all duration-700",e===l?a.innerHTML=`
        <div class="text-white space-y-6 !p-8">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-3 h-3 rounded-sm" style="background-color: ${i.color}"></div>
            <p class="text-xs tracking-wide uppercase">${i.name}</p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-xl font-light underline underline-offset-4 tracking-wide" style="text-decoration-color: ${i.underlineColor}">${i.heading}</h3>
            <p class="text-base sm:text-lg leading-7 sm:leading-9 lg:leading-12 text-gray-300">${i.content}</p>
             <a href="#" class="text-white !mt-4 !px-4 !py-1.5 sm:!py-2 sm:w-[200px] border border-[#9D8055] font-medium
			          hover:bg-[#9D8055] transition-all duration-300 rounded text-lg
			          flex items-center gap-2 focus-visible:outline-none
			          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9D8055]" aria-label="Read more about Faisal Holding">
			<img src="${g}" alt="" class="h-6 w-6 -ml-1"/>
			<span>Explore</span>
		</a>
          </div>
        </div>
      `:a.innerHTML=`
        <div class="flex items-center gap-3 h-full !pl-2">
          <div class="w-3 h-3 rounded-sm flex-shrink-0" style="background-color: ${i.color}"></div>
          <p class="text-white text-sm tracking-wide uppercase font-medium">${i.name}</p>
        </div>
      `,t.addEventListener("click",()=>{e!==l&&(clearInterval(f),E(e),h())}),t.appendChild(s),t.appendChild(o),t.appendChild(a),u.appendChild(t)}))}function E(i){u.querySelectorAll(".mobile-accordion-panel").forEach((t,s)=>{const o=t.querySelector("img"),a=t.querySelector(".absolute.bg-black"),c=t.querySelector(".absolute.inset-0.p-4");s===i?(t.style.height="400px",o.style.opacity="1",a.style.opacity="0.3",setTimeout(()=>{c.innerHTML=`
          <div class="text-white space-y-3 opacity-0 !p-8" style="animation: fadeIn 0.7s forwards;">
            <div class="flex items-center gap-2 !mb-2">
              <div class="w-3 h-3 rounded-sm" style="background-color: ${n[s].color}"></div>
              <p class="text-xs tracking-wide uppercase">${n[s].name}</p>
            </div>
            <div class="flex flex-col gap-3">
              <h3 class="text-xl font-light underline underline-offset-4 tracking-wide" style="text-decoration-color: ${n[s].underlineColor}">${n[s].heading}</h3>
              <p class="text-base sm:text-lg leading-7 sm:leading-9 lg:leading-12 text-gray-300">${n[s].content}</p>
              <a href="#" class="text-white !mt-4 !px-4 !py-1.5 sm:!py-2 sm:w-[200px] border border-[#9D8055] font-medium
			          hover:bg-[#9D8055] transition-all duration-300 rounded text-lg
			          flex items-center gap-2 focus-visible:outline-none
			          focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9D8055]" aria-label="Read more about Faisal Holding">
			<img src="${g}" alt="" class="h-6 w-6 -ml-1"/>
			<span>Explore</span>
		</a>
            </div>
          </div>
        `},300)):(t.style.height="60px",o.style.opacity="0.7",a.style.opacity="0.6",setTimeout(()=>{c.innerHTML=`
          <div class="flex items-center gap-3 h-full !pl-4">
            <div class="w-3 h-3 rounded-sm flex-shrink-0" style="background-color: ${n[s].color}"></div>
            <p class="text-white text-sm tracking-wide uppercase font-medium">${n[s].name}</p>
          </div>
        `},300))}),l=i}function h(){f=setInterval(()=>{const i=(l+1)%n.length;window.innerWidth>=1024?w(i):E(i)},8e3)}function C(){window.innerWidth>=1024?$():I(),h()}let v;window.addEventListener("resize",()=>{clearTimeout(v),v=setTimeout(()=>{clearInterval(f),C()},250)});(m||u)&&C();document.querySelector('img[alt="to_top"]').addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
