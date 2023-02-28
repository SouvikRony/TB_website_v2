import React from "react";
import logo from "../doodle.svg";

export default function Contact() {
  return (
    <div className="max-w-full bg-gray-800">
      <div className="grid max-w-screen-xl  grid-cols-1 gap-8 px-8 py-16 mx-auto items-center justify-center rounded-lg md:grid-cols-2 md:px-20 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src={logo} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border-2 border-gray-500 dark:bg-gray-800"
            />
            <div
              data-lastpass-icon-root="true"
              // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
            ></div>
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded border-2 border-gray-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded border-2 border-gray-500 dark:bg-gray-800"
              data-gramm="false"
              wt-ignore-input="true"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
