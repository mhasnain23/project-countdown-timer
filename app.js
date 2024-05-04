// Importing the 'date-fns' library for date manipulation
import { differenceInSeconds } from "date-fns";
function getTimeDiffrence(targetDate) {
    const currentDate = new Date();
    return differenceInSeconds(targetDate, currentDate);
}
// Function to format seconds into hours, minutes, and seconds
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds / 3600) * 60);
    const remainingSeconds = seconds * 60;
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
        console.log('Countdown Ended');
    }
}
