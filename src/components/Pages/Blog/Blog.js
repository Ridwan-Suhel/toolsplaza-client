import React from "react";

const Blog = () => {
  return (
    <section className="py-10">
      <div className="container px-4 lg:px-16 mx-auto">
        <div className="mb-16 text-neutral text-center">
          <h2 className="text-4xl">Q &amp; A</h2>
          <p className="text-lg uppercase mt-3">
            Answering Assignment Questions
          </p>
        </div>

        <div className="single-box border p-5 md:w-3/4 mx-auto rounded-lg shadow mb-3">
          <li className="text-xl mb-3">
            How will you improve the performance of a React Application?
          </li>
          <p className="text-lg">
            There are many ways to improve performance of react application. To
            optimize our react web application we must have to keep our
            component localy. We can use images that are compressed. We can also
            use lazy loading for images and also have to use loader/spinner for
            fetching data and more.
          </p>
        </div>
        <div className="single-box border p-5 md:w-3/4 mx-auto rounded-lg shadow mb-3">
          <li className="text-xl mb-3">
            What are the different ways to manage a state in a React
            application?
          </li>
          <p className="text-lg">
            There are four main types of state that we can manage in our react
            application. They are Global state, local state, url state, server
            state. We can use local state for show or hide our modal component.
            using global state we can manage our data in multiple components.
            Server state data that comes from server and we can integrated with
            our UI. Url state data that exists on our urls, including the
            pathname and query parameters.
          </p>
        </div>
        <div className="single-box border p-5 md:w-3/4 mx-auto rounded-lg shadow mb-3">
          <li className="text-xl mb-3">
            How does prototypical inheritance work?
          </li>
          <p className="text-lg">
            JavaScript is a prototype-based, object oriented programming
            language. After the ES6 updates, JavaScript allowed for objects and
            methods can be shared, extended, and copied. prototypical
            inheritance refers to the ability to access object properties from
            another object. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function.
          </p>
        </div>
        <div className="single-box border p-5 md:w-3/4 mx-auto rounded-lg shadow mb-3">
          <li className="text-xl mb-3">
            What is a unit test? Why should write unit tests?
          </li>
          <p className="text-lg">
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended.Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages. we should write unit test
            for early detection of a problem that reduces the compound errors.
            Unit test make our debugging process easer.
          </p>
        </div>
        <div className="single-box border p-5 md:w-3/4 mx-auto rounded-lg shadow mb-3">
          <li className="text-xl mb-3">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </li>
          <div>
            <p className="text-lg">
              If we want to seacrh a product by name we can find it diferent way
              let's say we want to find it by for loop &amp; below code is our
              array list
            </p>
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap">
              <code>
                {`const products = [
                { name: "I phone", price: 100 },
                {name: "Samsung", price: 100 },
                { name: "Lg", price: 100 },
                { name: "Walton", price: 100 }, ];`}
              </code>
            </pre>
            we can use a function to find it let say searchProducts and we can
            pass two parameters called products and SeacrhTxt and now we can use
            for loop for looping our every product
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap">
              <code>
                {`const searchProducts = (products, SeacrhTxt) => {
                      for (const product of products){
                      console.log(product)
                      }
                    }`}
              </code>
            </pre>
            Now if we call our function
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap">
              <code>{`searchProducts(products)`}</code>
            </pre>
            Output will be all the list of our products array
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap">
              <code>
                {`{name: 'I phone', price: 100}
                {name: 'Xiomi', price: 100}
                {name: 'Samsung', price: 100}
                {name: 'Lenevo', price: 100}`}
              </code>
            </pre>
            And now if we just add if statement inside the for loop and say if
            product.name.includes our second parameter value give us the result.
            that means it will go through all of our single product list of
            array and it will search what we pass in our function second
            parameter.
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap break-words">
              <code>{`if(product.name.includes(SeacrhTxt)){
                        console.log(product.name);
                      }`}</code>
            </pre>
            Now we just have to call our function with our desire name
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap">
              <code>{`searchProducts(products, "Samsung");`}</code>
            </pre>
            Then Output will be
            <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap">
              <code>{`Samsung`}</code>
            </pre>
            here is the full snippet:
            <div>
              <pre className="mb-3 mt-3 text-[#00DB00] bg-[#333333] px-4 py-5 whitespace-pre-wrap break-words">
                <code>
                  {`const products = [
    {name :"I phone", price: 100},
    {name :"Xiomi", price: 100},
    {name :"Samsung", price: 100},
    {name :"Lenevo", price: 100},
    ];

const searchProducts = (products, SeacrhTxt) => {
for (const product of products){
if(product.name.includes(SeacrhTxt)){
console.log(product.name);
}
}
}
searchProducts(products, "Samsung");`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
