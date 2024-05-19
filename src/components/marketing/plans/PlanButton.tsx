"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlanButton({ plan, subscription }) {
  const [isMutating, setIsMutating] = useState(false); // For loading
  const router = useRouter();

  async function createCheckout(e, variantId) {
    setIsMutating(true);

    // Create a checkout
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        variantId: variantId,
      }),
    });
    const checkout = await res.json();
    if (checkout.error) {
      toast.error(checkout.message);
    } else {
      console.log(checkout["url"]);
      try {
        LemonSqueezy.Url.Open(checkout["url"]);
      } catch (error) {
        if (error) {
          router.push(checkout["url"]);
        }
      }
    }

    setIsMutating(false);
  }

  return (
    <Button
      onClick={(e) => createCheckout(e, Number(plan.variant_id))}
      className="gap-1"
    >
      {isMutating ? (
        <>
          <Loader size={16} className="animate animate-spin" />
          <span className="animate-pulse">Processing</span>
        </>
      ) : (
        "Choose plan"
      )}
    </Button>
  );
}
