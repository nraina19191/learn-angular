import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInput } from '../types/userInput';
import { InvestmentService } from '../../investment-results';
import { InvestmentResult } from '../types/investmentResult';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {
  }

  userInput: UserInput = {
    InitialInvestment: 0,
    AnnualInvestment: 0,
    Duration: 10,
    ExpectedReturn: 5
  };

  calculatedResult = output<InvestmentResult[]>();

  onSubmit() {
    this.calculatedResult.emit(this.investmentService.calculateInvestmentResults(this.userInput));
  }
}
