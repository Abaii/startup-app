import React from "react";
import {
  PronounWrapper,
  InactivePronounText,
  ActivePronounText,
} from "./PostForm.components";

interface PostCategorySelectorProps {
  onClick: (newState: string, stateToChange: string) => void;
  activePronoun: string;
}

export const PronounSelector = (props: PostCategorySelectorProps) => {
  const { onClick, activePronoun } = props;

  return (
    <PronounWrapper>
      {activePronoun == "I'm" ? (
        <ActivePronounText onClick={() => onClick("I'm", "pronoun")}>
          I'm{" "}
        </ActivePronounText>
      ) : (
        <InactivePronounText onClick={() => onClick("I'm", "pronoun")}>
          I'm{" "}
        </InactivePronounText>
      )}
      {activePronoun == "We're" ? (
        <ActivePronounText onClick={() => onClick("We're", "pronoun")}>
          We're{" "}
        </ActivePronounText>
      ) : (
        <InactivePronounText onClick={() => onClick("We're", "pronoun")}>
          We're{" "}
        </InactivePronounText>
      )}
    </PronounWrapper>
  );
};
