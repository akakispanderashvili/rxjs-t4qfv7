import { Observable, of } from 'rxjs';

interface Job {
  id: number;
  name: string;
}

const jobs: Job[] = [
  {
    id: 1,
    name: 'Developer',
  },
  {
    id: 2,
    name: 'Tester',
  },
  {
    id: 3,
    name: 'PM',
  },
];

export function getJob(jobName: string): Observable<Job> {
  return of(jobs.find((job) => job.name === jobName));
}
