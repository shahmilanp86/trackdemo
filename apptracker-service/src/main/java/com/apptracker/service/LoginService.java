package com.apptracker.service;

import com.apptracker.entity.Login;
import com.apptracker.entity.UserInfo;

/**
 * Created by Murthy on 11/05/2017.
 */
public interface LoginService {
   Login find(String userName);
   UserInfo authenticate(Login login);
}
