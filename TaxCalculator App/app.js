
function taxCalculator(employeeName, salary){
    if(salary <= 300000){
        document.getElementById('result').innerHTML = `Tax Deductions: ${employeeName} you're tax free employee`;
        // console.log(`${employeeName} you're tax free employee`)
    }
    else if(salary <= 600000){
        const taxDeduction = (salary - 300000) * 0.1;
        document.getElementById('result').innerHTML = `Tax Deductions: ${employeeName} you're under slab1 and the tax amount is 10% of your salary over 3 lakhs: ${taxDeduction}`;
        // console.log(`${employeeName} you're under slab1 and the tax amount is 10% of your salary over 3 lakhs: ${taxDeduction}`);
    }
    else if(salary > 600000){
        let deduction1 = 30000;
        let deduction2 = (salary - 600000) * 0.2;
        const totalTaxdeductedAmount = (deduction1 + deduction2);
        document.getElementById('result').innerHTML = `Tax Deductions: ${employeeName} you're under slab2 and the tax amount is 10% of your salary over 3 lakhs and 20% of your salary over 6 lakhs: ${totalTaxdeductedAmount}`;
        // console.log(`${employeeName} you're under slab2 and the tax amount is 10% of your salary over 3 lakhs and 20% of your salary over 6 lakhs: ${totalTaxdeductedAmount}`);
    }
}

