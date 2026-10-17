import { PaymentService } from '../services/PaymentService';

export class PaymentController {
  constructor(private readonly payments = new PaymentService()) {}

  post(idempotencyKey: string): string {
    return this.payments.charge(idempotencyKey);
  }
}
