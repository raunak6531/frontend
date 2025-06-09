const AuthHeader = ({ isLogin }) => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-xl bg-[#273047] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 3a2.5 2.5 0 1 1-2.5 2.5A2.503 2.503 0 0 1 12 5Zm0 14.2a7.2 7.2 0 0 1-6-3.2 4.8 4.8 0 0 1 12 0 7.2 7.2 0 0 1-6 3.2Z"/>
          </svg>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-white mb-2">
          {isLogin ? "Sign in with email" : "Create your account"}
        </h1>
        <p className="text-gray-400">
          {isLogin ? "Continue your learning adventure with us" : "Start your learning journey today"}
        </p>
      </div>
    </>
  );
};

export default AuthHeader; 