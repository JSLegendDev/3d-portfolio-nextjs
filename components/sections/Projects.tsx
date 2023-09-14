import Logo from "../3dmodels/Logo";

export default function Projects() {
  return (
    <section>
      <div className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1
                  id="skills"
                  className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Projects
                </h1>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col gap-x-4 rounded-md py-8">
                    <p className="rounded-md bg-blue-800 px-8 py-2 text-center">
                      Libraries & Frameworks
                    </p>
                    <ul className="p-12 text-xl leading-8">
                      <li className="list-disc">React</li>
                      <li className="list-disc">Next.js</li>
                      <li className="list-disc">GraphQL</li>
                      <li className="list-disc">SequelizeORM</li>
                    </ul>
                    <p className="rounded-md bg-blue-800 px-8 py-2 text-center">
                      Programming Languages
                    </p>
                    <ul className="p-12 text-xl leading-8">
                      <li className="list-disc">JavaScript</li>
                      <li className="list-disc">TypeScript</li>
                      <li className="list-disc">HTML/CSS</li>
                      <li className="list-disc">Python</li>
                      <li className="list-disc">Java</li>
                    </ul>
                    <p className="rounded-md bg-blue-800 px-8 py-2 text-center">
                      Tools
                    </p>
                    <ul className="p-12 text-xl leading-8">
                      <li className="list-disc">Git</li>
                      <li className="list-disc">VSCode</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-2 lg:row-start-1">
            <Logo zoom={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
