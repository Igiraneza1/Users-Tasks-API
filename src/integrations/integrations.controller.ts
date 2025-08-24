import { Controller, Post, Body } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';

@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post('notion')
  async syncNotion(@Body() task: any) {
    await this.integrationsService.syncToNotion(task);
    return { message: 'Task synced to Notion' };
  }

  @Post('google-calendar')
  async syncGoogle(@Body() task: any) {
    await this.integrationsService.syncToGoogleCalendar(task);
    return { message: 'Task synced to Google Calendar' };
  }
}
