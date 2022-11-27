export const getRole = async (email) => {
  const url = `http://localhost:5000/user/${email}`;

  const response = await fetch(`http://localhost:5000/user/${email}`);

  const user = await response.json();
  console.log("User Role Func ", user)
  return user;
};
