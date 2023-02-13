import {
  of,
  Observable,
  from,
  tap,
  switchMap,
  mergeMap,
  map,
  reduce,
} from 'rxjs';
import { getJob } from './jobs-api';
import { getPeople } from './people-api';

function getResult(jobNames: string[]): Observable<string[]> {
  return from(jobNames).pipe(
    switchMap((jobName) => getJob(jobName)),
    mergeMap((job) =>
      getPeople(String(job.id)).pipe(
        map((people) =>
          people.map(
            (person) => `${person.name} ${person.lastname} is a ${job.name}`
          )
        )
      )
    ),
    reduce((acc, val) => [...acc, ...val], [])
  );
}

getResult(['Developer', 'Tester', 'PM']).subscribe((x) => console.log(x));
