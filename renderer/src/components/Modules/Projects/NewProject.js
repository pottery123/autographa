import 'tailwindcss/tailwind.css';
import React from 'react';
import { Menu } from '@headlessui/react';

function Dropdown() {
  return (
    <Menu>
      <Menu.Button className="
      flex
      justify-between
      pt-3
      shadow
      tracking-wider
      leading-none
      h-10
      w-2/3
      px-4
      py-2
      text-sm
      font-medium
       text-black
      bg-gray-100
        rounded-md
        focus:outline-none"
      >
        <div>
          Advanced Settings
        </div>
        <img
          className="justify-self-end mt-1"
          src="/arrow-down.svg"
          alt=""
        />

      </Menu.Button>
      <Menu.Items />
    </Menu>
  );
}

function InputBar({ title }) {
  function clearText() {
    document.getElementById(title).value = '';
}
function HasChip() {
  return (

    <div className="rounded-full h-6 w-16 text-sm bg-gray-300 font-semibold leading-4 pl-5 pt-1 mb-3">LTR</div>
  );
}

  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-xs font-base mb-2 ml-3 text-primary  tracking-wide leading-4  font-light">{title}</h4>
        <HasChip />
      </div>
      <div className=" flex justify-between h-10 w-80 border-2 bg-white  border-gray-300  rounded-md">
        <input
          type="text"
          className="border-1 border-white  bg-white rounded-full m-1 focus:ring-white focus:border-none"
          id={title}
        />
        <button
          onClick={clearText}
          type="button"
        >
          <img
            className=" w-5 h-5 m-2 "
            src="/xbutton.svg"
            alt="xbutton"
          />
        </button>
      </div>
    </div>
  );
}

  export default function NewProject() {
      return (
        <div className="flex">
          <div className=" h-screen ml-5 mt-5 mb-5  bg-white  rounded-l-lg shadow border-2 border-r-0 w-2/4">
            <div className="grid grid-row-5 gap-10 m-8 w-full">
              <div className="">
                <h4 className="text-xs font-base mb-2 text-primary  tracking-wide leading-4  font-light">Project Name</h4>
                <input
                  type="text"
                  name="search_box"
                  id="search_box"
                  autoComplete="given-name"
                  className="bg-gray-200 w-80 block rounded shadow-sm sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-300"
                />
              </div>
              <div className="flex gap-8">
                <input
                  type="text"
                  name="search_box"
                  id="search_box"
                  autoComplete="given-name"
                  className="bg-white w-80 block rounded shadow-sm sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-300"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="bg-white w-20 block rounded  sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-300"
                />
              </div>
              <div>
                <h4 className="text-xs font-base mb-2 text-primary leading-4 tracking-wide  font-light">Description</h4>
                <textarea
                  type="text"
                  name="search_box"
                  id="search_box"
                  autoComplete="given-name"
                  className="bg-white w-80 h-28  block rounded shadow-sm sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-300"
                />
              </div>
              <div className="flex gap-5">
                <InputBar title="Target Langauge" />
                <button
                  className="mt-10"
                  type="button"
                  label="na"
                >
                  <img
                    className=" w-10 h-10"
                    src="/add-button.svg"
                    alt="xbutton"
                  />
                </button>
              </div>
              <Dropdown />
              <button type="button" className="w-40 h-10  bg-success leading-loose rounded shadow text-xs font-base  text-white tracking-wide  font-light uppercase">Create Project</button>
            </div>
          </div>
          <div className=" bg-black w-1 h-screen mt-5 mb-5 " />
          <div className="h-screen  mr-5 mt-5 mb-5 ml-0 bg-white rounded-r-lg shadow border-2 border-l-0  w-2/4" />
        </div>
      );
}
