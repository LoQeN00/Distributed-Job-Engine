import { PulsarClient, PulsarConsumer } from '@jobber/pulsar';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { FibonacciData } from './fibonacci-data.interface';
import { iterate } from 'fibonacci';

@Injectable()
export class FibbonaciConsumer
  extends PulsarConsumer<FibonacciData>
  implements OnModuleInit
{
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient, 'Fibonacci');
  }

  protected async onMessage(data: FibonacciData): Promise<void> {
    const result = iterate(data.iterations);

    this.logger.log(result);
  }
}
