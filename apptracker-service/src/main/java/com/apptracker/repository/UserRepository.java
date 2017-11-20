package com.apptracker.repository;

import com.apptracker.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Murthy on 7/30/2017.
 */
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long> {
    @Query("SELECT u FROM UserInfo u where u.role in :roles ")
    List<UserInfo> findByRole(@Param("roles") Iterable<Integer> roles);

}
