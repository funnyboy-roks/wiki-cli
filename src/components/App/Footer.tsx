import React, { useContext } from "react";
import { Text, Box, Color } from "ink";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../../store";

export const Footer = observer(() => {
  const store = useContext(StoreContext);
  let hint;
  if (store.isDetailsOpen) {
    hint = `Press ENTER to open article in browser, ESC or Q to return to search`;
  } else if (store.results.length > 0) {
    hint = `Press ENTER to read article summary`;
  } else {
    hint = ` `;
  }

  return (
    <Box>
      <Color gray>
        <Text bold>{hint}</Text>
      </Color>
    </Box>
  );
});
