// Task 1: Creating a function to calculate average sales

const sales = [3000, 4000, 3500];
sales.reduce(calculateAverageSales,0);

function calculateAverageSales (sales) {
    return 
}

console.log ((3000+4000+3500)/3) // Output: 3500


// Task 2: Creating a function to determine performance rating

let AverageSales = 3500
function determinePerformanceRating (AverageSales) {
    if (AverageSales > 10000) {
        console.log(`Performance Rating: Excellent.`);
    }
    else if (7000 <= AverageSales <= 10000)  {
        console.log(`Performance Rating: Good`);
    }
    else if (4000 <= AverageSales <= 7000) {
        console.log(`Performance Rating: Satisfactory `);
    }
    else (AverageSales < 4000) 
        console.log(`Performance Rating: Needs Improvement`);

        return 
}

 // Output: "Performance Rating: Needs Improvement"
    
 
