import axios from "axios";
export const getRequest = async () => {
  const runtimeConfig = useRuntimeConfig();

  console.log("config", runtimeConfig.public.API_ENDPOINT);
  //   await axios
  //     .post(
  //       "http://34.192.161.38:3000/api/auth/sign-up",
  //       {
  //         first_name: "Jill",
  //         last_name: "Makadiya",
  //         mobile: 7016512456,
  //         country_code: 91,
  //         email: "jillmakadiya@gmail.com",
  //         role_id: "65f095d30db9cd87a52c5e3f",
  //         state: "Gujarat",
  //         district: "Rajot",
  //         sub_district: "Upleta",
  //         village: "Bhayavadar",
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("response", res);
  //     })
  //     .catch((error) => {
  //       console.error("Error While Fetch =>", error);
  //     });
};
