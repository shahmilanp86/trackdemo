package com.apptracker;

import com.apptracker.utils.ExcelUtility;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * Created by Murthy on 7/15/2017.
 */

@SpringBootApplication
public class Application {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public ExcelUtility excelUtility(){
        return new ExcelUtility();
    }
}
