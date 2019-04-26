// finding the number of events a person can attend
// given an array of start and end timings of events
const Arr = ['1 2', '3 4', '5 7', '6 7'];
function findMaximumEvents(eventDetails) {
    let eventCount = 0;
    let newArr = [];
    let i = 0;
    while (i < eventDetails.length) {
        let schedule1 = eventDetails[i].split('');
        // console.log(schedule1);
        for(let j = 0; j < schedule1.length; j++){
            if(schedule1[j] !== ' '){
                if(newArr.indexOf(schedule1[j]) == -1){
                    newArr.push(schedule1[j])
                    // console.log(newArr)
                } else{
                    // console.log('no event')
                    eventCount = eventCount - 1;
                    break;
                }
            }
        }
        i++; eventCount++;
    }
    return eventCount;
}

const res = findMaximumEvents(Arr);
console.log(res);
