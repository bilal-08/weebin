import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { MongooseModule } from '@nestjs/mongoose'
import { CodeModule } from './code/code.module.js'
import { ConfigModule } from '@nestjs/config'
//imported the CodeModule to be used.
@Module({
    imports: [
        CodeModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URI),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
