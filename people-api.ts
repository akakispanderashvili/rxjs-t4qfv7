import { Observable, of } from 'rxjs';

interface Person {
  id: number;
  jobId: number;
  name: string;
  lastname: string;
}

const people: Person[] = [
  {
    id: 1,
    name: 'Giorgi',
    lastname: 'Bazera',
    jobId: 1,
  },
  {
    id: 2,
    name: 'Giorgi',
    lastname: 'Gagosha',
    jobId: 1,
  },
  {
    id: 3,
    name: 'Tazo',
    lastname: 'Vekua',
    jobId: 2,
  },
  {
    id: 4,
    name: 'Maarten',
    lastname: 'Piso',
    jobId: 3,
  },
];

export function getPeople(jobId: string): Observable<Person[]> {
  return of(people.filter((person) => person.jobId === Number(jobId)));
}
