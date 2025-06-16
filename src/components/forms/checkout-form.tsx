import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  type CheckoutFormData,
} from "../../schemas/checkout.schema";

export default function CheckoutForm({
  onSubmit,
}: {
  onSubmit: (data: CheckoutFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "e-Money",
    },
  });

  const paymentMethod = watch("paymentMethod");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <div>
        <label>Address</label>
        <input {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label>ZIP</label>
        <input {...register("zip")} />
        {errors.zip && <p>{errors.zip.message}</p>}
      </div>
      <div>
        <label>City</label>
        <input {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label>Country</label>
        <input {...register("country")} />
        {errors.country && <p>{errors.country.message}</p>}
      </div>

      <div>
        <label>Payment Method</label>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <select {...field}>
              <option value="e-Money">e-Money</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          )}
        />
      </div>

      {paymentMethod === "e-Money" && (
        <>
          <div>
            <label>e-Money Number</label>
            <input {...register("eMoneyNumber")} />
            {errors.eMoneyNumber && <p>{errors.eMoneyNumber.message}</p>}
          </div>
          <div>
            <label>e-Money PIN</label>
            <input {...register("eMoneyPIN")} />
            {errors.eMoneyPIN && <p>{errors.eMoneyPIN.message}</p>}
          </div>
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
