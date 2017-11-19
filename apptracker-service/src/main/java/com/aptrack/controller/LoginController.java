package com.aptrack.controller;

import com.aptrack.entity.Login;
import com.aptrack.entity.UserInfo;
import com.aptrack.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {


    @Autowired
    private LoginService loginService;

    @RequestMapping(
            value = "/api/login/authenticate",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<UserInfo> authenticate(
            @RequestBody Login login) {

        UserInfo deatails = loginService.authenticate(login);

        if (deatails == null) {
            return new ResponseEntity<UserInfo>(deatails, HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity<UserInfo>(deatails, HttpStatus.OK);
        }

    }

}
