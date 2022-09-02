import { useState } from 'react';
import { Box, Typography, FormControlLabel, Switch, Tooltip } from '@mui/material';
import { Info } from '@mui/icons-material';
import { NonMemoized } from './NonMemoized';
import { Memoized } from './Memoized';

export function Main() {
  const [memoized, setMemoized] = useState<boolean>(false);

  return (
    <>
      <Box p={4}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
          <Typography variant="h3" gutterBottom>My Brokerages</Typography>
          <FormControlLabel
            control={<Switch value={memoized} onChange={() => setMemoized(!memoized)} />}
            label={memoized ? "Memoized" : "Not Memoized"}
          />
        </Box>
        <Typography>
          1. Install the React Developer Tools and enable "Highlight updates on re-renders". See: <a target="_blank" href="https://medium.com/dev-proto/highlight-react-components-updates-1b2832f2ce48">this document</a>.
        </Typography>
        <Typography>
          2. Test editing the catch phrase with memoization disabled, notice how slow it is!
        </Typography>
        <Typography>
          3. Test editing the catch phrase with memoization enabled and notice how it does not update the brokerage card.
        </Typography>
      </Box>
      {memoized ? <Memoized /> : <NonMemoized />}
    </>
  );
}
