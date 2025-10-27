const C="/themes/custom/mytheme/assets/build/Business_Vericals_Slide1.jpg",L=document.getElementById("mobile-menu-btn"),k=document.getElementById("close-menu-btn"),r=document.getElementById("mobile-menu"),p=document.getElementById("mobile-overlay");L.addEventListener("click",()=>{r.classList.remove("-translate-x-full"),r.classList.add("translate-x-0"),p.classList.remove("hidden")});k.addEventListener("click",()=>{r.classList.remove("translate-x-0"),r.classList.add("-translate-x-full"),p.classList.add("hidden")});p.addEventListener("click",()=>{r.classList.remove("translate-x-0"),r.classList.add("-translate-x-full"),p.classList.add("hidden")});(function(){const e=document.getElementById("hero-video"),t=document.getElementById("video-poster"),i=document.getElementById("play-button");if(!e||!t||!i)return;e.muted=!0,e.playsInline=!0;let s=!1;function o(){t.style.opacity="0",i.style.opacity="0",e.style.opacity="1",e.currentTime=0,e.play().catch(()=>{})}function c(){e.style.opacity="0",t.style.opacity="1",i.style.opacity="1"}setTimeout(()=>{s||(s=!0,o())},2500),e.addEventListener("ended",c),i.addEventListener("click",()=>{o()})})();let d=0;const y=document.querySelectorAll(".slide"),v=document.querySelectorAll(".slider-dot");function x(n){y.forEach((e,t)=>{t===n?(e.classList.add("active"),e.classList.remove("hidden")):(e.classList.remove("active"),e.classList.add("hidden"))}),v.forEach((e,t)=>{t===n?(e.classList.remove("bg-gray-400"),e.classList.add("bg-gray-600")):(e.classList.remove("bg-gray-600"),e.classList.add("bg-gray-400"))})}v.forEach((n,e)=>{n.addEventListener("click",()=>{d=e,x(d)})});setInterval(()=>{d=(d+1)%y.length,x(d)},5e3);const a=[{id:1,name:"Real Estate",color:"#2ECC71",heading:"Al Jazi Real Estate",underlineColor:"#2ECC71",content:"Established in 1995, Al Jazi Real Estate is a subsidiary of Al Faisal Holding and a leading real estate developer in Qatar. Known for its high-end residential and commercial properties.",image:C},{id:2,name:"Hospitality",color:"#3498DB",heading:"Al Jazi Hospitality",underlineColor:"#3498DB",content:"Al Jazi Hospitality offers world-class hotel and leisure experiences, managing premium resorts and catering services designed to deliver comfort and excellence.",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"},{id:3,name:"Construction & Project Management",color:"#E67E22",heading:"Aamal Construction",underlineColor:"#E67E22",content:"Specializing in construction and infrastructure projects, delivering innovative solutions in residential, commercial, and industrial sectors.",image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"},{id:4,name:"Culture, Education, Leisure, Sport",color:"#9B59B6",heading:"Al Faisal Cultural Ventures",underlineColor:"#9B59B6",content:"Promoting cultural exchange and education through investments in institutions, sports facilities, and creative community projects.",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"},{id:5,name:"Services",color:"#1ABC9C",heading:"Al Jazi Services",underlineColor:"#1ABC9C",content:"Providing diverse services including facilities management, maintenance, and technical support for both residential and commercial clients.",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"},{id:6,name:"Trading & Distribution",color:"#F1C40F",heading:"Aamal Trading",underlineColor:"#F1C40F",content:"A trusted leader in distribution, offering a wide range of consumer and industrial products backed by strong logistics and reliable partnerships.",image:"https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1200&auto=format&fit=crop"},{id:7,name:"Financial Investments",color:"#E74C3C",heading:"Aamal Investments",underlineColor:"#E74C3C",content:"Focused on strategic financial investments that foster growth and sustainability across diverse economic sectors.",image:"https://images.unsplash.com/photo-1522205408450-add114ad53fe?q=80&w=1200&auto=format&fit=crop"},{id:8,name:"Manufacturing",color:"#F39C12",heading:"Aamal Manufacturing",underlineColor:"#F39C12",content:"A pioneer in industrial production, supporting Qatar's self-sufficiency through innovation and quality manufacturing facilities.",image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"},{id:9,name:"Aamal Company Q.P.S.C",color:"#5DADE2",heading:"Aamal Company Q.P.S.C",underlineColor:"#5DADE2",content:"The parent holding company driving diversification and excellence across all business verticals under Al Faisal Holding.",image:"https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1200&auto=format&fit=crop"}];let l=0,g;const u=document.getElementById("accordion-container"),m=document.getElementById("mobile-accordion-container");function A(){u&&(u.innerHTML="",a.forEach((n,e)=>{const t=document.createElement("div");t.className="accordion-panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out",t.style.flex=e===l?"1 1 70%":"1 1 5%",t.dataset.index=e;const i=document.createElement("img");i.src=n.image,i.alt=n.name,i.className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700",i.style.opacity=e===l?"1":"0.7";const s=document.createElement("div");s.className="absolute inset-0 bg-black transition-opacity duration-700",s.style.opacity=e===l?"0.3":"0.5";const o=document.createElement("div");o.className="absolute inset-0 flex items-end transition-all duration-700",e===l?o.innerHTML=`
        <div class="flex items-end gap-12 !p-8 w-full">
          <div class="flex flex-col items-center gap-4">
            <p class="text-white text-lg tracking-widest uppercase vertical-text">${n.name}</p>
            <div class="w-4 h-4 rounded-sm" style="background-color: ${n.color}"></div>
          </div>
          <div class="text-white space-y-6 max-w-2xl flex flex-col gap-6 !mb-20 !ml-20">
            <h2 class="text-3xl font-light underline underline-offset-8 tracking-wide" style="text-decoration-color: ${n.underlineColor}">${n.heading}</h2>
            <p class="text-2xl text-gray-300 leading-relaxed">${n.content}</p>
            <button class="text-white !px-6 !py-2 border border-[#9D8055] font-medium hover:bg-[#9D8055] transition-all duration-300 rounded text-lg w-[200px] text-left">
              Explore
            </button>
          </div>
        </div>
      `:o.innerHTML=`
        <div class="w-full h-full flex items-end justify-center !pb-8">
          <div class="flex flex-col items-center gap-4">
            <p class="text-white text-lg tracking-widest uppercase vertical-text">${n.name}</p>
            <div class="w-4 h-4 rounded-sm" style="background-color: ${n.color}"></div>
          </div>
        </div>
      `,t.addEventListener("click",()=>{e!==l&&(clearInterval(g),b(e),f())}),t.appendChild(i),t.appendChild(s),t.appendChild(o),u.appendChild(t)}))}function b(n){u.querySelectorAll(".accordion-panel").forEach((t,i)=>{const s=t.querySelector("img"),o=t.querySelector(".absolute.bg-black"),c=t.querySelector(".absolute.inset-0.flex");i===n?(t.style.flex="1 1 70%",s.style.opacity="1",o.style.opacity="0.3",setTimeout(()=>{c.innerHTML=`
          <div class="flex items-end gap-12 !p-8 w-full">
            <div class="flex flex-col items-center gap-4">
              <p class="text-white text-lg tracking-widest uppercase vertical-text">${a[i].name}</p>
              <div class="w-4 h-4 rounded-sm" style="background-color: ${a[i].color}"></div>
            </div>
            <div class="text-white space-y-6 max-w-2xl flex flex-col gap-6 !mb-20 !ml-20">
              <h2 class="text-3xl font-light underline underline-offset-8 tracking-wide" 
                  style="text-decoration-color: ${a[i].underlineColor}">
                  ${a[i].heading}
              </h2>
              <p class="text-2xl text-gray-300 leading-relaxed">${a[i].content}</p>
              <button class="text-white !px-6 !py-2 border border-[#9D8055] font-medium hover:bg-[#9D8055] 
                             transition-all duration-300 rounded text-lg w-[200px] text-left">
                Explore
              </button>
            </div>
          </div>
        `},300)):(t.style.flex="1 1 5%",s.style.opacity="0.7",o.style.opacity="0.5",setTimeout(()=>{c.innerHTML=`
          <div class="w-full h-full flex items-end justify-center !pb-8">
            <div class="flex flex-col items-center gap-4">
              <p class="text-white text-lg tracking-widest uppercase vertical-text">${a[i].name}</p>
              <div class="w-4 h-4 rounded-sm" style="background-color: ${a[i].color}"></div>
            </div>
          </div>
        `},300))}),l=n}function $(){m&&(m.innerHTML="",a.forEach((n,e)=>{const t=document.createElement("div");t.className="mobile-accordion-panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out",t.style.height=e===l?"400px":"60px",t.dataset.index=e;const i=document.createElement("img");i.src=n.image,i.alt=n.name,i.className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700",i.style.opacity=e===l?"1":"0.7";const s=document.createElement("div");s.className="absolute inset-0 bg-black transition-opacity duration-700",s.style.opacity=e===l?"0.3":"0.6";const o=document.createElement("div");o.className="absolute inset-0 p-4 flex flex-col justify-end transition-all duration-700",e===l?o.innerHTML=`
        <div class="text-white space-y-6 !p-8">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-3 h-3 rounded-sm" style="background-color: ${n.color}"></div>
            <p class="text-xs tracking-wide uppercase">${n.name}</p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-xl font-light underline underline-offset-4 tracking-wide" style="text-decoration-color: ${n.underlineColor}">${n.heading}</h3>
            <p class="text-lg text-gray-300 leading-relaxed">${n.content}</p>
            <button class="text-white mt-3 !px-4 !py-1.5 border border-[#9D8055] font-medium hover:bg-[#9D8055] transition-all duration-300 rounded text-sm text-left w-[150px]">
              Explore
            </button>
          </div>
        </div>
      `:o.innerHTML=`
        <div class="flex items-center gap-3 h-full !pl-2">
          <div class="w-3 h-3 rounded-sm flex-shrink-0" style="background-color: ${n.color}"></div>
          <p class="text-white text-sm tracking-wide uppercase font-medium">${n.name}</p>
        </div>
      `,t.addEventListener("click",()=>{e!==l&&(clearInterval(g),w(e),f())}),t.appendChild(i),t.appendChild(s),t.appendChild(o),m.appendChild(t)}))}function w(n){m.querySelectorAll(".mobile-accordion-panel").forEach((t,i)=>{const s=t.querySelector("img"),o=t.querySelector(".absolute.bg-black"),c=t.querySelector(".absolute.inset-0.p-4");i===n?(t.style.height="400px",s.style.opacity="1",o.style.opacity="0.3",setTimeout(()=>{c.innerHTML=`
          <div class="text-white space-y-3 opacity-0 !p-8" style="animation: fadeIn 0.7s forwards;">
            <div class="flex items-center gap-2 !mb-2">
              <div class="w-3 h-3 rounded-sm" style="background-color: ${a[i].color}"></div>
              <p class="text-xs tracking-wide uppercase">${a[i].name}</p>
            </div>
            <div class="flex flex-col gap-3">
              <h3 class="text-xl font-light underline underline-offset-4 tracking-wide" style="text-decoration-color: ${a[i].underlineColor}">${a[i].heading}</h3>
              <p class="text-sm text-gray-300 leading-relaxed">${a[i].content}</p>
              <button class="text-white mt-3 !px-4 !py-1.5 border border-[#9D8055] font-medium hover:bg-[#9D8055] transition-all duration-300 rounded text-sm w-[150px] text-left">
                Explore
              </button>
            </div>
          </div>
        `},300)):(t.style.height="60px",s.style.opacity="0.7",o.style.opacity="0.6",setTimeout(()=>{c.innerHTML=`
          <div class="flex items-center gap-3 h-full !pl-4">
            <div class="w-3 h-3 rounded-sm flex-shrink-0" style="background-color: ${a[i].color}"></div>
            <p class="text-white text-sm tracking-wide uppercase font-medium">${a[i].name}</p>
          </div>
        `},300))}),l=n}function f(){g=setInterval(()=>{const n=(l+1)%a.length;window.innerWidth>=1024?b(n):w(n)},8e3)}function E(){window.innerWidth>=1024?A():$(),f()}let h;window.addEventListener("resize",()=>{clearTimeout(h),h=setTimeout(()=>{clearInterval(g),E()},250)});(u||m)&&E();document.querySelector('img[alt="to_top"]').addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
