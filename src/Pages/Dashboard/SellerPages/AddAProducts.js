import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { getImageUrl, getUpload } from "../../../Api/imageUpload";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getRole } from "../../../Api/UserRole";

const AddAProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [sellerStatus, setsellerStatus] = useState("");

  useEffect(() => {
    getRole(user?.email)
      .then((data) => {
        console.log("User Role from sidebar :", data.sellerStatus);
        setsellerStatus(data.sellerStatus);
      })
      .catch((err) => console.log("Error", err));
  }, [user]);

  const handleAddProductSubmit = (data) => {
    const image = data.productImage[0];
    console.log("check image for add book", image);
    console.log("All form data from add a products ", data);

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const userInfo = {
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      userUid: user.uid,
    };

    let categoryId;
    let categoryName;
    if (data.productCategory === "Pickup") {
      categoryName = data.productCategory;
      categoryId = "11_pUx_pickUp";
    }
    if (data.productCategory === "Wagon") {
      categoryName = data.productCategory;
      categoryId = "121_wagon";
    }
    if (data.productCategory === "Off Roader") {
      categoryName = data.productCategory;
      categoryId = "191_cBx_offRoader";
    }

    // const addProductInfo={
    //     categoryName:categoryName,
    //     categoryId:categoryId,
    //     Yearofuse:data.Yearofuse,
    //     Yearofpurchase:data.Yearofpurchase,
    //     FuelType:data.FuelType,
    //     condition:data.productCondition,
    //     description:data.description,
    //     Milage:data.Milage,
    //     location:data.sellerLocation,
    //     price:data.productOrginalPrice,
    //     resalePrice:data.productResalePrice,
    //     userInfo,

    // }

    getImageUrl(image).then((imgData) => {
      const addProductInfo = {
        name: data.name,
        categoryName: categoryName,
        categoryId: categoryId,
        Yearofuse: data.Yearofuse,
        Yearofpurchase: data.Yearofpurchase,
        FuelType: data.FuelType,
        condition: data.productCondition,
        description: data.description,
        Milage: data.Milage,
        location: data.sellerLocation,
        price: data.productOrginalPrice,
        resalePrice: data.productResalePrice,
        imgUrl: imgData.data.display_url,
        sellerStatus:sellerStatus,
        time,
        date,
        userInfo,
      };
      // console.log("Added Producy from adda products",addProductInfo)
      fetch(
        "https://a-12-chakka-server-side.vercel.app/allCategoriesItemsCollection",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("chaka-token")}`,
          },

          body: JSON.stringify(addProductInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("CONGRATULATION !! PRODUCT IS ADDED SUCCESSFULLY");
            navigate(`/dashboard/seller/my-products/${user.email}`);
          }
        });

      // console.log("add a product",addProductInfo)
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="card flex-row flex-shrink-0 lg:w-6/12 w-[100%] shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(handleAddProductSubmit)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="productNames"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="image" className="block mb-2 text-sm">
                Product Image:
              </label>
              <input
                {...register("productImage", { required: true })}
                type="file"
                id="image"
                name="productImage"
                accept="image/*"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Orginal Price</span>
              </label>
              <input
                {...register("productOrginalPrice", { required: true })}
                type="number"
                placeholder="Orginal price"
                name="productOrginalPrice"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                type="number"
                placeholder="Resale price"
                name="productResalePrice"
                className="input input-bordered"
                {...register("productResalePrice", { required: true })}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Select Product Condition</span>
              </label>
              <select
                className="select select-bordered"
                name="productCondition"
                {...register("productCondition", { required: true })}
              >
                <option value="Excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="location"
                name="sellerLocation"
                className="input input-bordered"
                {...register("sellerLocation", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Milage</span>
              </label>
              <input
                type="text"
                placeholder="location"
                name="sellerLocation"
                className="input input-bordered"
                {...register("Milage", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                {...register("Yearofpurchase", { required: true })}
                type="text"
                placeholder="location"
                name="Yearofpurchase"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year of use</span>
              </label>
              <input
                {...register("Yearofuse", { required: true })}
                type="text"
                placeholder="location"
                name="Yearofuse"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Product Category</span>
              </label>
              <select
                className="select select-bordered"
                name="productCategory"
                {...register("FuelType", { required: true })}
              >
                <option value="Diesel">Diesel</option>
                <option value="Octane" slected>
                  Octane
                </option>
                <option value="Cng">Cng</option>
                <option value="Petroll" slected>
                  Petroll
                </option>
                <option value="Cng">Cng</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Product Category</span>
              </label>
              <select
                className="select select-bordered"
                name="productCategory"
                {...register("productCategory", { required: true })}
              >
                <option value="Off Roader">Off Roader</option>
                <option value="Pickup" slected>
                  Pickup
                </option>
                <option value="Wagon">Wagon</option>
              </select>
            </div>
            <textarea
              className="textarea textarea-bordered"
              name="productDescription"
              placeholder="About Your Products"
              {...register("description", { required: true })}
            ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProducts;
