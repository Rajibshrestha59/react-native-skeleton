import { Dimensions } from "react-native";
import { retry } from "redux-saga/effects";

const ValidEmail = (email) => {
  const checker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return checker.test(email);
};
const validFirstName = (first_name) => {
  const checker = /^[a-z ,.'-]+$/i;
  return checker.test(first_name);
};
const validFullName = (fullName) => {
  const checker = /^[A-Za-z]+([ A-Za-z]+)*/i;
  return checker.test(fullName);
};
const validCode = (code) => {
  return code.length >= 4;
};
const validLastName = (last_name) => {
  const checker = /^[a-z ,.'-]+$/i;
  return checker.test(last_name);
};
const validNumber = (number) => {
  const checker = /^\d*$/;
  return checker.test(number);
};
const validPassword = (pass) => {
  return pass.length >= 6;
};
const validInternationalPhoneNumber = (phone) => {
  const checker = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return checker.test(phone);
};
const validAustraliaNumber = (phone) => {
  const checker = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
  return checker.test(phone);
};
const validZipCode = (zipcode) => {
  const checker = /^(\d{2,5}((|-)-\d{4})?)|([A-Za-z]\d[A-Za-z][\s\.\-]?(|-)\d[A-Za-z]\d)|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2}$/;
  return checker.test(zipcode);
};
const validMessage = (message) => {
  return message.length >= 2;
};
const validDOB = (dob) => {
  const checker = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  return checker.test(dob);
};
const validCard = (Card) => {
  const checker = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return checker.test(Card);
};
const validCountry = (country) => {
  const checker = /^[a-zA-Z]{2,}^/;
  return checker.test(country);
};
const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const Scale = (size) => (width / guidelineBaseWidth) * size;
const VerticalScale = (size) => (height / guidelineBaseHeight) * size;
const ModerateScale = (size, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

export {
  validDOB,
  validFullName,
  ValidEmail,
  validFirstName,
  validLastName,
  Scale,
  validMessage,
  VerticalScale,
  ModerateScale,
  validNumber,
  validInternationalPhoneNumber,
  validZipCode,
  validAustraliaNumber,
  validPassword,
  validCard,
  validCode,
  validCountry,
};
