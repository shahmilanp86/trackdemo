package com.apptracker.service;

import com.apptracker.entity.Login;
import com.apptracker.entity.UserInfo;
import com.apptracker.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Murthy on 11/5/2017.
 */
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private UserService userService;

    @Override
    public Login find(String userName) {
        return loginRepository.findOne(userName);
    }

    public UserInfo authenticate(Login login) {
        Login loginDetails = find(login.getUserName());

        if (loginDetails == null) {
            throw new UnsupportedOperationException("User not found.");
        } else if (!login.getPassword().equals(loginDetails.getPassword())) {
            return null;
        } else {
            return userService.findById(loginDetails.getId());
        }

    }
}
