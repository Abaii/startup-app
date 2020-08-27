import React from "react";
import {
  PronounWrapper,
  InactivePronounText,
  ActivePronounText,
} from "./PostForm.components";

interface PostCategorySelectorProps {
  onClick: React.Dispatch<React.SetStateAction<string>>;
  activePronoun: string;
}

export const PronounSelector = (props: PostCategorySelectorProps) => {
  const { onClick, activePronoun } = props;

  return (
    <PronounWrapper>
      {activePronoun == "I'm" ? (
        <ActivePronounText onClick={() => onClick("I'm")}>
          I'm{" "}
        </ActivePronounText>
      ) : (
        <InactivePronounText onClick={() => onClick("I'm")}>
          I'm{" "}
        </InactivePronounText>
      )}
      {activePronoun == "We're" ? (
        <ActivePronounText onClick={() => onClick("We're")}>
          We're{" "}
        </ActivePronounText>
      ) : (
        <InactivePronounText onClick={() => onClick("We're")}>
          We're{" "}
        </InactivePronounText>
      )}
    </PronounWrapper>
  );
};
