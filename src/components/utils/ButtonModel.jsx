function ButtonModel(props) {
  const { children, type,classes } = props;
  return (
    <button type={type} className={`flex items-center justify-center h-12 rounded-sm w-full ${classes}`}>
      {children}
    </button>
  );
}
export default ButtonModel;
