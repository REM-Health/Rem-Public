const Spinner = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray-300 border-t-rem-green-400" />
    </div>
  );
};

export default Spinner;
