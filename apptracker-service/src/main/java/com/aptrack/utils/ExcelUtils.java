package com.aptrack.utils;

import com.aptrack.entity.CandidateInfo;
import com.aptrack.entity.ContingentWorkerDetails;
import com.aptrack.entity.ContractInfo;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;

/**
 * Created by admin on 9/26/17.
 */
public class ExcelUtils {

public static void main(String[] s){
    //generate();
}

private static final String OUTFILE = "C:\\data\\Murthy\\work\\POC\\apptracker\\apptracker-service\\src\\main" +
        "\\resources\\data\\new.xlsx";
    private static final String TEMPLATE = "C:\\data\\Murthy\\work\\POC\\apptracker\\apptracker-service\\src\\main" +
            "\\resources\\data\\OnboardingTemplate.xlsx";



private static void init(){


}


/*public static void generate(ContingentWorkerDetails details) {

    try (FileInputStream fis = new FileInputStream(TEMPLATE); FileOutputStream fos = new FileOutputStream(OUTFILE)) {

        XSSFWorkbook wb = new XSSFWorkbook(fis);
        //Sheet mySheet = wb.getSheetAt(0);
        XSSFSheet sheet1 = wb.getSheet("Template for Data Entry");


        XSSFRow row = sheet1.getRow(5);
        buildRow(details,row);

       wb.write(fos);


    } catch (IOException ex){
        ex.printStackTrace();
    }

    
    }*/


    public static ByteArrayOutputStream generateWithByteArray(ContingentWorkerDetails details) {
        try (FileInputStream fis = new FileInputStream(TEMPLATE); ByteArrayOutputStream bos = new ByteArrayOutputStream()) {

            XSSFWorkbook wb = new XSSFWorkbook(fis);
            //Sheet mySheet = wb.getSheetAt(0);
            XSSFSheet sheet1 = wb.getSheet("Template for Data Entry");


            XSSFRow row = sheet1.getRow(6);
            buildRow(details,row);

            wb.write(bos);

            return bos;

        } catch (IOException ex){
            ex.printStackTrace();
        }

        return null;
    }



    private  static void buildRow(ContingentWorkerDetails details,XSSFRow row){
        ContractInfo contractInfo = details.getContractInfo();
        CandidateInfo candidateInfo = details.getPersonalInfo();

        Optional.ofNullable(contractInfo).orElseThrow(() -> new UnsupportedOperationException("No contract data " +
                "present"));

        setValue(0,contractInfo.getAppprovedContactNum(),row);
        setValue(1,contractInfo.getContractEndDte(),row);
        setValue(2,contractInfo.getCwAssignmentEndDte(),row);
        setValue(3,contractInfo.getCandidateRoleTyp(),row);
        setValue(4,candidateInfo.getLastName(),row);
        setValue(5,candidateInfo.getFirstName(),row);
        setValue(6,candidateInfo.getMidInitial(),row);
        setValue(7,candidateInfo.getPrefFirstName(),row);
        setValue(8,contractInfo.getReturnStatus(),row);
        setValue(9,contractInfo.getFormaerWorker(),row);
        setValue(10,contractInfo.getPriorSid(),row);
        setValue(11,contractInfo.getPriorDates(),row);

        setValue(14,contractInfo.getSupplierName(),row);
        setValue(15,contractInfo.getCwWorkCity(),row);
        setValue(16,contractInfo.getCwWorkLocation(),row);
        setValue(17,contractInfo.getCwWorkMailDrop(),row);
        setValue(18,candidateInfo.getHomeZip(),row);
        setValue(19,candidateInfo.getEmail(),row);
        setValue(20,candidateInfo.getContactPhone(),row);
        setValue(21,contractInfo.getUsArmedForces(),row);
        setValue(22,contractInfo.getRegisteredNotaryPublic(),row);
        setValue(23,contractInfo.getCsiInfoAccess(),row);
        setValue(24,contractInfo.getCandidateReferredToYou(),row);
        setValue(25,contractInfo.getReferralOriginate(),row);
        setValue(26,contractInfo.getCandiateSeletedWithinGuidelines(),row);
        setValue(27,candidateInfo.getCurrentAddress(),row);
        setValue(28,contractInfo.getServiceType(),row);
        setValue(29,contractInfo.getITORNonIT(),row);
        setValue(30,contractInfo.getFullORPartTime(),row);
        setValue(31,contractInfo.getPaymentType(),row);
        setValue(32,contractInfo.getCostCenter(),row);
        setValue(33,contractInfo.getCwJobCode(),row);
        setValue(34,contractInfo.getLobName(),row);
        setValue(35,contractInfo.getCwAssignmentStartDte(),row);

        setValue(36,contractInfo.getSponsorId(),row);
        setValue(37,contractInfo.getSponsorLastName(),row);
        setValue(38,contractInfo.getSponsorFirstName(),row);
        setValue(39,contractInfo.getEmailRequired(),row);
        setValue(40,contractInfo.getSpocEmail(),row);

    }

    private static void setValue(int index, Object value, XSSFRow row){
        XSSFCell cell = row.getCell(index)  ;
        cell.setCellValue(Optional.ofNullable(value).map(v -> v.toString()).orElse(""));
    }


}
