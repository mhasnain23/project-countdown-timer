#! /usr/bin/env node
// Importing the 'date-fns' library for date manipulation
import { differenceInSeconds } from "date-fns";
function getTimeDiffrence(targetDate) {
    const currentDate = new Date();
    return differenceInSeconds(targetDate, currentDate);
}
// Function to format seconds into hours, minutes, and seconds
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `hours ${hours} minutes ${minutes} seconds ${remainingSeconds}`;
}
// Target date for the countdown
const targetDate = new Date("2024-12-31T23:59:59");
// Main function to start the countdown
function startCountdown() {
    const timeDifference = getTimeDiffrence(targetDate);
    if (timeDifference > 0) {
        console.log(`countdown ${formatTime(timeDifference)}`);
        setTimeout(startCountdown, 1000);
    }
    else {
        console.log("Countdown Ended");
    }
}
// calling finction to start countdown
startCountdown();
function countdown(endDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        if (distance <= 0) {
            clearInterval(interval);
            console.log("Countdown finished!");
        }
    }, 1000);
}
const endDate = new Date("2024-12-31T23:59:59");
countdown(endDate);
