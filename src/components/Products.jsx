import Wrapper from "../utils/Wrapper";
const Products = (props) => {
  return (
    <Wrapper className="mt-[12vw] lg:-mt-[30vw]">
      <h1 className="text-center heading">Products</h1>
      <p className=" text-center w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto  mt-4 paragraph">
        Your One-Stop Destination for Premium Imaging Technology – Featuring DR
        Panels, CR Systems, DICOM-Compatible Printers, and High-Performance
        X-ray Machines to Support Diagnostic Centers, Hospitals, and Imaging
        Labs
      </p>
      <div className="grid grid-cols-2 grid-rows-2"></div>
    </Wrapper>
  );
};
export default Products;
