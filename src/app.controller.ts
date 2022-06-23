import {
    Controller,
    Get,
    Param,
    Post,
    Query,
    Body,
    Headers,
} from '@nestjs/common'
import { AppService } from './app.service'
import { CodeDto } from './code/code.dto'
import { CodeService } from './code/code.service'
@Controller()
export class AppController {
    // defined the codeservice
    constructor(
        private readonly appService: AppService,
        private readonly codeService: CodeService,
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Post('save')
    async savecode(@Body() code: CodeDto) {
        const h = await this.codeService.saveCode(code)

        console.log(h)
    }
    @Get('/:id')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async getCode(@Param('id') id: string) {}
}
