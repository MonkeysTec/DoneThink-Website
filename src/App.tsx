import { AppBar, Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "./assets/DoneThink.svg";
import video from "./assets/videos/233043.mp4";
import Wave from "./components/Wave";

const sections = [
  { label: "About Us", id: "about" },
  { label: "What We Do", id: "services" },
  { label: "Clients", id: "clients" },
  { label: "Contact Us", id: "contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box>
      {/* Header */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 80,
          zIndex: 10,
          background: isScrolled
            ? "linear-gradient(to bottom, #ffffff 90%, transparent)"
            : "transparent",
          transition: "background 0.6s ease-in-out",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 5 }}
        >
          <Stack
            sx={{ width: 200, ml: 2, mt: 2, cursor: "pointer" }}
            onClick={handleLogoClick}
          >
            <CardMedia component="img" image={logo} />
          </Stack>
          <Stack direction="row" spacing={5} alignItems="center" mr={2}>
            {sections.map((section) => (
              <Typography
                key={section.id}
                sx={{
                  cursor: "pointer",
                  color: "#000",
                  borderBottom:
                    activeSection === section.id
                      ? "2px solid #33fca7"
                      : "2px solid transparent",
                  pb: 0.5,
                  transition: "border-color 0.3s",
                }}
                onClick={() => handleScrollTo(section.id)}
              >
                {section.label}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </AppBar>

      {/* Seção 1 - Hero Section */}
      <Box id="home" sx={{ height: "100vh", pt: 10 }}>
        <Grid container spacing={2} mt={10}>
          <Grid
            size={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                zIndex: -1,
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </Grid>
          <Grid
            size={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              textAlign="center"
              pr={10}
              sx={{
                textShadow: "0px 100px 100px rgba(0, 0, 0, 0.99)",
              }}
            >
              You didn't even think – we've already got the solution.
            </Typography>
          </Grid>
        </Grid>
        <Stack width="100%" mt={-60}>
          <Wave />
        </Stack>
      </Box>

      <Box id="about" sx={{ height: "100vh", p: 10 }}>
        <Typography variant="h3">About us</Typography>
        <Typography mt={2}>Quem somos...</Typography>
      </Box>

      <Box id="services" sx={{ height: "100vh", p: 10 }}>
        <Typography variant="h3">What We Do</Typography>
        <Typography mt={2}>Descrição dos serviços...</Typography>
      </Box>

      <Box id="clients" sx={{ height: "100vh", p: 10 }}>
        <Typography variant="h3">Clients</Typography>
        <Typography mt={2}>Nossos clientes incríveis...</Typography>
      </Box>

      <Box id="contact" sx={{ height: "100vh", p: 10 }}>
        <Typography variant="h3">Contact Us</Typography>
        <Typography mt={2}>Entre em contato conosco...</Typography>
      </Box>
    </Box>
  );
}

export default App;
