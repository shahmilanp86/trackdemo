package com.apptracker.repository;

import com.apptracker.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Murthy on 7/30/2017.
 */
@Repository
public interface LoginRepository extends JpaRepository<Login,String> {
}
