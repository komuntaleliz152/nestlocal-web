"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const stats = [
  { number: "500+", label: "Verified Properties" },
  { number: "10+", label: "Districts Covered" },
  { number: "0", label: "Agent Fees" },
  { number: "24hrs", label: "Average Response Time" },
];

const badges = [
  { icon: <VerifiedIcon sx={{ color: "#4B5320", fontSize: 20 }} />, label: "Verified Properties" },
  { icon: <HandshakeIcon sx={{ color: "#4B5320", fontSize: 20 }} />, label: "No Middlemen" },
  { icon: <AttachMoneyIcon sx={{ color: "#4B5320", fontSize: 20 }} />, label: "No Hidden Fees" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "#F5F5F0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 10,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ alignItems: "center" }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Chip
              label="🇺🇬 Built for Uganda"
              sx={{
                backgroundColor: "#4B5320",
                color: "#FFFFFF",
                fontWeight: 600,
                mb: 3,
                fontSize: "0.85rem",
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.2rem" },
                fontWeight: 800,
                color: "#1A1A1A",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Find Your Perfect{" "}
              <Box component="span" sx={{ color: "#4B5320" }}>
                Home in Uganda
              </Box>{" "}
              Without Middlemen
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "#666666",
                mb: 4,
                lineHeight: 1.8,
                maxWidth: "520px",
              }}
            >
              NestLocal connects you directly with verified property owners
              across Kampala and Uganda. No agents, no hidden fees, no stress.
              Just your next home.
            </Typography>

            {/* Waitlist Form */}
            <form id="waitlist" onSubmit={handleSubmit}>
              {!submitted ? (
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#E0E0E0" },
                        "&:hover fieldset": { borderColor: "#4B5320" },
                        "&.Mui-focused fieldset": { borderColor: "#4B5320" },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<SearchIcon />}
                    sx={{
                      backgroundColor: "#4B5320",
                      color: "#FFFFFF",
                      textTransform: "none",
                      fontWeight: 600,
                      px: 4,
                      borderRadius: "8px",
                      whiteSpace: "nowrap",
                      "&:hover": { backgroundColor: "#3A4118" },
                    }}
                  >
                    Join Waitlist
                  </Button>
                </Stack>
              ) : (
                <Box
                  sx={{
                    backgroundColor: "#4B5320",
                    color: "#FFFFFF",
                    p: 3,
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    🎉 You&apos;re on the list!
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                    We&apos;ll notify you when NestLocal launches in your area.
                  </Typography>
                </Box>
              )}
            </form>

            {/* Trust Badges */}
            <Stack direction="row" sx={{ mt: 4, flexWrap: "wrap", gap: 2 }}>
              {badges.map((badge) => (
                <Stack
                  key={badge.label}
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  {badge.icon}
                  <Typography variant="body2" sx={{ color: "#666666" }}>
                    {badge.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Right — Stats Card */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                p: 4,
                width: "100%",
                maxWidth: "420px",
                border: "1px solid #E0E0E0",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#4B5320", mb: 3 }}
              >
                Why NestLocal?
              </Typography>
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1.5,
                    borderBottom: "1px solid #F0F0F0",
                    "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#666666" }}>
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#4B5320" }}
                  >
                    {stat.number}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}