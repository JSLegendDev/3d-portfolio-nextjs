export default function Skills() {
  return (
    <section>
      <div className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className=" lg:sticky lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <canvas className="h-full w-full bg-red-300"></canvas>
          </div>
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Skills
                </h1>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col gap-x-4 rounded-md py-8">
                    <p className="bg-gray-100 px-8 py-2 text-center text-gray-700">
                      Frontend
                    </p>
                    <ul className="p-12 text-xl leading-8 text-gray-700">
                      <li className="list-disc">JavaScript</li>
                      <li className="list-disc">TypeScript</li>
                      <li className="list-disc">HTML/CSS</li>
                    </ul>
                    <button
                      type="button"
                      className="bg-gray-100 px-8 py-2 text-gray-700"
                    >
                      Backend
                    </button>
                    <ul className="p-12 text-xl leading-8 text-gray-700">
                      <li className="list-disc">JavaScript</li>
                      <li className="list-disc">TypeScript</li>
                      <li className="list-disc">HTML/CSS</li>
                    </ul>
                    <button
                      type="button"
                      className="bg-gray-100 px-8 py-2 text-gray-700"
                    >
                      Game Development
                    </button>
                    <ul className="p-12 text-xl leading-8 text-gray-700">
                      <li className="list-disc">JavaScript</li>
                      <li className="list-disc">TypeScript</li>
                      <li className="list-disc">HTML/CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
