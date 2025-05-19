const Wrapper = (props) => {
  return (
    <div className={`${props?.className} max-w-[90rem] mx-auto px-4`}>
      {props.children}
    </div>
  );
};
export default Wrapper;
