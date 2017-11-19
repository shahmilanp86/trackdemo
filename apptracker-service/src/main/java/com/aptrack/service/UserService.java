package com.aptrack.service;

import com.aptrack.entity.UserInfo;

import java.util.List;

/**
 * Created by Murthy on 7/30/2017.
 */
public interface UserService {
     List<UserInfo> getUsers(List<Integer> roles);

     UserInfo findById(Long id);

}
