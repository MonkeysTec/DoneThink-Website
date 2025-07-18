import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: `linear-gradient(
          to top,
          #33fca7 0%,
          #5efcb7 25%,
          #9efcd4 50%,
          #ccfce9 75%,
          #ffffff 100%
        )`,
        py: 4,
      }}
    >
      <Stack direction="row" maxWidth={1280} mx={"auto"} height={200}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          width="100%"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 doneThink. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://linkedin.com/company/donethink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://instagram.com/doneThink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
