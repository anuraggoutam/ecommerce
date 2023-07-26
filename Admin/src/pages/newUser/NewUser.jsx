import './newUser.css';

export default function NewUser() {
  return (
    <div className="newUser flex-[4]">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm flex-wrap ">
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Username
          </label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Full Name
          </label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Email
          </label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Phone
          </label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Address
          </label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Gender
          </label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem w-[400px] flex flex-col mt-2 mr-5">
          <label className=" mb-2 text-sm font-semibold text-[rgb(151,150,150)]">
            Active
          </label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
