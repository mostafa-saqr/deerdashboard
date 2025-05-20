import React, { useState } from 'react';
import { 
  Box, 
  InputBase, 
  Paper, 
  IconButton, 
  Avatar, 
  Typography, 
  MenuItem, 
  Select, 
  FormControl,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'التسجيلات', path: '/report' },
  { label: 'الصفحة الرئيسية', path: '/' },
  '(التصنيفات/القنوات)',
  'الموظفين',
  'التقارير',
];

const Header: React.FC = () => {
  const [lang, setLang] = React.useState('العربية');
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navLinks.map((link, idx) => (
          typeof link === 'string' ? (
            <ListItem key={link} sx={{ color: '#444', fontWeight: 400, fontSize: 17 }}>
              <ListItemText primary={link} />
            </ListItem>
          ) : (
            <ListItem 
              key={link.path} 
              component={Link} 
              to={link.path}
              onClick={handleDrawerToggle}
              sx={{
                color: location.pathname === link.path ? '#222' : '#444',
                fontWeight: location.pathname === link.path ? 700 : 400,
                '&:hover': { color: '#1976d2' },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  return (
    <Paper elevation={1} sx={{ px: { xs: 2, sm: 3 }, py: { xs: 1, sm: 1.5 }, borderRadius: 0, mb: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: { xs: 'row-reverse', sm: 'row' }
      }}>
        {/* Left Section - Search & Menu */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          flexDirection: { xs: 'row-reverse', sm: 'row' }
        }}>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            minWidth: { xs: 150, sm: 220 }
          }}>
            <Paper
              component="form"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                borderRadius: 3, 
                boxShadow: 0, 
                bgcolor: '#fafbfc', 
                pl: 1, 
                pr: 0.5, 
                width: { xs: 150, sm: 180 }
              }}
            >
              <SearchIcon sx={{ color: '#a0a0b0', mr: 1 }} />
              <InputBase 
                sx={{ 
                  flex: 1, 
                  fontSize: { xs: 13, sm: 15 }
                }} 
                placeholder="Search here..." 
                inputProps={{ 'aria-label': 'search' }} 
              />
              <IconButton type="submit" sx={{ p: 0.5, bgcolor: '#222', color: '#fff', ml: 1, borderRadius: 2 }}>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Paper>
          </Box>
        </Box>

        {/* Center Nav Links - Desktop Only */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map((link, idx) => (
              typeof link === 'string' ? (
                <Box key={link} sx={{ color: '#444', fontWeight: 400, fontSize: 17, px: 1.5, pb: 0.5 }}>{link}</Box>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      color: location.pathname === link.path ? '#222' : '#444',
                      fontWeight: location.pathname === link.path ? 700 : 400,
                      fontSize: 17,
                      cursor: 'pointer',
                      px: 1.5,
                      pb: 0.5,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#1976d2' },
                    }}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, bgcolor: '#222', borderRadius: 2 }} />
                    )}
                  </Box>
                </Link>
              )
            ))}
          </Box>
        )}

        {/* Right Section - Language & User */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          flexDirection: { xs: 'row-reverse', sm: 'row' }
        }}>
          <FormControl size="small" sx={{ 
            minWidth: { xs: 80, sm: 100 }, 
            bgcolor: '#fafbfc', 
            borderRadius: 2 
          }}>
            <Select
              value={lang}
              onChange={e => setLang(e.target.value)}
              IconComponent={ExpandMoreIcon}
              sx={{ 
                fontWeight: 600, 
                fontSize: { xs: 13, sm: 15 }, 
                pl: 1 
              }}
              displayEmpty
            >
              <MenuItem value="العربية">العربية</MenuItem>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 0.5, sm: 1 }
          }}>
            <Avatar 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              sx={{ 
                width: { xs: 32, sm: 38 }, 
                height: { xs: 32, sm: 38 } 
              }} 
            />
            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-end' 
              }}>
                <Typography sx={{ 
                  fontWeight: 700, 
                  fontSize: { xs: 13, sm: 15 } 
                }}>
                  دانيال شاووش
                </Typography>
                <Typography sx={{ 
                  fontSize: { xs: 11, sm: 12 }, 
                  color: '#888' 
                }}>
                  مصمم الواجهة
                </Typography>
              </Box>
            )}
            <FiberManualRecordIcon sx={{ 
              color: '#4caf50', 
              fontSize: { xs: 14, sm: 16 }, 
              ml: 0.5 
            }} />
          </Box>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250 
          },
        }}
      >
        {drawer}
      </Drawer>
    </Paper>
  );
};

export default Header; 