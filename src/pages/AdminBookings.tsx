// pages/AdminBookings.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("bookings")
        .select("*")
        .order("date");
      setBookings(data || []);
    })();
  }, []);

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        All Bookings
      </h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3 border-b">Date</th>
            <th className="px-6 py-3 border-b">Time</th>
            <th className="px-6 py-3 border-b">Name</th>
            <th className="px-6 py-3 border-b">Service</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
          {bookings.map((b) => (
            <tr key={b.id} className="hover:bg-gray-50 transition duration-200">
              <td className="px-6 py-4 border-b">{b.date}</td>
              <td className="px-6 py-4 border-b">{b.time}</td>
              <td className="px-6 py-4 border-b">{b.name}</td>
              <td className="px-6 py-4 border-b">{b.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
