import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from 'src/app.controller';
import { Snippet, SnippetModel } from './code.schema';
import { CodeService } from './code.service';

@Module({
    imports : [MongooseModule.forFeature([{name:'Snippet',schema:SnippetModel}])],
    controllers :[],
    providers:[CodeService]
    // exports:[SnippetModel]
})
export class CodeModule {}