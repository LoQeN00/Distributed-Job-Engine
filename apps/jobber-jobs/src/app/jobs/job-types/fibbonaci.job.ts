import { Job } from '../../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@Job({
  name: 'Fibbonaci',
  description: 'Generate a Fibbonaci sequence and store it in the DB.',
})
export class FibbonaciJob extends AbstractJob {}
