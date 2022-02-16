package com.timesheet.sevice;

import com.timesheet.model.TimeSheet;
import com.timesheet.request.TimeSheetRequest;
import com.timesheet.response.TimeSheetResponse;

import java.util.List;

/**
 * @author UtkarshRathore on 23-01-2022
 **/
public interface TimeSheetService {

    List<TimeSheetResponse> getAllTimeSheet();
    List<TimeSheetResponse> getTimeSheetByEmployeeId(String employeeId);
    TimeSheetResponse getTimeSheet(String timeSheetId);
    TimeSheetResponse addTimeSheet(TimeSheetRequest report);
//    List<TimeSheet> addTimeSheets(String timeSheetId);
    void delete(String timeSheetId);
    List<TimeSheetResponse> addAllTimeSheets(List<TimeSheetRequest> addAllTimeSheets);
}
