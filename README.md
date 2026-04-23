##Travel Booking System (QA Project):
##Project Overview
This project is a Travel Booking Web Application developed to demonstrate Manual Testing (QA) concepts including bug identification, reporting, and fixing.

The project is divided into two versions:

🔴 Buggy Version – Application with intentionally added defects
🟢 Fixed Version – Application after resolving all defects

##Features
Search Trips (Source → Destination)
View Available Trips
Book Ticket
Cancel Booking with Refund
View Travel Itinerary

##Buggy Version (Intentional Defects)
##Included Bugs
Missing input validation
Invalid characters allowed
Incorrect refund calculation
Booking status not updated properly
Wrong status displayed in itinerary
##Fixed Version (No Bugs)
##Fixes Implemented
Proper input validation (empty, invalid characters, same source/destination)
Correct refund logic
Accurate booking status update
Correct itinerary display
Improved UI using CSS
Dropdown-based input to prevent user errors

##Mock Backend Implementation
This project uses localStorage as a mock backend.
##How it Works
Data is stored using:
localStorage.setItem()
Data is retrieved using:
localStorage.getItem()
