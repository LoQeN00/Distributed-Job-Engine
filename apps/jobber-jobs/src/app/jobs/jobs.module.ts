import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { FibbonaciJob } from './job-types/fibbonaci.job';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';

@Module({
  imports: [DiscoveryModule],
  providers: [FibbonaciJob, JobsService, JobsResolver],
})
export class JobsModule {}
