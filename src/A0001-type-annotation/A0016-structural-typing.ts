type VeryfyUserFn = (user: User, senValue: User) => boolean;
type User = { username: string; password: string };

const VeryfyUser: VeryfyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };
const loggedIn = VeryfyUser(bdUser, sentUser);
console.log(loggedIn);
