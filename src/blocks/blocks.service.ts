import { Injectable } from '@nestjs/common';
import { ethereumAddresses, ethereumBlocks } from './mockData';

@Injectable()
export class BlocksService {

  getAllAddresses() {
    return ethereumAddresses;
  }

  getBlockDetailsByAddress(address: string) {
    return ethereumBlocks.find(block => block.address === address);
  }
}
