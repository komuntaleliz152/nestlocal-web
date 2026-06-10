"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 28, color: "#4B5320" }} />,
    title: "Email",
    detail: "info@nestlocal.ug",
    href: "mailto:info@nestlocal.ug",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28, color: "#4B5320" }} />,
    title: "Phone",
    detail: "+256 700 000 000",
    href: "tel:+256700000000",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 28, color: "#4B5320" }} />,
    title: "Office",
    detail: "Kampala, Uganda",
    href: undefined,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && message) setSubmitted(true);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#4B5320", fontWeight: 600, letterSpacing: 2 }}
          >
            Get in Touch
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
            Contact Us
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
            Have a question about NestLocal? Want to list your property at
            launch? We&apos;d love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {contactInfo.map((item) => (
                <Box
                  key={item.title}
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    p: 3,
                    border: "1px solid #E0E0E0",
                    textDecoration: "none",
                    transition: "transform 0.2s",
                    "&:hover": item.href ? { transform: "translateX(4px)" } : {},
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F5F5F0",
                      borderRadius: "10px",
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#1A1A1A" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666666" }}>
                      {item.detail}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                p: 4,
                border: "1px solid #E0E0E0",
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      label="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Email address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="Tell us about your property or ask a question..."
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: "#4B5320",
                        textTransform: "none",
                        fontWeight: 600,
                        py: 1.5,
                        borderRadius: "8px",
                        alignSelf: "flex-start",
                        "&:hover": { backgroundColor: "#3A4118" },
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              ) : (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#4B5320", mb: 1 }}>
                    Message received!
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666666" }}>
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
