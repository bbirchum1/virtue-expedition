// =======================================================
// The Virtue Expedition — Shared virtue metadata
// Single source of truth for virtue names, numerals,
// taglines, and colors. Loaded by any widget that needs
// virtue-specific content.
// =======================================================

window.VIRTUE_EXPEDITION = window.VIRTUE_EXPEDITION || {};

window.VIRTUE_EXPEDITION.virtues = {
  courage: {
    key: 'courage',
    label: 'Courage',
    numeral: 'I',
    tagline: 'To act well when it is hard to.',
    etymology: 'From the Latin cor, meaning heart.',
    accent: '#E07A3C',
    accentDeep: '#A64E1F',
  },
  honesty: {
    key: 'honesty',
    label: 'Honesty',
    numeral: 'II',
    tagline: 'To be the same person when no one is watching.',
    etymology: 'From the Latin honestas, related to honor.',
    accent: '#4F9BA8',
    accentDeep: '#2E6973',
  },
  responsibility: {
    key: 'responsibility',
    label: 'Responsibility',
    numeral: 'III',
    tagline: 'To own your actions, and keep your word.',
    etymology: 'From the Latin respondere, to answer for.',
    accent: '#6B8E4F',
    accentDeep: '#44602E',
  },
  courtesy: {
    key: 'courtesy',
    label: 'Courtesy',
    numeral: 'IV',
    tagline: 'To treat every person as if they were important.',
    etymology: 'From the Old French curteis, of the court.',
    accent: '#A69684',
    accentDeep: '#6F604F',
  },
  service: {
    key: 'service',
    label: 'Service',
    numeral: 'V',
    tagline: 'To give what you have to someone who needs it.',
    etymology: 'From the Latin servire, to serve.',
    accent: '#9B7049',
    accentDeep: '#6A4A2B',
  },
  perseverance: {
    key: 'perseverance',
    label: 'Perseverance',
    numeral: 'VI',
    tagline: 'To keep going when you want to stop.',
    etymology: 'From the Latin perseverantia.',
    accent: '#6A7A85',
    accentDeep: '#44525D',
  },
  selfgovt: {
    key: 'selfgovt',
    label: 'Self-Government',
    numeral: 'VII',
    tagline: 'To rule yourself, so no one else has to.',
    etymology: 'The final virtue, that holds all others together.',
    accent: '#8A6FA8',
    accentDeep: '#5E4A7A',
  },
};

// Ordered list for iteration
window.VIRTUE_EXPEDITION.virtueOrder = [
  'courage', 'honesty', 'responsibility', 'courtesy',
  'service', 'perseverance', 'selfgovt'
];

// Station metadata (same for every virtue)
window.VIRTUE_EXPEDITION.stations = {
  1: { key: 'invitation',       name: 'The Invitation',     numeral: 'I',   phase: 'encounter'   },
  2: { key: 'first-encounter',  name: 'First Encounter',    numeral: 'II',  phase: 'encounter'   },
  3: { key: 'second-encounter', name: 'Second Encounter',   numeral: 'III', phase: 'encounter'   },
  4: { key: 'investigation',    name: 'The Investigation',  numeral: 'IV',  phase: 'internalize' },
  5: { key: 'reflection',       name: 'The Reflection',     numeral: 'V',   phase: 'internalize' },
  6: { key: 'creation',         name: 'The Creation',       numeral: 'VI',  phase: 'express'     },
  7: { key: 'action',           name: 'The Action',         numeral: 'VII', phase: 'express'     },
};

// Accepts aliases for virtue keys
window.VIRTUE_EXPEDITION.normalizeVirtueKey = function(k) {
  if (!k) return null;
  const aliases = {
    'self-government': 'selfgovt',
    'selfgovernment': 'selfgovt',
    'self-govt': 'selfgovt',
    'self_govt': 'selfgovt',
  };
  const lower = String(k).trim().toLowerCase();
  return aliases[lower] || lower;
};
