import { Typography } from "@components";
import Layout from "@layout/Layout";

export default function RequestTour() {
  return (
    <Layout pageTitle="CIWT Shop & Campus Tour" noHero showVideo={false}>
      <div className="relative float-none top-0 left-0 w-full h-auto pt-[30px] pb-[15px] px-[40px] mx-auto my-0 max-w-none min-w-0 text-center">
        <div className="flex max-w-[960px] mx-auto my-0 w-full">
          <div>
            <Typography level="h3">Request a tour</Typography>
            <div className="max-w-full">
              {/* form wrapper */}
              <div className="">
                <form
                  className="max-w-[960px] mx-auto my-0 w-full"
                  name="tour-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <div className="mt-[10px] mx-[.9375em]">
                    <Typography level="p">
                      Wanting to come check out our school? Set up a tour with
                      one of our admissions representatives today!
                    </Typography>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative px-[16px] mt-[10px]">
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Name<span class="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        class="text-[16px] border-2 mt-2 w-full  bg-[#0000001a] text-black border-white focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 px-4 h-12"
                      />
                    </div>

                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Phone<span class="text-red-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        pattern="^[\d\s+\-\.]*\d[\d\s+\-\.]*$"
                        class="mt-2 w-full rounded-md bg-gray-200/60 text-gray-900 placeholder-gray-500 border border-transparent focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 px-4 h-12"
                      />
                    </div>

                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Email<span class="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        class="mt-2 w-full rounded-md bg-gray-200/60 text-gray-900 placeholder-gray-500 border border-transparent focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 px-4 h-12"
                      />
                    </div>

                    <div>
                      <label
                        for="class"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Class Interested in Taking
                      </label>
                      <select
                        id="class"
                        name="class"
                        class="mt-2 w-full rounded-md bg-gray-200/60 text-gray-900 border border-transparent focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 px-4 h-12"
                      >
                        <option value="" selected disabled hidden></option>
                        <option>Master Welding Program</option>
                        <option>Hobby Welding</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div class="md:col-span-1">
                      <label
                        for="age"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Age
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="text"
                        class="mt-2 w-full rounded-md bg-gray-200/60 text-gray-900 border border-transparent focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 px-4 h-12"
                      />
                    </div>

                    <div class="md:col-span-1">
                      <label
                        for="education"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Highest Level of Education (not required for enrollment)
                      </label>
                      <select
                        id="education"
                        name="education"
                        class="mt-2 w-full rounded-md bg-gray-200/60 text-gray-900 border border-transparent focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 px-4 h-12"
                      >
                        <option value="" selected disabled hidden></option>
                        <option>None</option>
                        <option>High School Diploma</option>
                        <option>GED</option>
                        <option>Associates Degree</option>
                        <option>Bachelors Degree</option>
                        <option>Masters Degree</option>
                        <option>Doctorate</option>
                      </select>
                    </div>

                    <div class="md:col-span-2">
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-800"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        class="mt-2 w-full rounded-md bg-gray-200/60 text-gray-900 border border-transparent focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 p-4"
                      ></textarea>
                    </div>
                  </div>

                  <div class="mt-8">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center rounded-md bg-green-600 px-8 py-3 text-white font-semibold shadow-md hover:bg-green-700 active:bg-green-800 transition"
                    >
                      Request a Tour
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
