/* Curated and attributed public information, verified 1 November 2026.
   The records are editorial summaries, not an automatic news feed. */
(() => {
  const articles = [
    {category:'party',date:'24 Oct 2026',source:'Citi Newsroom',title:'Oforikrom NDC constituency polls affected by ballot-paper delays',summary:'Voting was disrupted when ballot papers for some executive positions were unavailable. Regional party officers intervened as delegates waited at the voting centre.',url:'https://www.citinewsroom.com/2026/10/oforikrom-ndc-polls-hit-by-ballot-paper-delays/',mark:'01'},
    {category:'party',date:'24 Oct 2026',source:'Citi Newsroom',title:'Treasurer aspirant questions decision to continue constituency voting',summary:'An aspirant expressed concerns about proceeding with parts of the polls while ballots for two positions remained outstanding. The account reflects his reported position.',url:'https://www.citinewsroom.com/2026/10/oforikrom-ndc-polls-aspirant-challenges-decision-to-proceed-without-all-ballots/',mark:'02'},
    {category:'community',date:'12 Oct 2026',source:'Oforikrom Municipal Assembly',title:'Municipal-wide clean-up held across key Oforikrom communities',summary:'The Assembly reported a sanitation exercise around Anloga Junction, Tech Junction, Deduako and Ayeduase on 10 October.',url:'https://ofkma.gov.gh/news',mark:'03'},
    {category:'community',date:'5 Oct 2026',source:'Oforikrom Municipal Assembly',title:'New health facility handed over at Ayigya Zongo',summary:'A newly constructed polyclinic, supported by Qatar Charity, was handed over to the Municipal Assembly to improve local access to healthcare.',url:'https://www.ofkma.gov.gh/news/ayigya-zongo-community-gets-health-clinic',mark:'04'},
    {category:'community',date:'11 Aug 2026',source:'Oforikrom Municipal Assembly',title:'Five stalled municipal projects handed over for completion',summary:'The Assembly reported that contractors had received five unfinished facilities, including its administrative block, court-related buildings and a public toilet.',url:'https://www.ofkma.gov.gh/news/five-legacy-projects-oforikrom-set-completion',mark:'05'},
    {category:'community',date:'22 Jun 2026',source:'Oforikrom Municipal Assembly',title:'35 young people receive fruit-processing start-up kits',summary:'Young beneficiaries of an agribusiness training programme received equipment to support new fruit-juice enterprises.',url:'https://ofkma.gov.gh/news/35-youth-receive-fruit-juice-processing-start-kits-oforikrom',mark:'06'}
  ];
  const areas=['Ahenbronum','Anloga East','Anloga West','Anwomaso / Bebre','Aprade / Mmesewam','Ayeduase / Kotei / Twumduase','Ayigya Akatego','Ayigya Zongo','Bomso','Deduako / Kodiekrom / Apemso','Emena / Boadi / Appiadu / Kokoben','Kentinkrono / Nsenie / Oduom','Oforikrom East','Oforikrom West','Tech'];

  const about=document.querySelector('#about .container');
  if(about){
    const block=document.createElement('div');block.className='about-facts content-reveal';
    block.innerHTML=`<div class="facts-head"><div><div class="kicker">Know the constituency</div><h3>Oforikrom, at a glance.</h3><p>Situated in the Ashanti Region within the Greater Kumasi area, Oforikrom is home to established residential, commercial and educational communities. The Municipal Assembly was inaugurated on 15 March 2018 under L.I. 2291 of 2017.</p></div><a href="https://ofkma.gov.gh/assembly/about-us" target="_blank" rel="noopener noreferrer" class="fact-source">Source: Municipal Assembly ↗</a></div><div class="fact-row"><div class="fact-tile"><strong>15</strong><span>Municipal electoral areas</span></div><div class="fact-tile"><strong>2018</strong><span>Municipal Assembly inaugurated</span></div><div class="fact-tile"><strong>Ashanti</strong><span>Region of Ghana</span></div></div><p class="fact-note">Municipal electoral areas and NDC party branches have different administrative structures. The branch register will be added after party verification.</p>`;
    about.append(block);
  }

  const branches=document.querySelector('#branches .container');
  if(branches){
    const section=document.createElement('div');section.className='area-directory content-reveal';
    section.innerHTML=`<div class="area-top"><div><div class="kicker">Municipal reference directory</div><h3>Explore the 15 electoral areas</h3><p>Search the official municipal-area names below. This is a geographic reference, not an NDC membership or branch register.</p></div><label class="area-search"><span aria-hidden="true">⌕</span><input id="area-search" type="search" placeholder="Search an electoral area..." aria-label="Search electoral areas"></label></div><div class="area-chips" id="area-chips"></div><div class="area-source">Based on the <a href="https://www.ofkma.gov.gh/assembly/electorial-areas" target="_blank" rel="noopener noreferrer">Oforikrom Municipal Assembly electoral-area directory ↗</a></div>`;
    branches.append(section);
    const drawAreas=q=>{const list=areas.filter(a=>a.toLowerCase().includes(q.toLowerCase()));document.getElementById('area-chips').innerHTML=list.length?list.map((a,i)=>`<span class="area-chip"><b>${String(i+1).padStart(2,'0')}</b>${a}</span>`).join(''):'<p class="empty">No matching electoral area.</p>'};
    drawAreas('');document.getElementById('area-search').addEventListener('input',e=>drawAreas(e.target.value));
  }

  const leadership=document.querySelector('#leadership .container');
  if(leadership){
    const civic=document.createElement('div');civic.className='civic-note content-reveal';
    civic.innerHTML=`<div class="chairman-spotlight"><div class="chairman-seal" aria-hidden="true"><img src="ndc-umbrella.png" alt=""></div><div class="chairman-copy"><div class="kicker">Constituency leadership</div><h3>Office of the Constituency Chairman</h3><p>The Constituency Chairman coordinates the party's leadership and grassroots organization in Oforikrom. We will publish the chairman's verified name, portrait and official biography after confirmation from the constituency office.</p><div class="chairman-tag"><span class="chairman-dot"></span><span>Chairman's name awaiting official confirmation</span></div></div></div>`;
    leadership.append(civic);
  }

  const news=document.querySelector('#news .container');
  if(news){
    const intro=news.querySelector('.section-top');
    intro.querySelector('p').textContent='Verified reporting and official municipal updates relevant to Oforikrom, with original sources and clear attribution.';
    const controls=document.createElement('div');controls.className='news-controls';controls.innerHTML=`<div class="news-tabs" role="group" aria-label="Filter news"><button type="button" data-category="all" class="selected">All updates</button><button type="button" data-category="party">NDC constituency</button><button type="button" data-category="community">Community & municipality</button></div><span class="news-updated">Curated as of 1 Nov 2026</span>`;
    const grid=news.querySelector('.grid3');grid.classList.add('news-grid');news.insertBefore(controls,grid);
    const render=category=>{
      grid.innerHTML=articles.filter(a=>category==='all'||a.category===category).map(a=>`<article class="card news-card"><div class="news-art ${a.category}"><span class="news-art-label">${a.category==='party'?'PARTY NEWS':'LOCAL DEVELOPMENT'}</span><span class="news-art-number">${a.mark}</span><span class="news-art-icon" aria-hidden="true">${a.category==='party'?'✳':'◈'}</span></div><div class="inside"><div class="news-byline"><span>${a.date}</span><span>${a.source}</span></div><h3>${a.title}</h3><p>${a.summary}</p><a class="news-read" href="${a.url}" target="_blank" rel="noopener noreferrer">Read original report ↗</a></div></article>`).join('');
      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
        const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.08});
        grid.querySelectorAll('.news-card').forEach((e,i)=>{e.classList.add('reveal-ready');e.style.transitionDelay=`${Math.min(i%3,2)*85}ms`;io.observe(e)});
      }
      if(typeof applyLanguage==='function')applyLanguage();
    };
    controls.addEventListener('click',e=>{const button=e.target.closest('button[data-category]');if(!button)return;controls.querySelectorAll('button').forEach(x=>x.classList.toggle('selected',x===button));render(button.dataset.category)});
    render('all');
    const note=document.createElement('p');note.className='news-disclosure';note.textContent='External reporting is summarized for public information. Articles are attributed to their publishers and are not official statements of the NDC Oforikrom Constituency. Municipal programmes are not presented as party projects.';news.append(note);
  }

  Object.assign(translations,{
    'Know the constituency':'Hunu mpasua no', 'Oforikrom, at a glance.':'Oforikrom ho nsɛm tiawa.', 'Municipal electoral areas':'Municipal abatow mpɔtam', 'Municipal Assembly inaugurated':'Municipal Assembly no hyɛɛ aseɛ', 'Region of Ghana':'Ghana mantam',
    'Municipal reference directory':'Municipal nsɛm akoraeɛ', 'Explore the 15 electoral areas':'Hwɛ abatow mpɔtam 15 no', 'Search the official municipal-area names below. This is a geographic reference, not an NDC membership or branch register.':'Hwehwɛ municipal abatow mpɔtam din wɔ aseɛ ha. Ɛnyɛ NDC memba anaa branch din.',
    'Constituency leadership':'Mpasua akannifoɔ', 'Office of the Constituency Chairman':'Mpasua Chairman adwumayɛbea', 'Chairman\'s name awaiting official confirmation':'Yɛretwɛn chairman no din ho nokorɛdi',
    'All updates':'Nsɛm nyinaa', 'NDC constituency':'NDC mpasua', 'Community & municipality':'Mpɔtam ne municipality', 'Curated as of 1 Nov 2026':'Yɛhwɛɛ mu 1 Nov 2026', 'PARTY NEWS':'PARTY NSƐM', 'LOCAL DEVELOPMENT':'MPƆTAM NKƆSOƆ', 'Read original report ↗':'Kenkan asɛm no nyinaa ↗'
  });
  // The public website retains English for any longer editorial text that has not
  // yet received a reviewed Twi translation. Never insert machine-made claims.
  if(typeof applyLanguage==='function')applyLanguage();
})();
