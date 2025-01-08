import { PulsarClient, PulsarConsumer } from '@jobber/pulsar';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Message } from 'pulsar-client';

@Injectable()
export class FibbonaciConsumer extends PulsarConsumer implements OnModuleInit {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient, 'Fibonacci');
  }

  protected async onMessage(message: Message): Promise<void> {
    console.log('FibonacciConsumer.onMessagee');
    console.log(message);

    await this.acknowlege(message);
    return;
  }
}
