// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { Injectable } from "@angular/core";
import { UserInput } from "./app/types/userInput";
import { InvestmentResult } from "./app/types/investmentResult";

@Injectable({
  providedIn: "root"
})
export class InvestmentService {

  calculateInvestmentResults(userInput: UserInput): InvestmentResult[] {
    const annualData: InvestmentResult[] = [];
    let investmentValue = userInput.InitialInvestment;

    for (let i = 0; i < userInput.Duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.ExpectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.AnnualInvestment;
      const totalInterest =
        investmentValue - userInput.AnnualInvestment * year - userInput.InitialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.AnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.InitialInvestment + userInput.AnnualInvestment * year,
      });
    }

    return annualData;
  }

}
