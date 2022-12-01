CREATE DATABASE luminus;

CREATE TABLE Patients (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    age INT,
    gender VARCHAR(10),
    street VARCHAR(30),
    city VARCHAR(30),
    state VARCHAR(30),
    phone VARCHAR(30),
    secondaryPhone VARCHAR(30)
);

CREATE TABLE Anamnesis (
	code INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    bloodType VARCHAR(30),
    rhFactor VARCHAR(30),
    liveAlone VARCHAR(30),
    deficiency VARCHAR(30),
    locomotion VARCHAR(30),
    basicActivities VARCHAR(30),
    instrumentalActivities VARCHAR(30),
    smoke VARCHAR(30),
    drink VARCHAR(30),
    fisicalActivities VARCHAR(30),
    diseases VARCHAR(100),
    patient_id INT
);

CREATE TABLE Medicals (
	code INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    doctorName VARCHAR (30),
    doctorPhone VARCHAR(30),
    medicalInsuranceName VARCHAR(30),
    patient_id INT
);

CREATE TABLE Medicines (
	code INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    dosage VARCHAR(30),
    howManyTimes INT,
    howManyPills VARCHAR(30),
    patient_id INT
);

CREATE TABLE Relatives (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    kinship VARCHAR(15),
    phone VARCHAR(30),
    secondaryPhone VARCHAR(30),
    email VARCHAR(50),
    patient_id INT
);

CREATE TABLE Users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(10),
    email VARCHAR(50),
    password VARCHAR(30)
);

ALTER TABLE Relatives ADD CONSTRAINT FK_RelativesPatient FOREIGN KEY (patient_id) REFERENCES Patients(id);
ALTER TABLE Medicals ADD CONSTRAINT FK_MedicalsPatient FOREIGN KEY (patient_id) REFERENCES Patients(id);
ALTER TABLE Medicines ADD CONSTRAINT FK_MedicinesPatient FOREIGN KEY (patient_id) REFERENCES Patients(id);
ALTER TABLE Anamnesis ADD CONSTRAINT FK_AnamnesisPatient FOREIGN KEY (patient_id) REFERENCES Patients(id);


