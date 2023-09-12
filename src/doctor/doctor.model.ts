import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Doctor {
  @Prop()
  name: string;

  @Prop()
  age: number;
  @Prop()
  specialization: string;
  @Prop()
  description: string;
}

export type DoctorDocument = Doctor & Document;
export const DoctorSchema = SchemaFactory.createForClass(Doctor);
