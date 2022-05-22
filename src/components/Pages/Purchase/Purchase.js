import React from "react";

const Purchase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="product-card-details">
            <div class="card card-side w-full bg-base-100 rounded-none border">
              <figure>
                <img
                  src="https://api.lorem.space/image/movie?w=200&h=280"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">name</h2>
                <p>description</p>
                <p>Minimun Order: 10</p>
                <p className="text-lg">Unit Price: $30</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">34 available</div>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-info">
            <div>
              <div class="border ">
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      class="input input-bordered"
                    />
                    <label class="label">
                      <a href="#" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
