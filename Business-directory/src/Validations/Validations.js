import React,{useState} from "react";

class Validations {
  constructor()
  {

  }
    static  validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          return "Email is required.";
        } else if (!emailRegex.test(email)) {
          return "Invalid email format.";
        }
        return "";
      }
    
      // Method to validate password
      static validatePassword(password) {
        const minLength = 8;
        if (!password) {
          return "Password is required.";
        } else if (password.length < minLength) {
          return `Password must be at least ${minLength} characters long.`;
        } else if (!/[A-Z]/.test(password)) {
          return "Password must contain at least one uppercase letter.";
        } else if (!/[a-z]/.test(password)) {
          return "Password must contain at least one lowercase letter.";
        } else if (!/[0-9]/.test(password)) {
          return "Password must contain at least one number.";
        } else if (!/[!@#$%^&*]/.test(password)) {
          return "Password must contain at least one special character.";
        }
        return "";
      }
}

export default Validations;