CREATE DATABASE  IF NOT EXISTS `apptracker` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `apptracker`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: apptracker
-- ------------------------------------------------------
-- Server version	5.6.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidate_info`
--

DROP TABLE IF EXISTS `candidate_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `candidate_info` (
  `AID` varchar(20) NOT NULL,
  `LAST_NAME` varchar(100) NOT NULL,
  `FIRST_NAME` varchar(100) NOT NULL,
  `MID_INITIAL` varchar(3) DEFAULT NULL,
  `PREF_FIRST_NAME` varchar(100) DEFAULT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `CONTACT_PHONE` varchar(13) NOT NULL,
  `CURRENT_ADDRESS` varchar(60) DEFAULT NULL,
  `HOME_ZIP` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contract_info`
--

DROP TABLE IF EXISTS `contract_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contract_info` (
  `AID` varchar(20) NOT NULL,
  `APPPROVED_CONTACT_NUM` bigint(20) DEFAULT NULL,
  `CONTRACT_END_DTE` date DEFAULT NULL,
  `CW_ASSIGNMENT_END_DTE` date DEFAULT NULL,
  `CANDIDATE_ROLE_TYP` varchar(20) DEFAULT NULL,
  `RETURN_STATUS` varchar(10) DEFAULT NULL,
  `FORMAER_WORKER` varchar(5) DEFAULT NULL,
  `PRIOR_SID` varchar(10) DEFAULT NULL,
  `PRIOR_DATES` varchar(40) DEFAULT NULL,
  `SUPPLIER_NAME` varchar(50) DEFAULT NULL,
  `CW_WORK_CITY` varchar(20) DEFAULT NULL,
  `CW_WORK_LOCATION` varchar(20) DEFAULT NULL,
  `CW_WORK_MAIL_DROP` varchar(20) DEFAULT NULL,
  `HOME_ZIP` varchar(12) DEFAULT NULL,
  `US_ARMED_FORCES` varchar(5) DEFAULT NULL,
  `REGISTERED_NOTARY_PUBLIC` varchar(5) DEFAULT NULL,
  `CSI_INFO_ACCESS` varchar(5) DEFAULT NULL,
  `candidate_referred_to_you` varchar(5) DEFAULT NULL,
  `REFERRAL_ORIGINATE` varchar(100) DEFAULT NULL,
  `candiate_seleted_within_guidelines` varchar(5) DEFAULT NULL,
  `CURRENT_ADDRESS` varchar(150) DEFAULT NULL,
  `SERVICE_TYPE` varchar(50) DEFAULT NULL,
  `itornonit` varchar(10) DEFAULT NULL,
  `fullorpart_time` varchar(10) DEFAULT NULL,
  `PAYMENT_TYPE` varchar(20) DEFAULT NULL,
  `COST_CENTER` varchar(10) DEFAULT NULL,
  `CW_JOB_CODE` varchar(10) DEFAULT NULL,
  `LOB_NAME` varchar(10) DEFAULT NULL,
  `CW_ASSIGNMENT_START_DTE` date DEFAULT NULL,
  `SPONSOR_ID` varchar(15) DEFAULT NULL,
  `SPONSOR_LAST_NAME` varchar(20) DEFAULT NULL,
  `SPONSOR_FIRST_NAME` varchar(10) DEFAULT NULL,
  `EMAIL_REQUIRED` varchar(5) DEFAULT NULL,
  `SPOC_EMAIL` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `ID` bigint(20) NOT NULL,
  `USER_NAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `LOGIN_DTE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`USER_NAME`),
  KEY `ID_IDX` (`ID`),
  CONSTRAINT `ID` FOREIGN KEY (`ID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `onboarding_status`
--

DROP TABLE IF EXISTS `onboarding_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `onboarding_status` (
  `AID` varchar(20) NOT NULL,
  `BG_CHECK` bigint(20) NOT NULL,
  `BG_CHECK_UPD_TM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DEMOGRAPH` bigint(20) DEFAULT NULL,
  `DEMOGRAPH_UPD_TM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CURRENT_STATUS` bigint(20) NOT NULL,
  `CURRENT_STATUS_UPD_TM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `COMMENTS` varchar(200) DEFAULT NULL,
  `LAST_UPD_TM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LAST_UPD_BY` varchar(20) DEFAULT NULL,
  `URL_STRING` varchar(30) DEFAULT NULL,
  `URL_CREATED_TM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `F_NAME` varchar(45) NOT NULL,
  `L_NAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  `ROLE` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-19 20:16:07
