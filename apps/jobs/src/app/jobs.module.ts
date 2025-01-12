import { AUTH_PACKAGE_NAME } from '@jobber/grpc';
import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { FibbonaciJob } from './jobs/fibbonaci/fibbonaci.job';
import { JobsResolver } from './jobs.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PulsarModule } from '@jobber/pulsar';
import { JobsService } from './jobs.service';

@Module({
  imports: [
    PulsarModule,
    DiscoveryModule,
    ClientsModule.register([
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/auth.proto'),
        },
      },
    ]),
  ],
  providers: [FibbonaciJob, JobsService, JobsResolver],
})
export class JobsModule {}
