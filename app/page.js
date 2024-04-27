import Blog from "./sections/Blog";
import Hero from "./sections/Hero";
import WhatIDo from "./sections/WhatIDo";

const page = () => {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <Blog />
    </main>
  );
};

export default page;
