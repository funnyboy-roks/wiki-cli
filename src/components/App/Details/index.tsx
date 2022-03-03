import React, { useContext } from "react";
import { Box, Text, useInput } from "ink";
import InkBox from "ink-box";
import { observer } from "mobx-react-lite";
import open from "open";

import { StoreContext } from "../../../store";

export const Details = observer(() => {
  const store = useContext(StoreContext);
  useInput((input, key) => {
    if (!key) return;

    if (key.return) {
      open(store.selectedURL);
    } else if (key.escape || input === "q") {
      store.toggleDetails();
    }
  });

  return (
    <Box flexDirection="column">
      <InkBox borderStyle="double">
        <Text bold>{store.article.title}</Text>
      </InkBox>
      <Box textWrap="wrap">{store.article.summary}</Box>
    </Box>
  );
});
