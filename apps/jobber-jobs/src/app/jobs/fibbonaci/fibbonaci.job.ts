import { PulsarClient } from '@jobber/pulsar';
import { Job } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { FibbonaciData } from './fibbonaci-data.message';

@Job({
  name: 'Fibonacci',
  description: 'Generate a Fibbonaci sequence and store it in the DB.',
})
export class FibbonaciJob extends AbstractJob<FibbonaciData> {
  protected messageClass = FibbonaciData;
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
