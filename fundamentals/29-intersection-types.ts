interface HasId {
  id: string;
}

interface HasTitle {
  title: string;
  description: string;
}

type Course = HasId & HasTitle;
const course: Course = {
  id: '1',
  title: 'Qwe',
  description: 'Aasd'
}