import './styles.css';

type HighlitedTextProps = {
  text: string;
  highlight: string;
};

const HighlitedText = ({ text, highlight }: HighlitedTextProps) => {
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.filter(String).map((item, i) => {
        return (
          <span className="highlited-text" key={i}>
            {regex.test(item) ? <mark>{item}</mark> : <>{item}</>}
          </span>
        );
      })}
    </>
  );
};

export default HighlitedText;
