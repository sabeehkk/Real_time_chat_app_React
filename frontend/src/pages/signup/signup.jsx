import GenderCheckbox from "./genderCheckbox"

function SignUp() {
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-400">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Fullname</span>
            </label>
            <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="lebel p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" className="input w-full h-10 input-bordered" placeholder="Enter Password"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder=" Confirm Password" className="input h-10 w-full input-bordered" />
          </div>
          <GenderCheckbox />
          <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">Already have an account?</a>
           <div>
            <button className="btn btn-block btn-sm mt-2 bg-blue-600 border-none hover:bg-blue-900">Sigunp</button>
            </div> 
        </form>
      </div>
    </div>
  )
}
export default SignUp



// import GenderCheckbox from "./genderCheckbox"

// function SignUp() {
//   return (
//     <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
//       <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup
//           <span className="text-blue-400">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text ">Fullname</span>
//             </label>
//             <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" />
//           </div>
//           <div>
//             <label className="lebel p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" className="input w-full h-10 input-bordered" placeholder="Enter Password"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password" placeholder=" Confirm Password" className="input h-10 w-full input-bordered" />
//           </div>
//           <GenderCheckbox />
//           <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">Already have an account?</a>
//            <div>
//             <button className="btn btn-block btn-sm mt-2 bg-blue-600 border-none hover:bg-blue-900">Sigunp</button>
//             </div> 
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp