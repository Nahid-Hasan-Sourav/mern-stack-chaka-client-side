// import { async } from "@firebase/util";

export const getRole = async (email) => {
  const url = `http://localhost:5000/user/${email}`;

  const response = await fetch(`http://localhost:5000/user/${email}`);

  const user = await response.json();
  console.log("User Role Func ", user)
  return user;
};

// export const SellerVerify = async (email) => {
//   const url = `http://localhost:5000/user/${email}`;

//   const response = await fetch(`http://localhost:5000/user/${email}`);

//   const user = await response.json();
//   console.log("User Seller Role", user)
//   return user;
// };