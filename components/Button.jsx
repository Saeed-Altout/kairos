const Button = ({ label, styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-3 whitespace-nowrap font-medium tracking-wider w-fit rounded-sm transit hover:bg-opacity-80 ${styles}`}
    >
      {label}
    </button>
  );
};

export default Button;
