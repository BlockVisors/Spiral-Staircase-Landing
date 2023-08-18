import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
      <div className="flex flex-col items-center justify-center">
          <p className="inline-block px-3 py-px mb-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Features & Amenities
          </p>
         </div>
        <div className="container">
          <SectionTitle
            title="Spiral Staircase Amenities"
            paragraph="As exclusive members of The Spiral Staircase, our Club and Community Membership holders will enjoy a range of benefits and access to a wide array of services, which includes:"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
