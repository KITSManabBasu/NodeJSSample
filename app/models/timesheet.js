var mongoose = require('mongoose');

module.exports = mongoose.model('Timesheet', {
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    startDateofWeek : {type : Date, default: Date.now},
    endDateofWeek : {type : Date, default: Date.now},
    projectCode : {type : String, default: ''},
    projectSundayHour : {type : Number, default: 0},
    projectMondayHour : {type : Number, default: 0},
    projectTuesdayHour : {type : Number, default: 0},
    projectWednesdayHour : {type : Number, default: 0},
    projectThursdayHour : {type : Number, default: 0},
    projectFridayHour : {type : Number, default: 0},
    projectSaturdayHour : {type : Number, default: 0},
    leaveSundayHour : {type : Number, default: 0},
    leaveMondayHour : {type : Number, default: 0},
    leaveTuesdayHour : {type : Number, default: 0},
    leaveWednesdayHour : {type : Number, default: 0},
    leaveThursdayHour : {type : Number, default: 0},
    leaveFridayHour : {type : Number, default: 0},
    leaveSaturdayHour : {type : Number, default: 0},
    allocationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Allocations'},
});