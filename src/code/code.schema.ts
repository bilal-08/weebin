
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Snippet {
  @Prop({required:true,type:String,unique:true})
  id: number | string;

  @Prop({required:true,type:String})
  code: string;

  @Prop({required:true,type:Number,default:0})
  count : number;
  @Prop({required:false,type:Boolean})
  viewOnce:Boolean;
  
}

export type SnippetDocument = Snippet & Document;


export const SnippetModel = SchemaFactory.createForClass(Snippet);
