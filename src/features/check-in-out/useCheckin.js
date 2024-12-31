import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

export function useCheckin() {
  const QueryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: Checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      QueryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => {
      toast.error("We have an error while checking in");
    },
  });

  return { Checkin, isCheckingIn };
}
