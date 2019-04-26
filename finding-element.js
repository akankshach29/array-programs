// not complete yet
const Arr = ['1 2', '3', '3 4'];
function findMaximumEvents(eventDetails) {
    let eventCount = 0;
    for (let i = 0; i < eventDetails.length; i++) {
        let schedule1 = eventDetails[i].split('');
        console.log(schedule1);
        for (let j = 1; j < eventDetails.length; j++){
            let schedule2 = eventDetails[j].split('');
            console.log(schedule2);
            if(schedule1[schedule1.length - 1] !== schedule2[0]){
                console.log(eventCount++)
                eventCount ++;
            }
        }
    }
    return eventCount;
}

const res = findMaximumEvents(Arr);
console.log(res);
