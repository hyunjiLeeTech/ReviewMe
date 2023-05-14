/*
* CAP805 - Lab2
* Group 4
* Group Members:
* Sergey Kozyrev
* Hyun Ji Lee
* Elisa Ng Li
* Krupa Kirtikumar Shah
* DDL Script
*/

--Delete commands Here   
DROP TABLE IF EXISTS REPORT;  
DROP TABLE IF EXISTS REVIEW;  
DROP TABLE IF EXISTS LIBRARYITEM; 
DROP TABLE IF EXISTS WISHLIST;   
DROP TABLE IF EXISTS USERDETAILS;  
DROP TABLE IF EXISTS USR;  
DROP TABLE IF EXISTS GENDER;  
DROP TABLE IF EXISTS USERTYPE;  
DROP TABLE IF EXISTS REPORTTYPE;  

--Create tables  
CREATE TABLE REPORTTYPE (  
reportTypeID SERIAL CONSTRAINT reporttype_report_id_pk PRIMARY KEY,  
reportType VARCHAR(50) NOT NULL   
);  


CREATE TABLE USERTYPE(  
userTypeID SERIAL CONSTRAINT usertype_usertype_id_pk PRIMARY KEY,  
userType VARCHAR(50) NOT NULL  
);  

   
CREATE TABLE GENDER(   
genderID SERIAL CONSTRAINT gender_gender_id_pk PRIMARY KEY,  
genderType VARCHAR(50) NOT NULL   
);  


CREATE TABLE USR(  
userID SERIAL CONSTRAINT usr_user_id_pk PRIMARY KEY,  
email VARCHAR(50) NOT NULL UNIQUE,  
password VARCHAR(100) NOT NULL,  
userTypeID SERIAL NOT NULL,  
isActive BOOLEAN NOT NULL, 
CONSTRAINT userType_id_fk FOREIGN KEY (userTypeID) REFERENCES USERTYPE(userTypeID) 
);  

  
CREATE TABLE USERDETAILS(  
userDetailID SERIAL CONSTRAINT userdetails_userdetail_id_pk PRIMARY KEY,  
firstName VARCHAR(50) NOT NULL,   
lastName VARCHAR(50) NOT NULL,  
nickName VARCHAR(50) NOT NULL UNIQUE,  
dateOfBirth DATE NOT NULL,  
genderID SERIAL NOT NULL,  
CONSTRAINT genderID_fk FOREIGN KEY (genderID) REFERENCES GENDER(genderID),  
userID SERIAL NOT NULL,  
CONSTRAINT userID_fk FOREIGN KEY (userID) REFERENCES USR(userID)  
);  

  
CREATE TABLE LIBRARYITEM(  
libraryItemID SERIAL CONSTRAINT libraryItem_libraryItem_id_pk PRIMARY KEY,  
userID SERIAL NOT NULL,  
bookTitle VARCHAR(255) NOT NULL,  
bookCover VARCHAR(500) NOT NULL,  
bookID VARCHAR(250) NOT NULL,  
author VARCHAR(250) NOT NULL,  
CONSTRAINT libraryItem_user_id_fk FOREIGN KEY (userID) REFERENCES USR(userID)  
);  

CREATE TABLE WISHLIST(  
wishlistID SERIAL CONSTRAINT wishlist_wishlist_id_pk PRIMARY KEY,  
userID SERIAL NOT NULL,  
bookTitle VARCHAR(255) NOT NULL,  
bookCover VARCHAR(500) NOT NULL,  
bookID VARCHAR(250) NOT NULL,  
author VARCHAR(250) NOT NULL,  
CONSTRAINT wishlist_user_id_fk FOREIGN KEY (userID) REFERENCES USR(userID)  
);  
  
CREATE TABLE REVIEW(  
reviewID SERIAL CONSTRAINT review_review_id_pk PRIMARY KEY,  
createDate DATE NOT NULL,  
updateDate DATE NOT NULL,  
comment VARCHAR(400) NOT NULL,   
rating INTEGER NOT NULL,  
userID SERIAL NOT NULL,  
CONSTRAINT user_id_fk FOREIGN KEY (userID) REFERENCES USR(userID),  
bookID VARCHAR(250) NOT NULL, 
isActive BOOLEAN NOT NULL 
);  


CREATE TABLE REPORT (  
reportID SERIAL CONSTRAINT report_report_id_pk PRIMARY KEY,  
userID SERIAL NOT NULL,  
reviewID SERIAL NOT NULL,  
createDate DATE NOT NULL,  
updateDate DATE NOT NULL,  
comment VARCHAR(400),  
reportTypeID SERIAL NOT NULL,  
IsActive BOOLEAN NOT NULL, 
CONSTRAINT report_user_id_fk FOREIGN KEY (userID) REFERENCES USR(userID),  
CONSTRAINT report_review_id_fk FOREIGN KEY(reviewID) REFERENCES REVIEW(reviewID),  
CONSTRAINT report_reporttype_id_fk FOREIGN KEY(reportTypeID) REFERENCES REPORTTYPE(reportTypeID)  
);  