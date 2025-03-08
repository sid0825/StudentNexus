import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import withRoot from "../../withRoot";
import { useNavigate } from "react-router-dom";
import { ILoginPageState } from "../../../types/login";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";

const pages = ["Find Houses", "Find Roommates"];
const authSettings = ["Profile", "My Preferences", "Logout"];
const settings = ["Register", "Login"];
// const

function NavigationBar() {
  const navigate = useNavigate();
  const loginState: ILoginPageState = useAppSelector(
    (state: RootState) => state.auth
  );
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (page: string) => {
    handleCloseNavMenu();
    let endpoint =
      "/" + (page === "Find Houses" ? "find-houses" : page.replace(" ", "-"));
    navigate(endpoint);
  };

  useEffect(() => {
    if (!loginState.loading && loginState.data && !loginState.error) {
      // console.log(loginState.data);
      setIsAuth(true);
    } else if (!loginState.loading && !loginState.data && loginState.error) {
      console.log(loginState.error);
    }
  }, [loginState]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigate(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => handleNavigate("")}
            sx={{
              mr: { md: 14 },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Student Nexus
          </Typography>
          {isAuth ? (
            // Display this if user is authenticated
            <Box sx={{ flexGrow: 0, ml: { md: 12 } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Profile Picture"
                    src={localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string).photo : "/assets/avatars/profile.png"}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {authSettings.map((setting: string) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleNavigate(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            // Display this if user is not authenticated
            <React.Fragment>
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                {settings.map((setting) => (
                  <Button
                    key={setting}
                    onClick={() => handleNavigate(setting)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {setting}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <Tooltip title="Open settings">
                  {/* <IconButton onClick={} sx={{ p: 0 }}> */}
                  <IconButton
                    size="large"
                    aria-label="login and register options"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenUserMenu}
                    color="inherit"
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting: string) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleNavigate(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default withRoot(NavigationBar);
