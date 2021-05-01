export const TIMELINES: Timeline[] = [
  { header: 'header1', content: 'content1', year: 2009},
  { header: 'header2', content: 'content2', year: 2002},
  { header: 'header3', content: 'content3', year: 2001},
];

interface Timeline {
  header: string;
  content: string;
  year: number;
}
