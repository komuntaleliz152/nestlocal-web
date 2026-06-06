import { Box, Container, Typography, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";

const steps = [
  {
    icon: <SearchIcon sx={{ fontSize: 40, color: "#4B5320" }} />,
    step: "01",
    title: "Search Properties",
    description:
      "Browse hundreds of verified rental and sale properties across Kampala and Uganda. Filter by location, price, and type.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 40, color: "#4B5320" }} />,
    step: "02",
    title: "Verify & Connect",
    description:
      "Every property is verified by our team. Connect directly with the property owner — no middlemen, no agents involved.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40, color: "#4B5320" }} />,
    step: "03",
    title: "Move In",
    description:
      "Agree on terms directly with the owner, sign your agreement, and move into your new home stress-free.",
  },
];

export default function HowItWorks() {
  return (
    <Box
      id="how-it-works"
      sx={{ backgroundColor: "#FFFFFF", py: 10 }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#4B5320", fontWeight: 600, letterSpacing: 2 }}
          >
            Simple Process
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 800,
              color: "#1A1A1A",
              mt: 1,
            }}
          >
            How NestLocal Works
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666666",
              mt: 2,
              maxWidth: "500px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Finding your perfect home in Uganda has never been this simple.
            Three steps and you're in.
          </Typography>
        </Box>

        {/* Steps */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ justifyContent: "center" }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.step}
              sx={{
                flex: 1,
                backgroundColor: "#F5F5F0",
                borderRadius: "16px",
                p: 4,
                position: "relative",
                border: "1px solid #E0E0E0",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              {/* Step Number */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 20,
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#E0E0E0",
                  lineHeight: 1,
                }}
              >
                {step.step}
              </Typography>

              {/* Icon */}
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  border: "1px solid #E0E0E0",
                }}
              >
                {step.icon}
              </Box>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "#1A1A1A", mb: 1.5 }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666666", lineHeight: 1.8 }}
              >
                {step.description}
              </Typography>

              {/* Connector Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    right: -20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#4B5320",
                    fontSize: "1.5rem",
                    zIndex: 1,
                  }}
                >
                  →
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}