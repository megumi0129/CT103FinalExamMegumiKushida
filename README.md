# CT103FinalExamMegumiKushida

Overview

The JSville Courier Management System is a web application designed to help the fictional town of JSville manage and organize package deliveries. The application validates user input, sorts packages by weight, and generates unique tracking codes. It is deployed on AWS using EC2 instances and an Application Load Balancer (ALB) to ensure scalability and reliability.

Features

Package Data Input:
Recipient Name: Alphabetic characters only.
Package ID: Numeric-only values.
Delivery Address: Must not contain digits and cannot be empty.
Weight: Positive numeric values only.
Validation:
Invalid inputs are gracefully handled with error messages.
Sorting:
Packages are sorted by weight in ascending order using an efficient algorithm.
Tracking Code Generation:
A unique binary tracking code is generated using bitwise operations.

Usage

Open the application in your browser.
Enter package details in the form:
Recipient Name, Package ID, Delivery Address, Weight.
Submit the form.
The sorted packages will appear in the table below, along with their tracking codes.
Invalid inputs will display an appropriate error message.
