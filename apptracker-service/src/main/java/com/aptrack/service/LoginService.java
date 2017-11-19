package com.aptrack.service;

import com.aptrack.entity.Login;
import com.aptrack.entity.UserInfo;

/**
 * Created by Murthy on 11/05/2017.
 */
public interface LoginService {
   Login find(String userName);
   UserInfo authenticate(Login login);
}
