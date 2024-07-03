const calculateNHIF = (netSalary) => {
  if (netSalary >= 0 && netSalary <= 5999) {
    console.log('150');
  } else if (netSalary >= 6000 && netSalary <= 7999) {
    console.log('300');
  } else if (netSalary >= 8000 && netSalary <= 11999) {
    console.log('400');
  } else if (netSalary >= 12000 && netSalary <= 14999) {
    console.log('500');
  } else if (netSalary >= 15000 && netSalary <= 19999) {
    console.log('600');
  } else if (netSalary >= 20000 && netSalary <= 24999) {
    console.log('750');
  } else if (netSalary >= 25000 && netSalary <= 29999) {
    console.log('850');
  } else if (netSalary >= 30000 && netSalary <= 34999) {
    console.log('950');
  } else if (netSalary >= 35000 && netSalary <= 39999) {
    console.log('1000');
  } else if (netSalary >= 40000 && netSalary <= 44999) {
    console.log('1000');
  } else if (netSalary >= 45000 && netSalary <= 49999) {
    console.log('1100');
  } else if (netSalary >= 50000 && netSalary <= 59999) {
    console.log('1200');
  } else if (netSalary >= 60000 && netSalary <= 69999) {
    console.log('1300');
  } else if (netSalary >= 70000 && netSalary <= 79000) {
    console.log('1400');
  } else if (netSalary >= 80000 && netSalary <= 89999) {
    console.log('1500');
  } else if (netSalary >= 90000 && netSalary <= 99999) {
    console.log('1600');
  } else if (netSalary >= 100000) {
    console.log('1700');
  } else {
    console.log('Invalid net salary');
  }
};

/*function of PAYE*/
function calculatePAYE(monthlyPay) {
  const personalRelief = 2400;
  const ownerOccupierInterest = 25000;
  const isabled = true;
  const annualPersonalRelief = personalRelief * 12; 
  const annualInsuranceRelief = 60000;
  const annualPensionContribution = 240000;
  const annualHousingRelief = 108000;
  const annualOwnerOccupierInterest = Math.min(
    300000,
    ownerOccupierInterest * 12
  );
  const annualDisabilityExemption = isDisabled ? 1800000 : 0;

  let annualPay = monthlyPay * 12;
  let tax = 0;

  if (annualPay <= 288000) {
    tax = annualPay * 0.1;
  } else if (annualPay <= 388000) {
    let taxForFirstBracket = 288000 * 0.1;
    let remainingAnnualPay = annualPay - 288000;
    tax = taxForFirstBracket + remainingAnnualPay * 0.25;
  } else {
    let taxForFirstBracket = 288000 * 0.1;
    let taxForSecondBracket = 100000 * 0.25;
    let remainingAnnualPay = annualPay - 388000;
    tax = taxForFirstBracket + taxForSecondBracket + remainingAnnualPay * 0.3;
  }

  // the reliefs anually
  let annualTax =
    tax -
    annualPersonalRelief -
    annualInsuranceRelief -
    annualPensionContribution -
    annualHousingRelief -
    annualOwnerOccupierInterest -
    annualDisabilityExemption;

    // calculations of all deductions 
  annualTax = Math.max(annualTax, 0);

  return annualTax / 12; // Return the monthly tax
}

/*Calculates NSSF*/
const calculateNSSF = (monthlySalary) => {
  const slot1Limit = 7000;
  const slot2Limit = 36000;

  let slot1Contribution = Math.min(monthlySalary, slot1Limit) * 0.06;
  let slot2Contribution = 0;

  if (monthlySalary > slot1Limit) {
    slot2Contribution =
      Math.min(monthlySalary - slot1Limit, slot2Limit - slot1Limit) * 0.06;
  }

  let totalEmployeeContribution = slot1Contribution + slot2Contribution;
  let totalEmployerContribution = slot1Contribution + slot2Contribution;

  return totalEmployeeContribution + totalEmployerContribution;
};

/*function that calculates net salary*/
const calculateNetSalary = (basicSalary, benefits = 0) => {
  const NetSalary = basicSalary + benefits;
  const nssfDeduction = calculateNSSF (netSalary);
  const taxableIncome = netSalary - nssfDeduction;
  const paye = calculatePAYE (taxableIncome);
  const nhifDeduction = calculateNHIF (netSalary);
  const netSalary = netSalary - nssfDeduction - paye - nhifDeduction;
  return netSalary;
};
console.log(calculateNetSalary (70000));