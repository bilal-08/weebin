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
        const data = await this.codeService.saveCode(code)
        return data
    }

    @Get('/:id')
    async getCode(@Param('id') id: string) {
        return await this.codeService.getCode(id)
    }
}
