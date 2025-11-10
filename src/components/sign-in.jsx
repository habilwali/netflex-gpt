import React, { useRef, useState } from "react";
import Header from "./header";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { checkValidation } from "@/lib/validate";

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState();
  const email = useRef();
  const password = useRef();
  function toggleForm() {
    setIsSignUp(!isSignUp);
  }

  function FormSubmition() {
    const validation = checkValidation(
      email.current.value,
      password.current.value
    );

    setError(validation);
  }

  return (
    <div className=" w-full h-screen  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5bbd5406-7b54-42cd-845d-2d5ec7380bff/web/AE-en-20251103-TRIFECTA-perspective_f8ae52ec-2bcf-4ea6-b184-48c782fa4924_large.jpg)] bg-no-repeat ">
      <Header />

      <Card className="w-4/12 px-4 m-auto mt-20 bg-black border-none opacity-80">
        <CardHeader className="text-white font-semibold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            {isSignUp && (
              <input
                className="h-12  my-auto px-2 text-white rounded-lg  bg-gray-700 border-none"
                type="name"
                autoComplete="none"
                placeholder="Name"
              />
            )}

            <input
              ref={email}
              className="h-12  my-auto px-2 text-white rounded-lg  bg-gray-700 border-none"
              type="email"
              autoComplete="none"
              placeholder="Email"
            />
            <input
              ref={password}
              className="h-12 my-auto px-2 text-white rounded-lg  bg-gray-700 border-none"
              type="password"
              autoComplete="none"
              placeholder="Password"
            />

            {error && (
              <p className="text-red-600 text-lg font-semibold">{error}</p>
            )}
            <Button
              onClick={FormSubmition}
              className="bg-red-500 h-10 cursor-pointer hover:bg-red-600"
            >
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
