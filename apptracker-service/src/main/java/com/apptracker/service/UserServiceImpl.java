package com.apptracker.service;

import com.apptracker.entity.UserInfo;
import com.apptracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Murthy on 7/30/2017.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<UserInfo> getUsers(List<Integer> roles) {
        return userRepository.findByRole(roles);
    }

    @Override
    public UserInfo findById(Long id) {
        return userRepository.getOne(id);
    }
}
