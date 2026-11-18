function calculateDaysBetweenDates(begin,end){
    let beginDate = new Date(begin);
    let endDate = new Date(end);
    let days = (endDate - beginDate)/86400000;
    return days;
}