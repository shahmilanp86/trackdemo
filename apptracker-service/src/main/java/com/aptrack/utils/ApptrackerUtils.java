package com.aptrack.utils;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;

import java.beans.FeatureDescriptor;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by Murthy on 7/20/2017.
 */
public class ApptrackerUtils {

    public static String[] getNullPropertyNames(Object source) {
        final BeanWrapper wrappedSource = new BeanWrapperImpl(source);
        return Stream.of(wrappedSource.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(propertyName -> wrappedSource.getPropertyValue(propertyName) == null)
                .toArray(String[]::new);
    }

    public static String dbTimestampToString(Timestamp tm) {
        return tm.toLocalDateTime().format(DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss"));
    }

    public static Timestamp stringToDbTimestamp(String dateStr){

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");

        LocalDateTime localDate = LocalDateTime.parse(dateStr, formatter);
        return  Timestamp.valueOf(localDate);

    }

    public static long dateTimeDiffDays(String fromDateTime,String toDateTime){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");
        LocalDateTime to = LocalDateTime.parse(toDateTime, formatter);
        LocalDateTime from = LocalDateTime.parse(fromDateTime, formatter);
        return ChronoUnit.DAYS.between(from,to);

    }

  /* public static void main (String[] d){
       //System.out.println(dateTimeDiffDays( "07-30-2017 21:20:34", "07-29-2017 21:20:34"));

        System.out.println(dateTotring(LocalDate.now()));

        System.out.println(dateTimeDiffDays(  "07/29/2017 21:20:34","07/30/2017 21:20:34"));

         System.out.println(dateTimeTotring(LocalDateTime.now()));

      Integer[] d1 = {2,1,4,3,7,8,10};
        List<Integer> gg = Arrays.stream(d1)
                .filter(f -> (f > 3))
                .collect(Collectors.toList());
        System.out.println(gg);

        System.out.println(daysTillDate( "07/30/2017 21:20:34"));
    }
*/

    public static Date stringToDbDate(String dateStr){

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

        LocalDate localDate = LocalDate.parse(dateStr, formatter);
        return  Date.valueOf(localDate);

    }


    public static String dbDateToString(Date dt) {
        return dt.toLocalDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
    }

    public static String dateTimeTotring(LocalDateTime dtm){
        return dtm.format(DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss"));

    }

    public static String dateTotring(LocalDate dt){
        return dt.format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));

    }

    public static Long daysTillDate(String fromDate) {
        return dateTimeDiffDays( fromDate,dateTimeTotring(LocalDateTime.now()));
    }

    public static String generateRandomString() {
       // return UUID.randomUUID().toString();
        return Long.toHexString(Double.doubleToLongBits(Math.random()));

    }





}
