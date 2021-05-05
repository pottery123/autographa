import 'tailwindcss/tailwind.css';

function InputBar({ title }) {
  function clearText() {
    document.getElementById(title).value = '';
}

  return (
    <div>
      <h4 className="text-xs font-base mb-2 ml-3 text-primary  tracking-wide leading-4  font-light">{title}</h4>
      <div className=" flex justify-between h-10 w-96 border-2 bg-white  border-gray-300  rounded-md">
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

export default function UserProfile() {
    return (
      <div className=" bg-gray-100 flex">
        <div className="w-60 h-screen bg-black">
          <div className="grid grid-rows-5 p-8 gap-16 pb-20 mr-20">
            <div className="grid grid-cols-2">
              <img
                className=""
                src="/GreenCheck.svg"
                alt="Workflow"
              />
              <div className="text-white tracking-wider pl-3"> Name</div>
            </div>

            <div className="grid grid-cols-2">
              <img
                className=""
                src="/step2.svg"
                alt="Workflow"
              />
              <div className="text-white tracking-wider  pl-3"> Email</div>
            </div>

            <div className="grid grid-cols-2">
              <img
                className=""
                src="/step3.svg"
                alt="Workflow"
              />
              <span className="text-white tracking-wider pl-3 "> Region</span>
            </div>

            <div className="grid grid-cols-2">
              <img
                className=""
                src="/step4.svg"
                alt="Workflow"
              />
              <span className="text-white tracking-wider  pl-3"> Password</span>
            </div>

            <div className="grid grid-cols-2">
              <img
                className=""
                src="/step5.svg"
                alt="Workflow"
              />
              <span className="text-white tracking-wider pl-3  "> Organisation</span>
            </div>
          </div>
        </div>
        <div className="w-full bg-white ml-5 mt-3 mr-3 mb-3 rounded-lg shadow border-2">

          <form className="grid gap-12 grid-rows-8 pt-5 pl-5">
            <div className="flex gap-8">
              <input
                type="text"
                name="search_box"
                id="search_box"
                autoComplete="given-name"
                className="bg-gray-100 w-44 block rounded shadow-sm sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-200 h-10"
              />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="given-name"
                className="bg-gray-100 w-44 h-10  block rounded  sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-200 "
              />
            </div>

            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              className="bg-gray-100 w-96 block rounded shadow-sm sm:text-sm focus:ring-gray-500 focus:border-primary border-gray-200 h-10"
            />
            <InputBar title="Location" />
            <div className="flex gap-3">
              <input
                className="rounded bg-gray-100 h-10 w-96 border-gray-200 "
                type="password"
              />
              <button
                className=""
                type="button"
                label="na"
              >
                <img
                  className=" w-10 h-10 mt-1"
                  src="/Button.svg"
                  alt="xbutton"
                />
              </button>
            </div>
            <InputBar title=" Organisation" />
            <InputBar title=" Region" />
            <InputBar title="App Langauge" />
            <button
              type="button"
              className=" w-20 h-9 bg-success  shadow-md font-light text-white border-none text-xs leading-5 rounded uppercase"
            >
              Save
            </button>
          </form>

        </div>
      </div>
    );
}
