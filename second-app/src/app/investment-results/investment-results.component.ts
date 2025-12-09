import { Component, input } from '@angular/core';
import type { InvestmentResult } from '../types/investmentResult';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  result = input<InvestmentResult[]>()
}
