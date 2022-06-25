import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { MongooseModule } from '@nestjs/mongoose'
import { CodeModule } from './code/code.module.js'
//imported the CodeModule to be used.
@Module({
    imports: [
        CodeModule,
        MongooseModule.forRoot(
            'mongodb+srv://billa:billasenpai@cluster0.6bhqd.mongodb.net/?retryWrites=true&w=majority',
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
