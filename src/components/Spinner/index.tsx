import './styles.css';

type SpinnerProps = {
  show?: boolean;
};

const Spinner = ({ show = false }: SpinnerProps) => {
  if (!show) return null;

  return (
    <div className="spinner" data-testid="spinner">
      <div className="bounce-1"></div>
      <div className="bounce-2"></div>
      <div className="bounce-3"></div>
    </div>
  );
};

export default Spinner;
