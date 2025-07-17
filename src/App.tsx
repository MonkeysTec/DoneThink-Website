import { AppBar, Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "./assets/DoneThink.svg";
import video from "./assets/videos/233043.mp4";
import Wave from "./components/Wave";
import maxwellPhoto from "./assets/max_photo_01.jpeg";
import alyssonPhoto from "./assets/alyssu.jpeg";
import alyssonSignature from "./assets/alyssu-signature.png";
import maxwellSignature from "./assets/signature.png";

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
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
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
        <Box
          sx={{ maxWidth: 1280, mx: "auto", width: "100%" }}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
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
        </Box>
      </AppBar>

      <Box
        id="home"
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: 1280, mx: "auto", px: 5 }}
          alignItems="center"
          justifyContent="center"
        >
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
                width: "200%",
                objectFit: "contain",
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
              sx={{
                textShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
              }}
            >
              You didn't even think – we've already got the solution.
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100vw",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <Wave />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "300px",
          background: `linear-gradient(
      to bottom,
      #33fca7 0%,
      #5efcb7 25%,
      #9efcd4 50%,
      #ccfce9 75%,
      #ffffff 100%
    )`,
        }}
      />

      <Box
        id="about"
        sx={{
          height: "100vh",
          width: "100%",
          mt: 5,
          pt: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            mx: "auto",
            px: 4,
          }}
        >
          <Typography variant="h3">About us</Typography>

          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            mt={15}
            gap={4}
          >
            <Stack
              flex={1}
              height={600}
              borderRadius={2}
              border="2px solid #9efcd4"
              sx={{
                backgroundColor: "#9efcd4",
                overflow: "visible",
                position: "relative",
                px: 2,
              }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <CardMedia
                component="img"
                image={maxwellPhoto}
                alt="Maxwell Siqueira"
                sx={{
                  height: 160,
                  width: 160,
                  borderRadius: "50%",
                  position: "absolute",
                  top: -80,
                  left: 32,
                  zIndex: 10,
                  border: "2px solid #fff",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />

              <CardMedia
                component="img"
                image={maxwellSignature}
                alt="Maxwell Siqueira"
                sx={{
                  height: 80,
                  width: 300,
                  position: "absolute",
                  bottom: 90,
                  left: 150,
                  zIndex: 10,
                }}
              />

              <Typography textAlign="center" mt={13}>
                A 34-year-old technology enthusiast and seasoned software
                developer with over 14 years of experience in building digital
                solutions across a wide range of platforms. Founder of Monkeys
                Tecnologia in Brazil and currently leading doneThink, a
                forward-thinking tech company based in Estonia. With deep
                expertise in full-stack development and product design, the CEO
                has also served as a tech lead and engineering manager,
                successfully guiding cross-functional teams through complex
                challenges. His background includes hands-on work with embedded
                systems, mobile applications, and web platforms, always
                combining technical excellence with a product-oriented mindset.
                Driven by innovation and simplicity, he is committed to
                transforming complex problems into elegant, scalable, and
                impactful solutions.
              </Typography>

              <Typography
                fontWeight={600}
                fontSize={18}
                alignSelf="center"
                mt={15}
                color="#000"
              >
                Maxwell Siqueira
              </Typography>
              <Typography fontSize={14} alignSelf="center" ml={2} color="#000">
                Co-funder
              </Typography>
            </Stack>

            <Stack
              flex={1}
              height={600}
              borderRadius={2}
              border="2px solid #9efcd4"
              sx={{
                backgroundColor: "#9efcd4",
                overflow: "visible",
                position: "relative",
                px: 2,
              }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <CardMedia
                component="img"
                image={alyssonPhoto}
                alt="Alysson Sene"
                sx={{
                  height: 160,
                  width: 160,
                  borderRadius: "50%",
                  position: "absolute",
                  top: -80,
                  left: 32,
                  zIndex: 10,
                  border: "2px solid #fff",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />

              <CardMedia
                component="img"
                image={alyssonSignature}
                alt="Alysson Sene"
                sx={{
                  height: 180,
                  width: 300,
                  position: "absolute",
                  bottom: 30,
                  left: 150,
                  zIndex: 10,
                }}
              />

              <Typography textAlign="center" mt={13}>
                A 34-year-old technology enthusiast and seasoned software
                developer with over 14 years of experience in building digital
                solutions across a wide range of platforms. Founder of Monkeys
                Tecnologia in Brazil and currently leading doneThink, a
                forward-thinking tech company based in Estonia. With deep
                expertise in full-stack development and product design, the CEO
                has also served as a tech lead and engineering manager,
                successfully guiding cross-functional teams through complex
                challenges. His background includes hands-on work with embedded
                systems, mobile applications, and web platforms, always
                combining technical excellence with a product-oriented mindset.
                Driven by innovation and simplicity, he is committed to
                transforming complex problems into elegant, scalable, and
                impactful solutions.
              </Typography>

              <Typography
                fontWeight={600}
                fontSize={18}
                alignSelf="center"
                mt={15}
                color="#000"
              >
                Alysson Sene
              </Typography>
              <Typography fontSize={14} alignSelf="center" ml={2} color="#000">
                Co-funder
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box id="services" sx={{ height: "100vh", width: "100%", mt: 5, pt: 15 }}>
        <Typography variant="h3">What We Do</Typography>
        <Typography mt={2}>Descrição dos serviços...</Typography>
      </Box>

      <Box id="clients" sx={{ height: "100vh", width: "100%", mt: 5, pt: 15 }}>
        <Typography variant="h3">Clients</Typography>
        <Typography mt={2}>Nossos clientes incríveis...</Typography>
      </Box>

      <Box id="contact" sx={{ height: "100vh", width: "100%", mt: 5, pt: 15 }}>
        <Typography variant="h3">Contact Us</Typography>
        <Typography mt={2}>Entre em contato conosco...</Typography>
      </Box>
    </Box>
  );
}

export default App;
