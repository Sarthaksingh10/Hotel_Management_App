import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const QueryClient = useQueryClient();

  const { mutate: DeleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      QueryClient.invalidateQueries({ queryKey: ["bookings"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { DeleteBooking, isDeleting };
}
