import { cache } from '../infrastructure/cache';

export class PaymentService {
  charge(idempotencyKey: string): string {
    const hit = cache.get(idempotencyKey);
    if (hit) return hit;
    const result = `charged:${idempotencyKey}`;
    cache.set(idempotencyKey, result);
    return result;
  }
}
