import React from "react";

const Newsletter = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="lg:w-3/4 p-4 sm:p-12 rounded-xl bg-neutral text-white mx-auto">
          <div className="">
            <div className="text-center">
              <h2 className="text-3xl mb-1">Join Our Newsletter</h2>
              <p className="text-xl">
                Sign up to get update or offer information from us.
              </p>
            </div>
            <div className="mt-10">
              <form action="">
                <div className="text-center bg-white lg:w-[470px] p-1 sm:p-2 mx-auto rounded">
                  <input
                    type="text"
                    placeholder="Type Email"
                    className="input sm:w-full max-w-xs text-neutral mr-4"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="btn btn-primary px-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
