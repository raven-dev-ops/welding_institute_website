import Layout from "@layout/Layout";
import Page from "@layout/Page";

export default function Deposits() {
  return (
    <Layout pageTitle="CIWT Program Reservations">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">
          Hobby & Master Welding Class Deposits
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Secure your spot in our popular welding programs with a simple
          deposit. Below are the current deposit amounts for our training
          courses.
        </p>

        <div className="space-y-6">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              16-24 Week Master Welding Program Deposit
            </h2>
            <p className="text-gray-700 mb-2">
              Reserve your seat in the 16-24 Week Master Welding Program.
            </p>
            <p className="font-bold text-blue-700 text-lg">$250.00</p>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              8 Hour Program - Hobby Welding Course
            </h2>
            <p className="text-gray-700 mb-2">
              Secure your spot in our 8 Hour Hobby Welding Course.
            </p>
            <p className="font-bold text-blue-700 text-lg">$295.00</p>
          </div>
        </div>

        <p className="text-base text-gray-600 mt-8">
          Please contact our admissions team if you have questions about your
          deposit or payment options.
        </p>
      </div>
    </Layout>
  );
}
