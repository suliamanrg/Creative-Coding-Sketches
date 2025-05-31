// List of car companies
let carBrands = ["Toyota", "Nissan", "BMW", "Mercedes", "Ford", "Hyundai", "Kia", "Tesla", "Chevrolet", "Honda"];

// Sales percentage for each company
let sales = [85, 70, 60, 55, 50, 75, 65, 40, 45, 80];

// This will store the color for each bar
let barColors = [];

function setup() {
  // Create a full screen canvas
  createCanvas(windowWidth, windowHeight);
  
  // Set the background to white
  background(255);
  
  // Draw only once
  noLoop();
  
  // Set the colors for the bars
  setColors();
}

function draw() {
  // Clear the background again in case it's redrawn
  background(255);
  
  // Draw the chart with bars
  drawBarChart(60, 100, width - 120, height - 200);
}

function setColors() {
  // Predefined nice colors for each bar
  let colors = [
    "#0077B6", "#00B4D8", "#90E0EF", "#48CAE4", "#F15BB5",
    "#9B5DE5", "#FEE440", "#FF924C", "#F26419", "#4CAF50"
  ];

  // Assign each car brand a color
  for (let i = 0; i < carBrands.length; i++) {
    barColors.push(color(colors[i % colors.length]));
  }
}

function drawBarChart(x, y, chartWidth, chartHeight) {
  // Width of each bar
  let barWidth = chartWidth / carBrands.length - 15;
  
  // Bottom of the chart area
  let startY = y + chartHeight;

  // Title of the chart
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(28);
  text("Cars Sold in UAE", x + chartWidth / 2, y - 50);

  // Draw each bar
  for (let i = 0; i < carBrands.length; i++) {
    // Set height of bar based on sales value
    let barHeight = map(sales[i], 0, 100, 0, chartHeight);

    // Draw light shadow behind the bar
    fill(220);
    rect(x + i * (barWidth + 15) + 5, startY - barHeight + 5, barWidth, barHeight, 10);

    // Draw the colored bar
    fill(barColors[i]);
    noStroke();
    rect(x + i * (barWidth + 15), startY - barHeight, barWidth, barHeight, 10);

    // Show the sales percentage above the bar
    fill(0);
    textSize(14);
    text(sales[i] + "%", x + i * (barWidth + 15) + barWidth / 2, startY - barHeight - 15);

    // Show the car brand name below the bar
    textSize(12);
    textAlign(CENTER, TOP);
    text(carBrands[i], x + i * (barWidth + 15) + barWidth / 2, startY + 10);
  }
}
