import React, { ChangeEventHandler } from "react";
import ReactDOM from "react-dom";
import {
  Form,
  redirect,
  To,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import "../../../sass/pages/checkout/checkout.scss";
import OrderSuccess from "../../shared/OrderSuccess";
import { Item } from "../../store/CartContextProvider";
import Summary from "./Summary";

export const checkoutAction = async function ({
  request,
}: {
  request: Request;
}) {
  const url = request.url;
  const formData = await request.formData();
  const paymentMethod = formData.get("payment");
  const userName = formData.get("name");
  const params: Item[] = JSON.parse(
    new URL(url).searchParams.get("items") as string
  );

  try {
    let res;
    let paymentUrl;

    console.log({
      "👽👽 data": JSON.stringify({
        items: params.map((item) => {
          return { id: item.name, quantity: item.count };
        }),
      }),
    });

    console.log({
      "👽👽 data": JSON.stringify(params),
      userName,
    });
    // if (paymentMethod === "cash") {
    //   res = await fetch(
    //     "https://tmp-e-commerce-server.onrender.com/create-checkout",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         items: params.map((item) => {
    //           return { id: item.name, quantity: item.count };
    //         }),
    //       }),
    //       credentials: "include",
    //     }
    //   );
    //   const data = await res.json();
    //   paymentUrl = data.url;
    // } else {
    //   res = await fetch(
    //     `https://tmp-e-commerce-server.onrender.com/create-charge?params=${JSON.stringify(
    //       params
    //     )}&name=${userName}`,
    //     { credentials: "include" }
    //   );
    //   const data = await res.json();
    //   paymentUrl = data.hosted_url;
    // }
    // if (!res.ok) {
    //   return res.json().then((json) => Promise.reject(json));
    // }
    // throw redirect(paymentUrl);
  } catch (err) {
    throw err;
  }
  return null;
};

const formVal: ChangeEventHandler<HTMLInputElement> = function (e) {
  let isValid = false;

  // Get the current payment method from the form
  const form = e.target.closest("form");
  const paymentMethod = (
    form?.querySelector(
      'input[name="paymentMethod"]:checked'
    ) as HTMLInputElement | null
  )?.value;

  switch (e.target.name) {
    case "name": {
      isValid = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e.target.value);
      break;
    }
    case "address":
    case "city": {
      isValid = /\w+/g.test(e.target.value);
      break;
    }
    case "zip-code": {
      isValid = /^\d{5}(?:[-\s]\d{4})?$/.test(e.target.value);
      break;
    }
    case "country": {
      isValid = /\w{3,}/.test(e.target.value);
      break;
    }
    case "phone": {
      isValid = /^[0-9+-]+$/.test(e.target.value);
      break;
    }
    case "eMoneyNumber": {
      // Only validate if e-Money is selected
      if (paymentMethod === "e-Money") {
        // isValid = /^\d$/.test(e.target.value);
      } else {
        // If cash is selected, e-Money fields are not required
        isValid = true;
        e.target.classList.remove("invalid");
        return;
      }
      break;
    }
    case "eMoneyPIN": {
      // Only validate if e-Money is selected
      if (paymentMethod === "e-Money") {
        // isValid = /^\d{4,6}$/.test(e.target.value);
      } else {
        // If cash is selected, e-Money fields are not required
        isValid = true;
        e.target.classList.remove("invalid");
        return;
      }
      break;
    }
  }

  isValid
    ? e.target.classList.remove("invalid")
    : e.target.classList.add("invalid");
};

const Checkout: React.FC = function () {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.get("orderSuccess") === "false") {
    throw new Error(
      "Something went wrong with your payment. Please try again."
    );
  }

  return (
    <Form method="post" className="checkout">
      <div className="container">
        <h1>Checkout</h1>
        <div className="billing-details">
          <h2>billing details</h2>
          <label className="label" htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Alexei Ward"
              name="name"
              pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
              onChange={formVal}
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="email">
            Email Address
            <input
              type="email"
              placeholder="alexei@mail.com"
              name="email"
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="phone">
            Phone Number
            <input
              type="text"
              onChange={formVal}
              placeholder="+1 202-555-0136"
              pattern="^[0-9+-]+$"
              name="phone"
              required
            />
            <p>invalid format!!</p>
          </label>
        </div>
        <div className="shipping-info">
          <h2>shipping info</h2>
          <label className="label" htmlFor="address">
            Your Address
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              name="address"
              pattern="[A-Za-z0-9,\s]+"
              onChange={formVal}
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="zip-code">
            ZIP Code
            <input
              type="text"
              placeholder="10001"
              onChange={formVal}
              pattern="^\d{5}(?:[-\s]\d{4})?$"
              name="zip-code"
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="city">
            City
            <input
              type="text"
              onChange={formVal}
              pattern="[A-Za-z0-9,\s]+"
              placeholder="New York"
              name="city"
              required
            />
            <p>This field is required</p>
          </label>
          <label className="label" htmlFor="country">
            Country
            <input
              type="text"
              placeholder="United States"
              name="country"
              pattern="[A-Za-z0-9,-\s]{3,}"
              onChange={formVal}
              required
            />
            <p>This field is required</p>
          </label>
        </div>
        <div className="payment-details">
          <h2>Payment Details</h2>
          <div className="method">
            <p>Payment Method</p>
            <label htmlFor="e-Money">
              <input
                type="radio"
                name="payment"
                value="e-Money"
                id="e-Money"
                required
              />
              Pay with e-Money
            </label>
            <label htmlFor="cash">
              <input
                type="radio"
                name="payment"
                value="cash"
                id="cash"
                required
              />
              Cash on Delivery
            </label>
          </div>

          <div>
            <label htmlFor="e-Money">
              e-Money Number
              <input
                name="e-money-number"
                type="number"
                className="emoney-number"
                onChange={formVal}
                placeholder="238521993"
                id="e-money-number"
                required
              />
            </label>
            <label htmlFor="e-Money-pin">
              e-Money PIN
              <input
                type="input"
                name="e-money-pin"
                className="emoney-pin"
                onChange={formVal}
                placeholder="6891"
                id="e-money-pin"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <Summary />
      {searchParams.get("ordersuccess") &&
        ReactDOM.createPortal(
          <OrderSuccess />,
          document.getElementById("modal-root")!
        )}
    </Form>
  );
};

export default Checkout;

// import React, { ChangeEventHandler } from "react";
// import ReactDOM from "react-dom";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { redirect, useNavigate, useSearchParams } from "react-router-dom";

// import "../../../sass/pages/checkout/checkout.scss";
// import OrderSuccess from "../../shared/OrderSuccess";
// import { Item } from "../../store/CartContextProvider";
// import Summary from "./Summary";

// import { z } from "zod";

// export const checkoutSchema = z
//   .object({
//     name: z.string().min(1, "Name is required"),
//     email: z.string().email("Invalid email"),
//     phone: z.string().min(1, "Phone number is required"),
//     address: z.string().min(1, "Address is required"),
//     zip: z.string().min(1, "ZIP code is required"),
//     city: z.string().min(1, "City is required"),
//     country: z.string().min(1, "Country is required"),
//     paymentMethod: z.enum(["e-Money", "Cash on Delivery"]),
//     eMoneyNumber: z.string().optional(),
//     eMoneyPIN: z.string().optional(),
//   })
//   .superRefine((data, ctx) => {
//     if (data.paymentMethod === "e-Money") {
//       if (!data.eMoneyNumber) {
//         ctx.addIssue({
//           code: "custom",
//           message: "e-Money number is required",
//           path: ["eMoneyNumber"],
//         });
//       }
//       if (!data.eMoneyPIN) {
//         ctx.addIssue({
//           code: "custom",
//           message: "e-Money PIN is required",
//           path: ["eMoneyPIN"],
//         });
//       }
//     }
//   });

// export type CheckoutFormData = z.infer<typeof checkoutSchema>;

// export const checkoutAction = async function ({
//   request,
// }: {
//   request: Request;
// }) {
//   const url = request.url;
//   const formData = await request.formData();
//   const paymentMethod = formData.get("paymentMethod");
//   const userName = formData.get("name");
//   const params: Item[] = JSON.parse(
//     new URL(url).searchParams.get("items") as string
//   );

//   try {
//     let res;
//     let paymentUrl;
//     if (paymentMethod === "e-Money") {
//       res = await fetch(
//         "https://tmp-e-commerce-server.onrender.com/create-checkout",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             items: params.map((item) => {
//               return { id: item.name, quantity: item.count };
//             }),
//           }),
//           credentials: "include",
//         }
//       );
//       const data = await res.json();
//       paymentUrl = data.url;
//     } else {
//       res = await fetch(
//         `https://tmp-e-commerce-server.onrender.com/create-charge?params=${JSON.stringify(
//           params
//         )}&name=${userName}`,
//         { credentials: "include" }
//       );
//       const data = await res.json();
//       paymentUrl = data.hosted_url;
//     }
//     if (!res.ok) {
//       return res.json().then((json) => Promise.reject(json));
//     }
//     throw redirect(paymentUrl);
//   } catch (err) {
//     throw err;
//   }
//   return null;
// };

// const formVal: ChangeEventHandler<HTMLInputElement> = function (e) {
//   let isValid = false;

//   // Get the current payment method from the form
//   const form = e.target.closest("form");
//   const paymentMethod = (
//     form?.querySelector(
//       'input[name="paymentMethod"]:checked'
//     ) as HTMLInputElement | null
//   )?.value;

//   switch (e.target.name) {
//     case "name": {
//       isValid = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e.target.value);
//       break;
//     }
//     case "address":
//     case "city": {
//       isValid = /\w+/g.test(e.target.value);
//       break;
//     }
//     case "zip": {
//       isValid = /^\d{5}(?:[-\s]\d{4})?$/.test(e.target.value);
//       break;
//     }
//     case "country": {
//       isValid = /\w{3,}/.test(e.target.value);
//       break;
//     }
//     case "phone": {
//       isValid = /^[0-9+-]+$/.test(e.target.value);
//       break;
//     }
//     case "eMoneyNumber": {
//       // Only validate if e-Money is selected
//       if (paymentMethod === "e-Money") {
//         isValid = /^\d{9,12}$/.test(e.target.value);
//       } else {
//         // If cash is selected, e-Money fields are not required
//         isValid = true;
//         e.target.classList.remove("invalid");
//         return;
//       }
//       break;
//     }
//     case "eMoneyPIN": {
//       // Only validate if e-Money is selected
//       if (paymentMethod === "e-Money") {
//         isValid = /^\d{4,6}$/.test(e.target.value);
//       } else {
//         // If cash is selected, e-Money fields are not required
//         isValid = true;
//         e.target.classList.remove("invalid");
//         return;
//       }
//       break;
//     }
//   }

//   isValid
//     ? e.target.classList.remove("invalid")
//     : e.target.classList.add("invalid");
// };

// const Checkout: React.FC = function () {
//   const navigate = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState: { errors },
//   } = useForm<CheckoutFormData>({
//     resolver: zodResolver(checkoutSchema),
//     defaultValues: {
//       paymentMethod: "e-Money",
//     },
//   });

//   const paymentMethod = watch("paymentMethod");

//   const onSubmit = async (data: CheckoutFormData) => {
//     console.log("🚀 ~ onSubmit ~ data:", data);
//     try {
//       // Get cart items from search params
//       const items: Item[] = JSON.parse(searchParams.get("items") || "[]");

//       let res;
//       let paymentUrl;

//       console.log({
//         "👽👽 data": JSON.stringify({
//           items: items.map((item) => ({
//             id: item.name,
//             quantity: item.count,
//           })),
//         }),
//       });

//       // if (data.paymentMethod === "e-Money") {
//       //   res = await fetch(
//       //     "https://tmp-e-commerce-server.onrender.com/create-checkout",
//       //     {
//       //       method: "POST",
//       //       headers: {
//       //         "Content-Type": "application/json",
//       //       },
//       //       body: JSON.stringify({
//       //         items: items.map((item) => ({
//       //           id: item.name,
//       //           quantity: item.count,
//       //         })),
//       //       }),
//       //       credentials: "include",
//       //     }
//       //   );
//       //   const responseData = await res.json();
//       //   paymentUrl = responseData.url;
//       // } else {
//       //   res = await fetch(
//       //     `https://tmp-e-commerce-server.onrender.com/create-charge?params=${JSON.stringify(
//       //       items
//       //     )}&name=${data.name}`,
//       //     { credentials: "include" }
//       //   );
//       //   const responseData = await res.json();
//       //   paymentUrl = responseData.hosted_url;
//       // }

//       // if (!res.ok) {
//       //   throw new Error("Payment processing failed");
//       // }

//       // Redirect to payment URL
//       // window.location.href = paymentUrl;
//     } catch (error) {
//       console.error("Checkout error:", error);
//       // Handle error appropriately
//     }
//   };

//   if (searchParams.get("orderSuccess") === "false") {
//     throw new Error(
//       "Something went wrong with your payment. Please try again."
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="checkout">
//       <div className="container">
//         <h1>Checkout</h1>
//         <div className="billing-details">
//           <h2>billing details</h2>
//           <label className="label" htmlFor="name">
//             Name
//             <input
//               type="text"
//               placeholder="Micheal Essuman"
//               {...register("name")}
//             />
//             {errors.name && <p>{errors.name.message}</p>}
//           </label>
//           <label className="label" htmlFor="email">
//             Email Address
//             <input
//               type="email"
//               placeholder="micheal@mail.com"
//               {...register("email")}
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//           </label>
//           <label className="label" htmlFor="phone">
//             Phone Number
//             <input
//               type="text"
//               placeholder="+1 202-555-0136"
//               {...register("phone")}
//             />
//             {errors.phone && <p>{errors.phone.message}</p>}
//           </label>
//         </div>
//         <div className="shipping-info">
//           <h2>shipping info</h2>
//           <label className="label" htmlFor="address">
//             Your Address
//             <input
//               type="text"
//               placeholder="1137 Accra Avenue"
//               {...register("address")}
//             />
//             {errors.address && <p>{errors.address.message}</p>}
//           </label>
//           <label className="label" htmlFor="zip">
//             ZIP Code
//             <input type="text" placeholder="10001" {...register("zip")} />
//             {errors.zip && <p>{errors.zip.message}</p>}
//           </label>
//           <label className="label" htmlFor="city">
//             City
//             <input type="text" placeholder="Accra" {...register("city")} />
//             {errors.city && <p>{errors.city.message}</p>}
//           </label>
//           <label className="label" htmlFor="country">
//             Country
//             <input type="text" placeholder="Ghana" {...register("country")} />
//             {errors.country && <p>{errors.country.message}</p>}
//           </label>
//         </div>
//         <div className="payment-details">
//           <h2>Payment Details</h2>
//           <div className="method">
//             <p>Payment Method</p>
//             <Controller
//               control={control}
//               name="paymentMethod"
//               render={({ field }) => (
//                 <>
//                   <label htmlFor="e-Money">
//                     <input
//                       type="radio"
//                       value="e-Money"
//                       id="e-Money"
//                       checked={field.value === "e-Money"}
//                       onChange={(e) => field.onChange(e.target.value)}
//                     />
//                     Pay with e-Money
//                   </label>
//                   <label htmlFor="cash">
//                     <input
//                       type="radio"
//                       value="Cash on Delivery"
//                       id="cash"
//                       checked={field.value === "Cash on Delivery"}
//                       onChange={(e) => field.onChange(e.target.value)}
//                     />
//                     Cash on Delivery
//                   </label>
//                 </>
//               )}
//             />
//           </div>

//           {paymentMethod === "e-Money" && (
//             <div className="e-money-details">
//               <label htmlFor="eMoneyNumber" className="emoney-number-label">
//                 e-Money Number
//                 <input
//                   type="text"
//                   className="emoney-number"
//                   placeholder="238521993"
//                   id="eMoneyNumber"
//                   {...register("eMoneyNumber")}
//                 />
//                 {errors.eMoneyNumber && <p>{errors.eMoneyNumber.message}</p>}
//               </label>
//               <label htmlFor="eMoneyPIN" className="emoney-pin-label">
//                 e-Money PIN
//                 <input
//                   type="text"
//                   placeholder="6891"
//                   className="emoney-pin"
//                   id="eMoneyPIN"
//                   {...register("eMoneyPIN")}
//                 />
//                 {errors.eMoneyPIN && <p>{errors.eMoneyPIN.message}</p>}
//               </label>
//             </div>
//           )}
//         </div>
//       </div>

//       <Summary />

//       {searchParams.get("ordersuccess") &&
//         ReactDOM.createPortal(
//           <OrderSuccess />,
//           document.getElementById("modal-root")!
//         )}
//     </form>
//   );
// };

// export default Checkout;
