import { Box, CardMedia, Stack, Typography } from "@mui/material";
import Logo from "./assets/DoneThink.png";

function App() {
  return (
    <Stack alignItems={"center"} sx={{ backgroundColor: "background.default" }}>
      <CardMedia
        component="img"
        image={Logo}
        sx={{ width: "500px", borderRadius: 60 }}
      />
      <Box>
        <Typography variant="h2" color="text.secondary">
          Our website is coming soon
        </Typography>
      </Box>
    </Stack>
  );
}

export default App;
