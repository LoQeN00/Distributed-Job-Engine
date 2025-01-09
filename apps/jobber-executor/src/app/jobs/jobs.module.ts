import { PulsarModule } from '@jobber/pulsar';
import { Module } from '@nestjs/common';
import { FibbonaciConsumer } from './fibbonaci/fibonacci.consumer';

@Module({
  imports: [PulsarModule],
  providers: [FibbonaciConsumer],
})
export class JobsModule {}
