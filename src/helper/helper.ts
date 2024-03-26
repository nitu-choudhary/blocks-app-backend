import { createHash } from 'crypto';

// helper function to generate a random hash value
export function generateRandomHash(): string {
    return createHash('sha256').update(Math.random().toString()).digest('hex');
}

// helper function to generate a random for gasUsed and blockNumber
export function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000);
}