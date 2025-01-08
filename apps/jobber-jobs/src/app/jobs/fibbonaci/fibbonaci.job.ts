import { PulsarClient } from '@jobber/pulsar';
import { Job } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { FibbonaciData } from './fibbonaci-data.interface';

@Job({
  name: 'Fibonacci',
  description: 'Generate a Fibbonaci sequence and store it in the DB.',
})
export class FibbonaciJob extends AbstractJob<FibbonaciData> {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
