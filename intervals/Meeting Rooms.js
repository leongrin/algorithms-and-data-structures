// 252 Meeting Rooms
// https://www.youtube.com/watch?v=1-1KSDKWU4A

const canAttendMeetings = (arr) => {

    arr.sort((a, b) => a[0] - b[0]);

    let end = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
        if (end > arr[i][0]) return false;
        if (end < arr[i][1]) end = arr[i][1];
    }

    return true;
}


/*const meetings = [[7, 10], [2, 4]];*/    // expected true
const meetings = [[0, 30], [5, 10], [15, 20]];    // expected false;

console.log(canAttendMeetings(meetings));
