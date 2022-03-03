import React from "react";
import { Text, Box, Color } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

export const Help = () => {
  return (
    <Box flexDirection="column" alignItems="center" width={54} textWrap="wrap">
      <Gradient name="pastel">
        <BigText text="wiki cli" />
      </Gradient>
      <Box>
        <Color blue>
          <Text bold>v0.1.0</Text>
        </Color>
      </Box>
      <Box marginX={1}>
        <Text bold>Usage: wiki [search] [--help] [--lang]</Text>
      </Box>
    </Box>
  );
};
