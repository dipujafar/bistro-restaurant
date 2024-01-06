import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment/moment";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res?.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-medium">
        Total Payments: {payments.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Price</th>
              <th>TransactionId</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment,inx)=>  <tr key={payment._id}>
              <th>{inx + 1}</th>
              <td>{payment.price}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.status}</td>
              <td>{moment(payment.date).format("MMM Do YY")   }</td>
            </tr>)}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
