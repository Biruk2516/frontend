class Validations {
  constructor()
  {

  }

  //Validating user name function
    static validateuserName(userName)
    {
      const checkName= /^[A-za-z][A-za-z0-9]{4,}$/
      if(userName.length < 5){
        return 'length is too short'
      }
      if(!checkName.test(userName))
      {
        return 'must start with alphabets'
      }
      return ''

    }

    static validateWebsiteLink(webLink)
    {
      const websiteLinkRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
      if(!websiteLinkRegex.test(webLink))
      {
        return 'invalid website link'
      }
      return ''
    }

    //validating the length of long inputs 
    static validateInputLength(input)
    {
      if(input.length < 100)
      {
        return 'minimum 100 character'
      }
      if(input.length > 300)
      {
        return 'maximum 300 character'
      }
      return ''
    }

    static validateDateInputs(input)
    {
      const dateInputRegex= /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{2})$/;
      if(!dateInputRegex.test(input))
      {
        return 'invalid date format'
      }
      return ''
    }

    static validateOpenDays(days)
    {
      const dayRangeRegex = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s-\s(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/;
      if(!dayRangeRegex.test(days))
      {
        return 'invalid format ..... see the example'
      }
      return ''
    }

    static validateOpenHours(time)
    {
      const timeRangeRegex = /^([01]\d|2[0-3]):[0-5]\d\s-\s([01]\d|2[0-3]):[0-5]\d$/;
      if(!timeRangeRegex.test(time))
      {
        return 'invalid format ..... see the example'
      }
      return ''
    }

    //Validationg email inputs
    static  validateEmail(email) {
      const checkReg = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    
      if(!email){
        return 'email is required';
      }
      if (!email.includes('@')) {
          return "Missing '@' symbol.";
      }
      
      const parts = email.split('@');
      
      if (parts[0].length < 3) {
          return "The part before '@' should have at least 3 characters.";
      }
      
      if (!parts[1].includes('.')) {
          return "Missing '.' symbol after '@'.";
      }
      
      const domainParts = parts[1].split('.');
      
      if (domainParts[0].length < 3) {
          return "The part after '@' and before '.' should have at least 3 characters.";
      }
      
      if (domainParts[1].length < 2) {
          return "The part after '.' should have at least 2 characters.";
      }
      
      if (!checkReg.test(email)) {
          return "Invalid email format.";
      }
      
      return "";
  }
    
      //Validating password inputs
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