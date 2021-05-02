export const TIMELINES: Timeline[] = [
  {
    year: 'Nov. 2016',
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
    year: '2002',
    position: 'Associate Android Developer',
    employer: 'Google Inc.',
    contents: [
      'Done this',
      'Done that'
    ],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: '2002',
    position: 'Scrum Master',
    employer: '',
    contents: [
      'Done this',
      'Done that'
    ],
    imageData: {
      path: '/assets/images/medal.svg', shouldAddCircle: true
    }
  },
  {
    year: '2002',
    position: 'Software Architecture',
    employer: '',
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
