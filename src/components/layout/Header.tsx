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
  useMediaQuery,
  Badge
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
 
  '(التصنيفات/القنوات)',
  'الموظفين',
  'التقارير',
  { label: 'التسجيلات', path: '/report' },
  { label: 'الصفحة الرئيسية', path: '/' },
];

type HeaderProps = {
  setMode: (mode: 'light' | 'dark') => void;
  mode: 'light' | 'dark';
};

const Header: React.FC<HeaderProps> = ({ setMode, mode }) => {
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
    <Paper elevation={1} sx={{ px: { xs: 2, sm: 3 }, py: { xs: 3, sm: 3 }, borderRadius: 0, mb: 3 }}>
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
          minWidth: { xs: 250, sm: 350 },
          gap: 1
        }}>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
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
              width: { xs: 250, sm: 350 },
              height: 48,
              border: '1px solid #eee'
            }}
          >
            <SearchIcon sx={{ color: '#a0a0b0', mr: 1 }} />
            <InputBase 
              sx={{ 
                flex: 1, 
                fontSize: { xs: 15, sm: 17 }
              }} 
              placeholder="Search here..." 
              inputProps={{ 'aria-label': 'search' }} 
            />
          </Paper>
          <IconButton sx={{
            ml: 1,
            bgcolor: '#222',
            color: '#fff',
            width: 44,
            height: 44,
            borderRadius: '50%',
            '&:hover': { bgcolor: '#444' },
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
          }}>
            <DarkModeIcon />
          </IconButton>
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
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse', gap: 1 }}>
                  {selected === 'العربية' ? (
                    <img 
                      src="https://flagcdn.com/w20/sa.png" 
                      width="20" 
                      alt="KSA flag" 
                      style={{ borderRadius: '50%', width: '20px', height: '20px', objectFit: 'cover' }}
                    />
                  ) : (
                    <img 
                      src="https://flagcdn.com/w20/us.png" 
                      width="20" 
                      alt="USA flag"
                      style={{ borderRadius: '50%', width: '20px', height: '20px', objectFit: 'cover' }}
                    />
                  )}
                  <span>{selected}</span>
                </Box>
              )}
            >
              <MenuItem value="العربية" sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'row-reverse' }}>
                العربية
                <img 
                  src="https://flagcdn.com/w20/sa.png" 
                  width="20" 
                  alt="KSA flag" 
                  style={{ borderRadius: '50%', width: '20px', height: '20px', objectFit: 'cover' }}
                />
              </MenuItem>
              <MenuItem value="English" sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'row-reverse' }}>
                English
                <img 
                  src="https://flagcdn.com/w20/us.png" 
                  width="20" 
                  alt="USA flag"
                  style={{ borderRadius: '50%', width: '20px', height: '20px', objectFit: 'cover' }}
                />
              </MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexDirection: 'row-reverse',
            gap: { xs: 0.5, sm: 1 }
          }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#44b700',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: '2px solid #fff'
                }
              }}
            >
              <Avatar 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                sx={{ 
                  width: { xs: 32, sm: 38 }, 
                  height: { xs: 32, sm: 38 } 
                }} 
              />
            </Badge>
          
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
                 دانا أبو شاويش
                </Typography>
                <Typography sx={{ 
                  fontSize: { xs: 11, sm: 12 }, 
                  color: '#888' 
                }}>
           مصمم الجرافيك
                </Typography>
              </Box>
            )}
          
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