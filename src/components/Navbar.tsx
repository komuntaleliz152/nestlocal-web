"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const navLinks = ["How it Works", "Features", "Testimonials", "Contact"];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <HomeIcon sx={{ color: "#4B5320", fontSize: 28 }} />
            <Typography
              variant="h6"
              sx={{
                color: "#4B5320",
                fontWeight: 700,
                fontSize: "1.4rem",
                letterSpacing: "-0.5px",
              }}
            >
              NestLocal
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                sx={{
                  color: "#1A1A1A",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  "&:hover": { color: "#4B5320" },
                }}
              >
                {link}
              </Button>
            ))}
          </Box>

          {/* CTA Button */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              href="#waitlist"
              sx={{
                backgroundColor: "#4B5320",
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#3A4118" },
              }}
            >
              Join Waitlist
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#4B5320" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, pt: 4 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link}
                component="a"
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={link}
                  sx={{ color: "#1A1A1A", fontWeight: 500 }}
                />
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                href="#waitlist"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  backgroundColor: "#4B5320",
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#3A4118" },
                }}
              >
                Join Waitlist
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}