import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorServices } from './doctor/doctor.service';
import { DoctorController } from './doctor/doctor.controller';
import { Doctor, DoctorSchema } from './doctor/doctor.model';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRoot(process.env.MONGODB_URI), // Connect to MongoDB
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
  ],
  controllers: [AppController, DoctorController, DoctorController],
  providers: [AppService, DoctorServices, DoctorServices],
})
export class AppModule {}
