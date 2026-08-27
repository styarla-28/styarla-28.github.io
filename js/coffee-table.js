document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------
  // Hobby content — edit this object to change what appears when each
  // object on the table is clicked. `accent` should be one of the
  // existing palette variables from style.css.
  // ------------------------------------------------------------------
  const hobbies = {
    painting: {
      emoji: '🎨',
      tag: 'studio practice',
      title: 'Weekend Painting',
      accent: 'var(--dusty-pink)',
      text: "Most Sundays I'm elbow-deep in a half-dried palette, working through small still lifes and color studies. It's the one hobby with zero deliverables — just me, gouache, and whatever fruit hasn't gone off yet.",
      fact: 'Current obsession: mixing the perfect "museum wall" grey-green.'
    },
    pottery: {
      emoji: '🏺',
      tag: 'hand-built ceramics',
      title: 'Clay & Ceramics',
      accent: 'var(--sage-green)',
      text: "I hand-build small pinch pots and lumpy little figures — nothing thrown on a wheel yet. Half of what I make is deliberately wonky; the wobble is kind of the whole point.",
      fact: "I've named exactly one clay figurine. His name is Gerald."
    },
    florals: {
      emoji: '💐',
      tag: 'dried & foraged',
      title: 'Flower Arranging',
      accent: 'var(--soft-blue)',
      text: "I keep a rotating arrangement on the table, usually whatever's left at the farmers market on a Sunday afternoon, plus a few dried stems that refuse to die.",
      fact: 'The copper pitcher was a thrift-store find I have refused to polish.'
    },
    reading: {
      emoji: '📚',
      tag: 'coffee-table books',
      title: 'Design Books & Coffee',
      accent: 'var(--sunshine-yellow)',
      text: "This stack is equal parts reading material and interior-design homework: architecture monographs, house tours, and the occasional novel wedged in between.",
      fact: 'The mug has survived three moves and one dishwasher incident.'
    },
    crochetFlower: {
      emoji: '🧶',
      tag: 'amigurumi',
      title: 'Crochet',
      accent: 'var(--dusty-pink)',
      text: "I taught myself to crochet from YouTube tutorials during a very long winter. Now I can't sit through a TV episode without yarn in my hands.",
      fact: 'This flower took four attempts before the petals stopped looking like teeth.'
    },
    crochetCritters: {
      emoji: '🐙',
      tag: 'amigurumi friends',
      title: 'Crochet Critters',
      accent: 'var(--soft-blue)',
      text: "The chick and the octopus are part of a growing colony of small crocheted creatures that mostly get gifted to friends before I get too attached.",
      fact: 'The octopus has a name too. It is also Gerald. There is a pattern here.'
    }
  };

  const detailCard = document.getElementById('detailCard');
  const detailTag = document.getElementById('detailTag');
  const detailEmoji = document.getElementById('detailEmoji');
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
      detailEmoji.textContent = hobby.emoji;
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