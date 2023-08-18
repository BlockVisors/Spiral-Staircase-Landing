import VendorSectionOne from "@/components/Vendors/VendorSectionOne";
import VendorSectionTwo from "@/components/Vendors/VendorSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const VendorPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Vendor"
        description="We work with the Best. 
."
      />
      <VendorSectionOne />
      <VendorSectionTwo />
    </>
  );
};

export default VendorPage;
