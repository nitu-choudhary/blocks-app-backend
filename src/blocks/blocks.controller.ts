import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BlocksService } from './blocks.service';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get('/addresses')
  getAllAddresses(): string[] {
    return this.blocksService.getAllAddresses();
  }

  @Get('/details/:address')
  getBlockDetails(@Param('address') address: string) {
    const block = this.blocksService.getBlockDetailsByAddress(address);
    if (!block) {
      throw new NotFoundException(`Block with address ${address} not found`);
    }
    return block;
  }
}
