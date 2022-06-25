import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CodeDto } from './code.dto'
import { SnippetDocument } from './code.schema'
import { uniqueNamesGenerator, names } from 'unique-names-generator'
@Injectable()
export class CodeService {
    constructor(
        @InjectModel('Snippet')
        private readonly snippetModel: Model<SnippetDocument>,
    ) {}

    async saveCode(data: CodeDto) {
        const { id, code, viewOnce } = data
        const result = {
            id:
                id ||
                uniqueNamesGenerator({
                    dictionaries: [names],
                    separator: '',
                }),
            code,
            viewOnce: viewOnce || false,
        }

        const save = await new this.snippetModel(result).save().catch((err) => {
            return { status: 500, message: 'ID already Exists' + err.message }
        })
        return save
    }
    async getCode(id: string) {
        const data = await this.snippetModel.findOne({ id })
        console.log(data)
        if (!data) return { status: 404, message: 'Code not found' }
        if (data.viewOnce && data.count >= 1)
            await this.snippetModel.deleteOne({ id })
        else await this.snippetModel.updateOne({ id }, { $inc: { count: 1 } })
        return data.code
    }
}
