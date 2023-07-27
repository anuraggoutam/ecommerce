export default function NewUser() {
  return (
    <div className="newUser flex-[4]">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm flex-wrap ">
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Username
          </label>
          <input
            type="text"
            placeholder="john"
            className="h-5 p-2 border-[1px] border-solid border-gray-500 rounded "
          />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Smith"
            className="h-5 p-2 border-[1px] border-solid border-gray-500 rounded "
          />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Email
          </label>
          <input
            type="email"
            placeholder="john@gmail.com"
            className="h-5 p-2 border-[1px] border-solid border-gray-500 rounded "
          />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className="">Password</label>
          <input
            type="password"
            placeholder="password"
            className="h-5 p-2 border-[1px] border-solid border-gray-500 rounded "
          />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Phone
          </label>
          <input
            type="text"
            placeholder="+1 123 456 78"
            className="h-5 p-2 border-[1px] border-solid border-gray-500 rounded "
          />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Address
          </label>
          <input
            type="text"
            placeholder="New York | USA"
            className="h-5 p-2 border-[1px] border-solid border-gray-500 rounded "
          />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Gender
          </label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="mt-4"
            />
            <label for="male" className="m-2 text-lg text-gray-500">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className="mt-4"
            />
            <label for="female" className="m-2 text-lg text-gray-500">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              className="mt-4"
            />
            <label for="other" className="m-2 text-lg text-gray-500">
              Other
            </label>
          </div>
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Active
          </label>
          <select
            className="newUserSelect h-52 rounded"
            name="active"
            id="active"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton w-48 border-none bg-blue-700 text-white font-semibold rounded-xl mt-8 cursor-pointer ">
          Create
        </button>
      </form>
    </div>
  );
}
