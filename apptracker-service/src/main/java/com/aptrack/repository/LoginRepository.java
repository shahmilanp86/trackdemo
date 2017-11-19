package com.aptrack.repository;

import com.aptrack.entity.Login;
import com.aptrack.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Murthy on 7/30/2017.
 */
@Repository
public interface LoginRepository extends JpaRepository<Login,String> {
}
