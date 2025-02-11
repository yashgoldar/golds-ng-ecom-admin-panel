export const REGEX = {
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    PHONE: /^[0-9]{10}$/,
    USERNAME: /^[a-zA-Z0-9_-]{3,16}$/
  };
  