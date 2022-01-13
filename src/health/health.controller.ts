import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private readonly HealthCheckService: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.HealthCheckService.check([
      () => this.http.pingCheck('nestjs-docs', 'https://www.nestjs.com'),
    ]);
  }
}
