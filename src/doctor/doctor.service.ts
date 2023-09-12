import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DoctorDocument, Doctor } from './doctor.model';

@Injectable()
export class DoctorServices {
  constructor(
    @InjectModel(Doctor.name) private doctormodel: Model<DoctorDocument>,
  ) {}

  async create(createPersonDto: any): Promise<Doctor> {
    const createdDoctor = new this.doctormodel(createPersonDto);
    return createdDoctor.save();
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctormodel.find().exec();
  }
}
