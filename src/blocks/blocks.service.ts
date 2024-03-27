import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
@Injectable()
export class BlocksService {

  getAllAddresses() {
    // user fakerjs to generate addresses array
    return Array.from({ length: 5 }, () => faker.string.uuid());
  }

  getBlockDetailsByAddress(address: string) {
    // use fakerjs to generate block details
    return {
      address,
      balance: faker.number.int(),
      gasUsed: faker.number.int(),
    };
  }
}
