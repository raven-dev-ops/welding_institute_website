import Layout from '@components/Layout';

export default function RequestTour() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Schedule a Campus Tour</h1>
        <p className="text-gray-700 mb-8 text-center">
          Tours are available Monday–Friday, 12pm to 6pm. Please choose your preferred date and time.
        </p>

        <form
          name="tour-request"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Netlify form hidden input */}
          <input type="hidden" name="form-name" value="tour-request" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Preferred Tour Date</label>
            <input
              type="date"
              name="date"
              required
              className="w-full border rounded px-3 py-2"
            />
            <p className="text-sm text-gray-500 mt-1">Monday–Friday only</p>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Preferred Time</label>
            <select
              name="time"
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select a time</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </Layout>
  );
}
