document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------
  // Hobby content — edit this object to change what appears when each
  // object on the table is clicked. `accent` should be one of the
  // existing palette variables from style.css. `icon` is the same SVG
  // markup used for that object's illustration on the table, reused
  // here (at a larger size) inside the detail panel.
  // ------------------------------------------------------------------
  const hobbies = {
    painting: {
      tag: 'studio practice',
      title: 'Weekend Painting',
      accent: 'var(--dusty-pink)',
      text: "Most Sundays I'm elbow-deep in a half-dried palette, working through small still lifes and color studies. It's the one hobby with zero deliverables — just me, gouache, and whatever fruit hasn't gone off yet.",
      fact: 'Current obsession: mixing the perfect "museum wall" grey-green.',
      icon: '<svg viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg"><ellipse class="icon-white" cx="68" cy="55" rx="58" ry="38" transform="rotate(-8 68 55)" /><ellipse class="icon-wood-hole" cx="102" cy="66" rx="12" ry="9" /><circle class="icon-pink" cx="40" cy="34" r="8" /><circle class="icon-sage" cx="33" cy="60" r="8" /><circle class="icon-blue" cx="58" cy="76" r="8" /><circle class="icon-yellow" cx="82" cy="42" r="8" /><line class="icon-outline" x1="18" y1="98" x2="96" y2="14" /><circle class="icon-red" cx="99" cy="11" r="6" /></svg>'
    },
    pottery: {
      tag: 'hand-built ceramics',
      title: 'Clay & Ceramics',
      accent: 'var(--sage-green)',
      text: "I hand-build small pinch pots and lumpy little figures — nothing thrown on a wheel yet. Half of what I make is deliberately wonky; the wobble is kind of the whole point.",
      fact: "I've named exactly one clay figurine. His name is Gerald.",
      icon: '<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg"><ellipse class="icon-cream" cx="70" cy="74" rx="52" ry="16" /><ellipse class="icon-outline-thin" cx="70" cy="72" rx="38" ry="9" /><ellipse class="icon-sage" cx="70" cy="48" rx="17" ry="21" /><circle class="icon-sage" cx="70" cy="22" r="12" /><line class="icon-outline" x1="58" y1="58" x2="52" y2="70" /><line class="icon-outline" x1="82" y1="58" x2="88" y2="70" /></svg>'
    },
    journaling: {
      tag: 'daily pages',
      title: 'Journaling',
      accent: 'var(--muted-red)',
      text: "Ten minutes with coffee before anyone else is awake, usually just a page of whatever's rattling around — half to-do list, half diary entry I'll be mildly embarrassed by later.",
      fact: "I have eleven finished notebooks and can't bring myself to throw a single one away.",
      icon: '<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg"><path class="icon-cream" d="M10 22 L67 14 L67 90 L10 98 Z" /><path class="icon-cream" d="M130 22 L73 14 L73 90 L130 98 Z" /><path class="icon-red" d="M68 8 L72 8 L72 18 L70 15 L68 18 Z" /><line class="icon-outline-thin" x1="70" y1="12" x2="70" y2="96" /><line class="icon-outline-thin" x1="20" y1="34" x2="57" y2="29" /><line class="icon-outline-thin" x1="20" y1="46" x2="57" y2="42" /><line class="icon-outline-thin" x1="20" y1="58" x2="57" y2="55" /><line class="icon-outline-thin" x1="83" y1="29" x2="120" y2="34" /><line class="icon-outline-thin" x1="83" y1="42" x2="120" y2="46" /><line class="icon-outline-thin" x1="83" y1="55" x2="120" y2="58" /><line class="icon-outline" x1="26" y1="94" x2="116" y2="16" /><path class="icon-outline icon-pink" d="M110 12 L126 6 L118 22 Z" /></svg>'
    },
    florals: {
      tag: 'dried & foraged',
      title: 'Flower Arranging',
      accent: 'var(--soft-blue)',
      text: "I keep a rotating arrangement on the table, usually whatever's left at the farmers market on a Sunday afternoon, plus a few dried stems that refuse to die.",
      fact: 'The copper pitcher was a thrift-store find I have refused to polish.',
      icon: '<svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg"><ellipse class="icon-outline" cx="88" cy="86" rx="15" ry="21" /><rect class="icon-wood" x="28" y="60" width="56" height="62" rx="20" /><rect class="icon-wood" x="40" y="42" width="30" height="24" rx="8" /><line class="icon-outline" x1="42" y1="42" x2="30" y2="16" /><line class="icon-outline" x1="55" y1="40" x2="55" y2="8" /><line class="icon-outline" x1="68" y1="42" x2="78" y2="18" /><circle class="icon-pink" cx="30" cy="14" r="10" /><circle class="icon-yellow" cx="55" cy="6" r="10" /><circle class="icon-blue" cx="78" cy="16" r="10" /></svg>'
    },
    reading: {
      tag: 'coffee-table books',
      title: 'Design Books & Coffee',
      accent: 'var(--sunshine-yellow)',
      text: "This stack is equal parts reading material and interior-design homework: architecture monographs, house tours, and the occasional novel wedged in between.",
      fact: 'The mug has survived three moves and one dishwasher incident.',
      icon: '<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg"><rect class="icon-blue" x="10" y="78" width="100" height="16" rx="4" /><rect class="icon-pink" x="18" y="62" width="84" height="16" rx="4" /><rect class="icon-sage" x="26" y="46" width="68" height="16" rx="4" /><ellipse class="icon-outline" cx="82" cy="35" rx="8" ry="10" /><rect class="icon-cream" x="52" y="22" width="28" height="26" rx="6" /><path class="icon-outline-thin" d="M58 16 q3 -6 0 -12" /><path class="icon-outline-thin" d="M68 16 q3 -6 0 -12" /></svg>'
    },
    crochetFlower: {
      tag: 'amigurumi',
      title: 'Crochet',
      accent: 'var(--dusty-pink)',
      text: "I taught myself to crochet from YouTube tutorials during a very long winter. Now I can't sit through a TV episode without yarn in my hands.",
      fact: 'This flower took four attempts before the petals stopped looking like teeth.',
      icon: '<svg viewBox="0 0 110 140" xmlns="http://www.w3.org/2000/svg"><path class="icon-outline" d="M55 136 Q45 100 52 70" /><ellipse class="icon-sage" cx="34" cy="98" rx="12" ry="6" transform="rotate(-25 34 98)" /><circle class="icon-pink" cx="55" cy="35" r="16" /><circle class="icon-pink" cx="78" cy="48" r="16" /><circle class="icon-pink" cx="78" cy="74" r="16" /><circle class="icon-pink" cx="55" cy="87" r="16" /><circle class="icon-pink" cx="32" cy="74" r="16" /><circle class="icon-pink" cx="32" cy="48" r="16" /><circle class="icon-yellow" cx="55" cy="61" r="13" /></svg>'
    },
    crochetCritters: {
      tag: 'amigurumi friends',
      title: 'Crochet Critters',
      accent: 'var(--soft-blue)',
      text: "The chick and the octopus are part of a growing colony of small crocheted creatures that mostly get gifted to friends before I get too attached.",
      fact: 'The octopus has a name too. It is also Gerald. There is a pattern here.',
      icon: '<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg"><path class="icon-line-outline" d="M18 52 q-8 16 2 24" /><path class="icon-line-blue" d="M18 52 q-8 16 2 24" /><path class="icon-line-outline" d="M34 58 q-2 18 8 22" /><path class="icon-line-blue" d="M34 58 q-2 18 8 22" /><path class="icon-line-outline" d="M50 58 q2 18 -8 22" /><path class="icon-line-blue" d="M50 58 q2 18 -8 22" /><circle class="icon-blue" cx="34" cy="34" r="24" /><circle class="icon-dot" cx="25" cy="30" r="3" /><circle class="icon-dot" cx="43" cy="30" r="3" /><ellipse class="icon-yellow" cx="118" cy="58" rx="20" ry="18" /><circle class="icon-yellow" cx="124" cy="30" r="14" /><path class="icon-red" d="M136 28 l10 4 l-10 5 Z" /><circle class="icon-dot" cx="127" cy="27" r="2.5" /><ellipse class="icon-white" cx="108" cy="60" rx="9" ry="6" transform="rotate(-15 108 60)" /></svg>'
    }
  };

  const detailCard = document.getElementById('detailCard');
  const detailTag = document.getElementById('detailTag');
  const detailIcon = document.getElementById('detailIcon');
  const detailTitle = document.getElementById('detailTitle');
  const detailText = document.getElementById('detailText');
  const detailFact = document.getElementById('detailFact');

  const triggers = document.querySelectorAll('[data-hobby]');

  function setActiveStates(key) {
    triggers.forEach((el) => {
      const isActive = el.dataset.hobby === key;
      el.classList.toggle('is-active', isActive);
      if (el.classList.contains('hotspot')) {
        el.setAttribute('aria-pressed', String(isActive));
      }
    });
  }

  function selectHobby(key) {
    const hobby = hobbies[key];
    if (!hobby || !detailCard) return;

    detailCard.classList.add('is-updating');

    window.setTimeout(() => {
      detailCard.style.setProperty('--accent', hobby.accent);
      detailTag.textContent = hobby.tag;
      detailIcon.innerHTML = hobby.icon;
      detailTitle.textContent = hobby.title;
      detailText.textContent = hobby.text;
      detailFact.textContent = hobby.fact ? `"${hobby.fact}"` : '';
      detailCard.classList.remove('is-updating');
    }, 140);

    setActiveStates(key);
  }

  triggers.forEach((el) => {
    el.addEventListener('click', () => selectHobby(el.dataset.hobby));
  });
});