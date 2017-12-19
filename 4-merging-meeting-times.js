ranges =     [
    {startTime: 9,  endTime: 10},
    {startTime: 10, endTime: 12},
    {startTime: 3,  endTime: 5},
    {startTime: 0,  endTime: 1},
    {startTime: 4,  endTime: 8},
]

// ranges = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]

// ranges = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]

// ranges = [{startTime: 2, endTime: 3}, {startTime: 1, endTime: 5}]

mergeRanges = (ranges) => {

a = ranges

 var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i].startTime > a[i+1].startTime) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

console.log(a)
//I think this only considers if the next meeting was mergable, what if there were 3 meetings...
  for(var j = 0; j < a.length-1; j++) {
    console.log(a[j], j)
    console.log(a[j].endTime >= a[j+1].startTime)
      if(a[j].endTime >= a[j+1].startTime) {
          a[j].endTime = Math.max(a[j].endTime, a[j+1].endTime)  // you want to use the latest endTime
          a.splice(j+1, 1)
          j--
              console.log(a[j], j)
      }
    }
return a
  }
    



mergeRanges(ranges)


//I had to realize that I could sort them and merge them in place.









// ranges =     [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]

// ranges = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]

// ranges = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]

ranges = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]

mergeRanges = (ranges) => {
  arr = [];
  
for(var j = 0; j < ranges.length; j++) {
  startTimeFocus = ranges[j].startTime;
  endTimeFocus = ranges[j].endTime;
  obj = {};

  for(var i = 0; i < ranges.length; i++) {
    
    startTimeCompare = ranges[i].startTime;
    endTimeCompare = ranges[i].endTime;

  if(startTimeCompare >= startTimeFocus && startTimeCompare <= endTimeFocus && endTimeCompare >= startTimeFocus && endTimeCompare <= endTimeFocus) {
    
    ranges = ranges.splice(i,1)
    
  } else {

    if(startTimeCompare >= startTimeFocus && startTimeCompare <= endTimeFocus) {
      if(endTimeFocus < endTimeCompare) {
        endTimeFocus = endTimeCompare;
      }  
    }
    
    if(endTimeCompare >= startTimeFocus && endTimeCompare <= endTimeFocus) {
      if(startTimeCompare < startTimeFocus) {
        startTimeFocus = startTimeCompare
      }
    }
  }
  }
  
  // console.log(startTimeFocus, endTimeFocus)
  obj['startTime'] = startTimeFocus;
  obj['endTime'] = endTimeFocus;
  
  startTimes = arr.map(ele => ele.startTime)
 
  if(startTimes.indexOf(obj['startTime']) < 0) {
    arr.push(obj)
  }

}
 return arr
}


mergeRanges(ranges)