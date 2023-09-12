import { Test, TestingModule } from '@nestjs/testing';
import { DoctorServices } from './doctor.service';

describe('DoctorService', () => {
  let service: DoctorServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorServices],
    }).compile();

    service = module.get<DoctorServices>(DoctorServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
