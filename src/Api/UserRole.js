// import { async } from "@firebase/util";

export const getRole = async (email) => {
  const url = `https://a-12-chakka-server-side.vercel.app/user/${email}`;

  const response = await fetch(
    `https://a-12-chakka-server-side.vercel.app/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("chaka-token")}`,
      },
    }
  );

  const user = await response.json();
  console.log("User Role Func ", user);
  return user;
};

// export const SellerVerify = async (email) => {
//   const url = `https://a-12-chakka-server-side.vercel.app/user/${email}`;

//   const response = await fetch(`https://a-12-chakka-server-side.vercel.app/user/${email}`);

//   const user = await response.json();
//   console.log("User Seller Role", user)
//   return user;
// };
