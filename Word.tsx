import styled from 'styled-components';

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  .up {
    font-size: 0.75rem;
    padding: 0 1.5px;
  }
  .down {
    font-size: 1.2em;
  }
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1333333333);
    border-radius: 3px;
    cursor: pointer;
  }
`;

interface WordProps {
  essay: {
    word: string;
    pinyin: string;
  };
}

export const Word: React.FC<WordProps> = (props) => {
  const { word, pinyin } = props.essay;
  return (
    <Wrapper>
      <span className="up">{pinyin}</span>
      <span className="down">{word}</span>
    </Wrapper>
  );
};
