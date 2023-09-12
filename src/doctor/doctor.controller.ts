import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorServices } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly DoctorService: DoctorServices) {}

  @Post()
  async create(@Body() createDoctorDto: any) {
    return this.DoctorService.create(createDoctorDto);
  }

  @Get()
  async findAll() {
    return this.DoctorService.findAll();
  }
}
