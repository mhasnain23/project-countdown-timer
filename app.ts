// Importing the 'date-fns' library for date manipulation
import { differenceInSeconds, format } from 'date-fns';

function getTimeDiffrence(targetDate:Date){
    const currentDate = new Date();
    return differenceInSeconds(targetDate, currentDate)
}

function formatTime(seconds: number):string{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds / 3600) * 60);
    const remainingSeconds = seconds * 60;
    return `hours ${hours} minutes ${minutes} seconds ${remainingSeconds}`
}


const targetDate = new Date('2024-12-31T23:59:59');
