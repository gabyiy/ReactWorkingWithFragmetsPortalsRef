const Wrapper = (props) => {
  //folosim clasa wraper sa returnam tot ce avem in interior ,este ceva in genu la clasa card doar ca aceqasta o folosim  inlocu la un div
  return props.children;
};

export default Wrapper;
