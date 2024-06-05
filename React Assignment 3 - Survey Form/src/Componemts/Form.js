export default function Form() {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Survey Form
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please fill in the website information
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20 backdrop-blur-2xl backdrop-brightness-90 p-6 shadow-2xl ring-1 ring-black rounded-2xl">
        <div className="space-y-12">
          <div className="border-b border-gray-400 pb-12">
            <h2 className="text-base font-semibold leading-7">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fillup some of your personal details before going forward.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Aditya"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Khade"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6"
                >
                  Which option best describes your current role?
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    autoComplete="role-name"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Student</option>
                    <option>Full-time Job</option>
                    <option>Full Time Learner</option>
                    <option>Prefer not to say</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="18"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6"
                >
                  Country
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    autoComplete="address-level1"
                    placeholder="India"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    placeholder="100001"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-400 pb-12">
            <h2 className="text-base font-semibold leading-7">
              Service Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will help us to improve our services and deliver
              the the best to you.
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6">
                  What is your favorite feature of our company?
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="challenges"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="challenges"
                      className="block text-sm font-medium leading-6"
                    >
                      Challenges
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="projects"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="projects"
                      className="block text-sm font-medium leading-6"
                    >
                      Projects
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="community"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="community"
                      className="block text-sm font-medium leading-6"
                    >
                      Community
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="open-source"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="open-source"
                      className="block text-sm font-medium leading-6"
                    >
                      Open Source
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-sm font-semibold leading-6">
                  What would you like to see improved? (Check all that apply)
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="projects"
                        name="projects"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-400 text-black focus:ring-black"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="projects" className="font-medium">
                        Projects
                      </label>
                      <p className="text-gray-600">
                        Will be notified through email when projects are updated
                        to latest.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="osc"
                        name="osc"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-400 text-black focus:ring-black"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="osc" className="font-medium">
                        Open Source Community
                      </label>
                      <p className="text-gray-600">
                        Will be notified through email when a open source
                        community is updated to latest.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="challenges"
                        name="challenges"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-400 text-black focus:ring-black"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="challenges" className="font-medium">
                        Challenges
                      </label>
                      <p className="text-gray-600">
                        Will be notified through email when challenges are
                        updated to latest.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="col-span-full">
                <label for="cos" class="block text-sm font-medium leading-6">
                  Any comments or suggestions?
                </label>
                <div class="mt-2">
                  <textarea
                    id="cos"
                    name="cos"
                    rows="3"
                    placeholder="Enter your comment or suggestion here"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <p class="mt-3 text-center text-sm leading-6 text-gray-600">
                Thank you for taking the time to help us improve the platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="reset" className="text-sm font-semibold leading-6">
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
