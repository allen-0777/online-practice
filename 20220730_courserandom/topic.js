var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];

var startDate = new Date();
// 設定好活動第一次的日期
function setMonthAndDay(startMonth,startDay){
    // js 的月份是 0~11
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);