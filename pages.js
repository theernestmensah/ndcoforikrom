/* All routes are real HTML files. Client script reuses the established shared shell. */
(() => {
  const filename = location.pathname.split('/').pop() || 'index.html';
  const current = filename.replace(/\.html$/,'') || 'index';
  const route = ({index:'home',about:'about',leadership:'leadership',branches:'branches',news:'news',gallery:'gallery',resources:'resources',contact:'contact',portal:'portal'})[current] || 'home';
  document.body.classList.add('page-'+route);
  const routeConfig={
    home:{label:'Welcome',title:'Home',desc:'The NDC Oforikrom constituency digital home.'},
    about:{label:'Our Constituency',title:'About Oforikrom',desc:'A look at our community, its history and the principles that bring us together.',image:'knust-campus.webp',credit:'KNUST campus · Benard 930 / CC0'},
    leadership:{label:'The People Behind the Work',title:'Constituency Leadership',desc:'A dedicated home for the officers serving the NDC in Oforikrom.',image:'knust-building.webp',credit:'KNUST · Maame1Yaa / CC0'},
    branches:{label:'Our Grassroots',title:'Branches & Electoral Areas',desc:'Understand local administrative areas and connect with constituency structures.',image:'kumasi-road.webp',credit:'Kumasi context · JulianGrayscales / CC BY-SA 4.0'},
    news:{label:'From the Constituency',title:'News & Updates',desc:'Current NDC reporting and locally relevant developments with transparent sourcing.',image:'kejetia-market.webp',credit:'Greater Kumasi context · Afus199620 / CC0'},
    gallery:{label:'Our Community in Pictures',title:'Photo Gallery',desc:'A visual introduction to our surroundings as we build the official constituency event archive.',image:'knust-campus.webp',credit:'KNUST campus · Benard 930 / CC0'},
    resources:{label:'Knowledge & Reference',title:'Resources',desc:'Official documents, public information and useful links gathered in one place.',image:'knust-building.webp',credit:'KNUST · Maame1Yaa / CC0'},
    contact:{label:'Stay in Touch',title:'Contact the Constituency',desc:'Prepare an enquiry or find verified information channels.',image:'kumasi-road.webp',credit:'Greater Kumasi context · JulianGrayscales / CC BY-SA 4.0'}
  };
  const targets={home:'index.html',about:'about.html',leadership:'leadership.html',branches:'branches.html',news:'news.html',gallery:'gallery.html',resources:'resources.html',contact:'contact.html',portal:'portal.html',initiatives:'about.html#initiatives'};
  // Set up consistent links, including calls to action and footer entries.
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    const anchor=a.getAttribute('href').slice(1);if(anchor in targets)a.href=targets[anchor];
  });
  document.querySelectorAll('#links a[href], .footer a[href]').forEach(a=>{
    try{const file=new URL(a.href,location.href).pathname.split('/').pop();if(file===filename||(!file&&route==='home'))a.classList.add('page-active')}catch{}
  });
  const links=document.getElementById('links');
  const contactLink=links.querySelector('a[href="contact.html"]');
  for(const [name,href] of [['Gallery','gallery.html'],['Resources','resources.html']]){
    if(!links.querySelector(`a[href="${href}"]`)){
      const a=document.createElement('a');a.href=href;a.textContent=name;if(route===name.toLowerCase())a.className='page-active';links.insertBefore(a,contactLink);
    }
  }
  const footerExplore=document.querySelector('.foot-grid > div:nth-child(2)');
  if(footerExplore){const a=document.createElement('a');a.href='gallery.html';a.textContent='Photo Gallery';footerExplore.append(a)}

  const publicEl=document.getElementById('public');
  const hero=document.querySelector('.hero'),strip=document.querySelector('.strip');
  const allSections=[...publicEl.querySelectorAll(':scope > section')];
  const displayed=route==='home'?['about','leadership','initiatives','news','contact']:route==='about'?['about','initiatives']:route==='portal'?[]:[route];
  for(const el of allSections)if(!displayed.includes(el.id))el.hidden=true;
  if(route!=='home'){hero.hidden=true;strip.hidden=true}
  const page=routeConfig[route];
  if(route!=='home'&&route!=='portal'&&page){
    const banner=document.createElement('div');banner.className='page-hero';
    banner.innerHTML=`<img src="${page.image}" alt="Regional context photograph" fetchpriority="high"><div class="container"><div class="breadcrumb"><a href="index.html">Home</a><span>›</span>${page.label}</div><h1>${page.title}</h1><p>${page.desc}</p><span class="caption">${page.credit}</span></div>`;
    publicEl.prepend(banner);
  }
  if(route==='home'){
    const frame=document.createElement('div');frame.className='home-visual';
    frame.innerHTML='<img src="knust-campus.webp" alt="KNUST campus grounds, in the Greater Kumasi area"><span class="photo-caption">KNUST · Greater Kumasi context</span>';
    hero.querySelector('.container').append(frame);
    const aboutMore=document.createElement('div');aboutMore.className='home-more';aboutMore.innerHTML='<a href="about.html">Learn more about Oforikrom ↗</a>';document.querySelector('#about .container').append(aboutMore);
    const leadershipMore=document.createElement('div');leadershipMore.className='home-more';leadershipMore.innerHTML='<a href="leadership.html">Meet constituency leadership ↗</a>';document.querySelector('#leadership .container').append(leadershipMore);
    const newsMore=document.createElement('div');newsMore.className='home-more';newsMore.innerHTML='<a href="news.html">All news and updates ↗</a>';document.querySelector('#news .container').append(newsMore);
  }
  // Photographs here represent geographic surroundings, not political events.
  const existingPhoto=document.querySelector('#leadership .feature-photo');
  if(existingPhoto){existingPhoto.classList.add('real-photo');const source=document.createElement('small');source.className='photo-source';source.innerHTML='<a class="credit-link" href="https://commons.wikimedia.org/wiki/File:Kwami_Building,_KNUST.jpg" target="_blank" rel="noopener">KNUST photograph: Maame1Yaa (CC0)</a>';existingPhoto.querySelector('.photo-panel').append(source)}

  if(route==='gallery'){
    const gallery=document.createElement('section');gallery.className='gallery-section';gallery.id='gallery';
    gallery.innerHTML=`<div class="container"><div class="gallery-lead"><div><div class="kicker">Photography</div><h2>Views from our wider community.</h2></div><p>From university grounds to city streets, these images highlight the environment surrounding Oforikrom.</p></div><div class="gallery-disclaimer">These are documentary photographs of KNUST and the wider Kumasi area. They are not images of NDC Oforikrom meetings, campaigns or constituency projects.</div><div class="gallery-grid">
      <button class="gallery-frame" data-image="knust-campus.webp" data-caption="KNUST campus hockey pitch"><img src="knust-campus.webp" alt="Hockey pitch and green grounds at KNUST" loading="lazy"><span class="gallery-caption"><b>KNUST Campus Grounds</b><small>Education · KNUST</small></span></button>
      <button class="gallery-frame" data-image="knust-building.webp" data-caption="Kwami Building, KNUST"><img src="knust-building.webp" alt="Kwami Building at KNUST" loading="lazy"><span class="gallery-caption"><b>Kwami Building</b><small>Learning · KNUST</small></span></button>
      <button class="gallery-frame" data-image="kumasi-road.webp" data-caption="Road and communities in Kumasi"><img src="kumasi-road.webp" alt="Road and buildings in Kumasi" loading="lazy"><span class="gallery-caption"><b>Kumasi Streets</b><small>Urban life · Greater Kumasi</small></span></button>
      <button class="gallery-frame" data-image="kejetia-market.webp" data-caption="Kejetia Market, Kumasi"><img src="kejetia-market.webp" alt="Bustling Kejetia Market in Kumasi" loading="lazy"><span class="gallery-caption"><b>Kejetia Market</b><small>Commerce · Kumasi</small></span></button>
    </div><div class="gallery-credits">Image sources: <a href="https://commons.wikimedia.org/wiki/File:KNUST_Campus_Hockey_Pitch.jpg" target="_blank" rel="noopener">Benard 930 (CC0)</a> · <a href="https://commons.wikimedia.org/wiki/File:Kwami_Building,_KNUST.jpg" target="_blank" rel="noopener">Maame1Yaa (CC0)</a> · <a href="https://commons.wikimedia.org/wiki/File:Road_Kumasi.jpg" target="_blank" rel="noopener">JulianGrayscales (CC BY-SA 4.0)</a> · <a href="https://commons.wikimedia.org/wiki/File:Kejetia-Markt.jpg" target="_blank" rel="noopener">Afus199620 (CC0)</a>. Photos are displayed with cropping only. <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0 license</a>.</div></div>`;
    publicEl.append(gallery);
    const lightbox=document.createElement('div');lightbox.className='image-lightbox';lightbox.setAttribute('role','dialog');lightbox.setAttribute('aria-modal','true');lightbox.setAttribute('aria-label','Photo viewer');
    lightbox.innerHTML='<button type="button" aria-label="Close photo">×</button><div><img alt="Enlarged photograph"><div class="lightbox-label"></div></div>';document.body.append(lightbox);
    const close=()=>{lightbox.classList.remove('open');document.body.style.overflow=''};
    gallery.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{lightbox.querySelector('img').src=b.dataset.image;lightbox.querySelector('img').alt=b.dataset.caption;lightbox.querySelector('.lightbox-label').textContent=b.dataset.caption;lightbox.classList.add('open');document.body.style.overflow='hidden';lightbox.querySelector('button').focus()}));
    lightbox.querySelector('button').addEventListener('click',close);lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
  if(route==='resources'){
    const resource=document.createElement('section');resource.className='resources-wrap';resource.id='resources';
    resource.innerHTML=`<div class="container"><div class="resources-lead"><div class="kicker">Public documents</div><h2>Reliable links. Clear information.</h2><p class="empty">These lead to the publishing organizations. A constituency-specific document library will be enabled when official materials are supplied.</p></div><div class="resource-grid"><div class="resource-item"><span class="resource-icon">▤</span><h3>National NDC Website</h3><p>National party information, announcements and official publications.</p><a href="https://ndc.org.gh/" target="_blank" rel="noopener noreferrer">Visit source ↗</a></div><div class="resource-item"><span class="resource-icon">⌖</span><h3>Municipal Electoral Areas</h3><p>Administrative geographic reference for the 15 municipal electoral areas.</p><a href="https://www.ofkma.gov.gh/assembly/electorial-areas" target="_blank" rel="noopener noreferrer">Open directory ↗</a></div><div class="resource-item"><span class="resource-icon">▣</span><h3>Oforikrom Assembly Documents</h3><p>Municipal public records, information manuals and development documents.</p><a href="https://www.ofkma.gov.gh/downloads" target="_blank" rel="noopener noreferrer">View downloads ↗</a></div><div class="resource-item"><span class="resource-icon">◈</span><h3>Official Assembly News</h3><p>Announcements and community updates from the municipal administration.</p><a href="https://ofkma.gov.gh/news" target="_blank" rel="noopener noreferrer">Read updates ↗</a></div></div></div>`;
    publicEl.append(resource);
  }
  if(route==='contact'){
    const button=document.querySelector('#contact .cta button');if(button)button.textContent='Go to enquiry form ↓';
    const form=document.querySelector('#contactForm form');
    if(form){
      form.onsubmit=null;
      form.addEventListener('submit',async e=>{
        e.preventDefault();const f=new FormData(form);
        const value=`NDC Oforikrom enquiry\nName: ${f.get('name')||form.querySelectorAll('input')[0].value}\nEmail: ${form.querySelector('input[type=email]').value}\nSubject: ${form.querySelector('select').value}\nMessage: ${form.querySelector('textarea').value}`;
        try{await navigator.clipboard.writeText(value);toast('Enquiry copied. Official sending will be enabled after contact details are verified.')}catch{toast('Copy unavailable in this browser. Official sending is not yet enabled.')}
      });
      form.querySelector('button[type=submit],button.btn')?.replaceChildren('Copy enquiry text');
    }
  }
  if(route==='portal'){
    document.querySelector('.public').classList.add('hidden');
    document.getElementById('portal').classList.add('active');
    showPanel('overview');
  }
  // On public pages, take portal entry to its independent page.
  if(route!=='portal'){
    window.showPortal=function(view='overview'){location.href='portal.html'+(view&&view!=='overview'?'#'+view:'')};
  }
  document.title=(route==='home'?'NDC Oforikrom Constituency':(page?.title||'Member Portal')+' | NDC Oforikrom')+' · Ashanti Region';
  if(typeof applyLanguage==='function')applyLanguage();
})();
