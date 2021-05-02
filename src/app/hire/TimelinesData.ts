export const TIMELINES: Timeline[] = [
  {
    year: 'Nov. 2016 (10 months)',
    position: 'Part-time Junior Android Developer',
    employer: 'Erteco Technologies GmbH',
    contents: [
      'Done this',
      'Done that'
    ],
    imageData: {
      path: '/assets/images/suitcase.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Aug. 2017 (1 year 7 months)',
    position: 'Junior Android Developer',
    employer: 'Erteco Technologies GmbH',
    contents: [
      'Done this',
      'Done that'
    ],
    imageData: {
      path: '/assets/images/suitcase.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Feb. 2019 (2 years)',
    position: 'Advanced Android Developer',
    employer: 'it-economics GmbH',
    contents: [
      'Done this',
      'Done that'
    ],
    imageData: {
      // path: '/assets/images/medal.svg', shouldAddCircle: true
      path: '/assets/images/suitcase.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Feb. 2019',
    position: 'Associate Android Developer',
    employer: 'Google Inc.',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Jun. 2019',
    position: 'Certified ScrumMaster (CSM)',
    employer: 'Scrum Alliance',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Nov. 2019',
    position: 'Certified Scrum Developer (CSD)',
    employer: 'it-economics GmbH',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Sep. 2020',
    position: 'Certified Scrum Product Owner (CSPO)',
    employer: 'Scrum Alliance',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Nov. 2020',
    position: 'Crafting Code',
    employer: 'Codurance',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Nov. 2020',
    position: 'Crafted Design',
    employer: 'Codurance',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Jan. 2021 (10 months)',
    position: 'Senior Android Developer',
    employer: 'it-economics GmbH',
    contents: [],
    imageData: {
      path: '/assets/images/suitcase.svg', shouldAddCircle: true
    }
  },
  {
    year: 'Feb. 2021',
    position: 'iSAQB® Software Architecture - Foundation Level',
    employer: 'iSAQB',
    contents: [],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
];

interface Timeline {
  position: string;
  employer: string;
  contents: string[];
  year: string;
  imageData: ImageData;
}

interface Content {
  items: string[];
}

interface ImageData {
  path: string;
  shouldAddCircle: boolean;
}
