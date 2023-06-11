import { ShippingAddressForm } from "@/components/Checkout/CheckoutForms/ShippingAddressForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const CheckoutAddress = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/checkout");
  }

  return (
    <div className="w-full">
      <div className="w-full bg-white mx-auto py-10">
        <ShippingAddressForm />
      </div>
    </div>
  );
};

export default CheckoutAddress;
