import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavigationBar />
      <section className="p-20 flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-6">
          <h1 className="pb-2 text-3xl text-red-600 border-b border-gray-400 max-xl:text-center">WE MAKE OUR CHICKEN THE HARD WAY</h1>
          <img src="https://kfckosova.com/wp-content/uploads/2020/05/14-1024x636.jpg" alt="about-img" />
          <p className="text-gray-500"> Hand breaded, freshly prepared and Finger Lickin` Good®! Our chicken isn`t made the fast way or the easy way.</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl text-red-600 border-b border-gray-400 pb-2">IT`S MADE THE HARD WAY.</h1>
          <p className="text-gray-500"> Each fresh batch of the world`s best chicken starts with our cooks inspecting each individual piece.</p>
          <img src="https://kfckosova.com/wp-content/uploads/2020/05/herbs-1024x668.jpg" alt="about-img" />
          <p className="text-gray-500 "> Then, our fresh chicken is carefully rolled 7 times in our secret blend of 11 herbs & spices before being rocked 7 times and then pressure cooked at 171°C temperature to absorb all the great taste we`re known for around the world.</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <img src="https://kfckosova.com/wp-content/uploads/2020/05/cook-1024x694.jpg" alt="about-img" />
          <p className="text-gray-500"> We could find an easier way to make chicken, but then we couldn't put our name on it.</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
