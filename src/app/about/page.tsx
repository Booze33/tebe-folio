"use client";

import { usePathname, useSearchParams } from "next/navigation";

const About = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  console.log({ pathname, searchParams: searchParams.toString() });
  
  return (
    <div>Test</div>
  );
};

export default About;