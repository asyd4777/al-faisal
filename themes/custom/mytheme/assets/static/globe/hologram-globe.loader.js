{
	
	let html = `
<hyper-globe id="hologram-globe" data-location="13.0803 -84.6565" data-version="21" style="--preview-size: 800px; --globe-scale: 0.82; --globe-damping: 0.5; --map-density: 1; --map-height: 0.55; --point-size: 1.5; --backside-opacity: 0.32; --backside-transition: 0.6; --marker-size: 1.05; --text-size: 0.95; --line-color: #999999; --line-offset: 0.5; --autorotate: true; --autorotate-speed: 0.65; --autorotate-delay: 4; --autorotate-latitude: 10; --title-position: 0 -1; --title-padding: 1.2; --text-padding: 1; --animation: offset; --animation-intensity: 0.41; --animation-scale: 0.75; --animation-speed: 0.25; --point-opacity-map: url('light.jpg'); --marker-image: url('hologram-marker.png'); max-width: 500px; --preview-color: #ffffff; --text-height: 1.1; --line-thickness: 1; --point-image: url('hologram-point.png'); --equator: true; --islands: true; --backside-color: #5095db; --marker-offset: 0.2; --globe-foreground: url('earth-atmosphere.svg'); --point-color: #5095db; --text-color: #000000; --point-color-blend: multiply; --text-outline: #5095db; --text-depth: 1;">
	<a slot="markers" data-location="42 -88" title="CHICAGO" class="globe-marker">
</a>
<a slot="markers" data-location="-39 -77" title="WASHIXGTON D.C." class="globe-marker"></a>
<a slot="markers" data-location="40 -74" title="New York" class="globe-marker"></a>
<a slot="markers" data-location="25 -80" title="MIAMI" class="globe-marker"></a>
<a slot="markers" data-location="52 13" title="BERLIN" class="globe-marker"></a>
<a slot="markers" data-location="42 12" title="ROME" class="globe-marker"></a>
<a slot="markers" data-location="37 3" title="ALGIERS" class="globe-marker">
</a>
<a slot="markers" class="globe-marker" data-location="31 30" title="ALEXANDEIA"></a>
<a slot="markers" class="globe-marker" data-location="25 51" title="DOHA"></a>
<a slot="markers" class="globe-marker" data-location="27 34" title="HURGHADA"></a>
<a slot="markers" class="globe-marker" data-location="30 31" title="CAIRO"></a></hyper-globe>
	`;
	
	let css = `
.globe-marker {
	opacity: 0.8;
}

.marker-hover {
	opacity: 1;
	--marker-size: 1.5;
}

--globe-background {
color:#000000;
background-color:#000000;
}
`;
	
	let script = ``;
	
	
	if ( ! self.confGlobe ) {
		// get the script element
		let elem = document.currentScript;
		if ( elem && elem.isConnected && elem.closest('body') && elem.getAttribute('src') ) {
			
			// get baseurl from script src
			let url = new URL( elem.getAttribute('src'), self.location.href ).href;
			if ( url.startsWith('http') ) {		
				let baseurl = url.substr(0, url.lastIndexOf('/')+1);		
				
				// import hyper globe module once
				if ( ! self.hyperGlobe ) {
					self.hyperGlobe = true;
					import( baseurl + 'hyper-globe.min.js' );
				}			
				
				// inject html
				html = html.replace('<hyper-globe ', `<hyper-globe data-baseurl="${baseurl}" `);
				elem.insertAdjacentHTML('afterend', html);
				if (css)	elem.nextElementSibling.insertAdjacentHTML('afterend', `<style>${css}</style>`);
				if (script) elem.nextElementSibling.addEventListener('complete', new Function(script));
				
			} else {
				console.error('This script was used in the wrong way. It must be loaded via the https: or http: protocol.');
			}
			
		} else {
			console.error('This script was used in the wrong way. It must be a non-module script inside the body element.');
		}
	}	
	
}