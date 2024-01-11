type User = {
  fullName?: string;
  city?: string;
  phoneNumber?: string;
  tcNo?: string;
  password?: string;
  passwordAgain?: string;
};

interface LoginRespnse extends User {
  id: string;
}

export { User, LoginRespnse };
