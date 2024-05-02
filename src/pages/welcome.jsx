import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-indigo-600 sm:block">
                {" "}
                Increase Conversion.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring active:bg-indigo-600 sm:w-auto"
                to={"/login"}
              >
                Get Started
              </Link>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-800 focus:outline-none focus:ring active:text-indigo-600 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
