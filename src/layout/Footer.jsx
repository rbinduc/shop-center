import Button from "../components/Button";
import { useForm } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xbjednql");
  return (
    <>
      <hr />
      <section className="bg-neutral-800 text-white">
        <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center items-center px-4 py-20 max-w-6xl m-auto">
          <div>
            <p className="text-3xl font-bold mb-3 text-center md:text-left">
              Subscribe for our{" "}
              <span className="text-amber-400">Newsletter</span>
            </p>
            <p className="text-gray-500 max-w-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              deleniti obcaecati ab placeat enim id.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-start">
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  className="bg-white text-black p-4 outline-none h-14"
                />
                <Button label={"Subscribe"} className="!m-0" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-amber-400 sm:justify-start text-lg font-bold">
              {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
              Shop Center.
            </div>

            <div className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              <ul className="flex gap-4 justify-center">
                <li>T&C</li>
                <li>Career</li>
                <li>Privacy & Policy</li>
                <li>Developers</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
