import React, { useState } from "react";
import Header from "./header";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  function toggleForm() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className=" w-full h-screen  opacity-120 bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/AE-en-20251103-TRIFECTA-perspective_b570fc17-ae57-44ed-9422-f4cfef8accef_small.jpg)] ">
      <Header />

      <Card className="w-4/12 px-4 m-auto mt-20 bg-black border-none opacity-80">
        <CardHeader className="text-white font-semibold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            {isSignUp && (
              <input
                className="h-12  my-auto px-2 text-white rounded-lg  bg-gray-700 border-none"
                type="name"
                autoComplete="none"
                placeholder="Name"
              />
            )}

            <input
              className="h-12  my-auto px-2 text-white rounded-lg  bg-gray-700 border-none"
              type="email"
              autoComplete="none"
              placeholder="Email"
            />
            <input
              className="h-12 my-auto px-2 text-white rounded-lg  bg-gray-700 border-none"
              type="password"
              autoComplete="none"
              placeholder="Password"
            />
            <Button className="bg-red-500 h-10 cursor-pointer hover:bg-red-600">
              {isSignUp ? "Sign Up" : "Login In"}
            </Button>
          </form>

          <div className=" text-white mt-6">
            <span>
              New to Netflix?{" "}
              <Button
                onClick={toggleForm}
                className="bg-transparent  text-lg hover:bg-transparent cursor-pointer font-bold p-0 m-0 h-auto"
              >
                Sign up now
              </Button>{" "}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
