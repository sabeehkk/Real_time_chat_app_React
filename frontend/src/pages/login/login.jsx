const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-w-96 mx-auto">
      <div className="h-full w-full p-6 shadow-md bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-none ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-400">ChatApp</span>
        </h1>
        <form >
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"  />
          </div>
          <div>
          <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"  />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">{"Don't"} have an account</a>
            <div>
            <button className="btn btn-block btn-sm mt-2 bg-blue-600 border-none hover:bg-blue-900">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center  min-w-96 mx-auto">
//       <div className="h-full w-full p-6 shadow-md bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-none ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-400">ChatApp</span>
//         </h1>
//         <form >
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"  />
//           </div>
//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"  />
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">{"Don't"} have an account</a>
//             <div>
//             <button className="btn btn-block btn-sm mt-2 bg-blue-600 border-none hover:bg-blue-900">Login</button>
//             </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
