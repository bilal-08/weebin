import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CodeDto } from './code.dto';
import { SnippetDocument } from './code.schema';

@Injectable()
export class CodeService {

constructor(@InjectModel('Snippet') private readonly snippetModel:Model<SnippetDocument>){}
    
async saveCode(data:CodeDto){
    const {id,code,viewOnce} = data
    const result = {
        id : id || 'some-random-id',
        code,
        viewOnce : viewOnce || false
    }

    const save = await new this.snippetModel(result).save()
    console.log(save)
    return save;

}
async getCode(id:string){
    const data = await this.snippetModel.findOne({id});
    if(!data) return {status:404}
    else {
        await this.snippetModel.updateOne({id},{count:data.count++})
        return data.code};
}

}
