import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
// import { AppController } from 'src/app.controller';
import { SnippetModel } from './code.schema.js'
import { CodeService } from './code.service.js'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Snippet', schema: SnippetModel }]),
    ],
    controllers: [],
    providers: [CodeService],
    exports: [CodeService],
    // exports:[SnippetModel]
})
export class CodeModule {}
