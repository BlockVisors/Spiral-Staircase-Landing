import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center">
          <p className="inline-block px-3 py-px mb-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            How We Do It
          </p>
         </div>
      <div className="container">
        
        
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
           
              <Image
                src="/images/hab.jpeg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Vendor Partnership                
                  </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Shared Risk - Less Control: The vendor model gives The Spiral Staircase less control over the quality of the services provided. The club relies on the vendors to provide high-quality services.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Keen Eye on Health/Saftey
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Safety: The Spiral Staircase can provide a secure environment that prioritizes the well-being and safety of our staff, members, vendors, and guests to address  fire hazards, slip and falls, health and sanitation, allergens, security risks, and emergency preparedness.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 Deep Vendor Network
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The Spiral Staircase has cultivated a strong network of vendors who offer a diverse range of services, allowing for continuous and rotating vendor offerings. Several of these vendors have previous experience working at Momporium Markets, ensuring a high standard of service and expertise, enabling The Spiral Staircase to assess target market responsiveness to various service offerings.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
