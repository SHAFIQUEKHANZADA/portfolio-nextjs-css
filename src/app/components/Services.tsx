import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlGlobe } from "react-icons/sl";
import { BiNetworkChart } from "react-icons/bi";
import { LuBrainCircuit, LuServerOff } from "react-icons/lu";
import { IconCloudComputing } from "@tabler/icons-react";
import "../../../styles/services.css"


const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="mainContainer">

      {/* left */}
      <div data-aos="flip-left" className="mainLeft">
        {" "}
        {/* Apply flip-left to the parent container */}
        <h1 className="mainLeftHOne">
          Services
        </h1>
        <h1 className="mainLeftHTwo">
          Unlocking your potential with my expert services
        </h1>
        <Image
          src="/uie.png"
          alt="Description of the image"
          width={1200}
          height={800}
          quality={100}
          sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
          priority
        />
      </div>

      {/* right */}
      <div data-aos="flip-left">
        <div className="relative lg:overflow-hidden h-full">
          <h1 className="rightH1">
            Scroll up here to explore my more services and see how I can help
            elevate your business!
          </h1>
          <div className="absolute sha">
            {" "}
            <div className="mainFlips">
              {/* 1 */}
              <div className="xcx flips">
                <div>
                  <SlGlobe className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 dark:text-green-300/50 text-green-300" />
                </div>
                <div className="lg:mr-6 lg:ml-4 ml-3">
                  <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#2cbca5]">
                    Application Development
                  </h1>
                  <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2  text-gray-600 dark:text-[#B7B4CBD4]">
                    I develop scalable, high-performance web applications using Next.js and TypeScript. My expertise ensures responsive design, optimized loading times, and seamless user experiences across all devices.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="xcx flips">
                <div>
                  <BiNetworkChart className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#50add7]/80" />
                </div>
                <div className="lg:mr-6 lg:ml-4 ml-3">
                  <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#50add7]">
                    API Development
                  </h1>
                  <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                    I specialize in creating robust and secure APIs using Python FastAPI. My API solutions are designed for high efficiency, scalability, and rapid integration with web and mobile applications
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="xcx flips">
                <div>
                  <LuServerOff className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#c742f7]/90" />
                </div>
                <div className="lg:mr-6 lg:ml-4 ml-3">
                  <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#c742f7]">
                    Serverless Architecture
                  </h1>
                  <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                    I implement serverless architectures on platforms like AWS Lambda and Google Cloud Functions. This enables you to reduce infrastructure costs, improve scalability, and ensure faster deployments
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="xcx flips">
                <div>
                  <IconCloudComputing className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#53b8a2]" />
                </div>
                <div className="lg:mr-6 lg:ml-4 ml-3">
                  <h1 className="lg:scroll-m-20 lg:text-2xl text-sm font-semibold tracking-tight first:mt-0 text-[#53b8a2]">
                    Containerization & Microservices Deployment
                  </h1>
                  <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                    I design containerized microservices architectures using Docker and Kubernetes. This allows for better scalability, fault tolerance, and ease of deployment across multiple environments
                  </p>
                </div>
              </div>
              {/* 5 */}
              <div className="xcx flips">
                <div>
                  <LuBrainCircuit className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#af6c6c]/80" />
                </div>
                <div className="lg:mr-6 lg:ml-4 ml-3">
                  <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#af6c6c]/90">
                    Applied GenAI Engineering
                  </h1>
                  <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                    I leverage the power of Generative AI to create intelligent, data-driven applications. From automating workflows to enhancing user experiences, I apply cutting-edge AI solutions tailored to your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;