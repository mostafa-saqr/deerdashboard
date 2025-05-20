import React, { useState, useRef } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Pagination, Button, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PaginationItem from '@mui/material/PaginationItem';

// Local audio sample from public directory
const audioSample = '/sample-voice.mp3';

const rows = [
  { date: '15/10/2024', duration: '00.55.88', prisoner: 20, content: 'طبيعي', audio: audioSample },
  { date: '16/05/2024', duration: '00.50.58', prisoner: 55, content: 'غير طبيعي', audio: audioSample },
  { date: '29/08/2025', duration: '01.20.60', prisoner: 66, content: 'طبيعي', audio: audioSample },
  { date: '30/10/2025', duration: '01.30.10', prisoner: 38, content: 'غير طبيعي', audio: audioSample },
  { date: '11/02/2024', duration: '2.40.20', prisoner: 68, content: 'طبيعي', audio: audioSample },
  { date: '21/06/2025', duration: '00.60.10', prisoner: 72, content: 'غير طبيعي', audio: audioSample },
  { date: '01/01/2025', duration: '01.10.10', prisoner: 77, content: 'طبيعي', audio: audioSample },
  { date: '02/02/2025', duration: '00.40.10', prisoner: 88, content: 'غير طبيعي', audio: audioSample },
  { date: '03/03/2025', duration: '01.50.10', prisoner: 99, content: 'طبيعي', audio: audioSample },
  { date: '04/04/2025', duration: '02.10.10', prisoner: 100, content: 'غير طبيعي', audio: audioSample },
];

const contentColor = (content: string) => content === 'طبيعي' ? '#e8f5e9' : '#ffebee';
const ROWS_PER_PAGE = 5;

const WaveIndicator = ({ playing }: { playing: boolean }) => (
  <svg width="40" height="20" viewBox="0 0 40 20" style={{ marginLeft: 4 }}>
    {[0, 1, 2, 3, 4].map(i => (
      <rect
        key={i}
        x={i * 8}
        y={5}
        width={4}
        height={10}
        rx={2}
        fill="#4caf50"
        style={{
          opacity: 0.7,
          transformOrigin: 'center',
          animation: playing ? `waveAnim 1s ${(i * 0.1)}s infinite ease-in-out` : 'none',
        }}
      />
    ))}
    <style>{`
      @keyframes waveAnim {
        0%, 100% { height: 10px; y: 5; }
        50% { height: 18px; y: 1; }
      }
    `}</style>
  </svg>
);

const ReportPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [audioError, setAudioError] = useState(false);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  // Simple audio ref for debugging
  const simpleAudioRef = useRef<HTMLAudioElement | null>(null);

  // Simple play handler for debugging
  const handlePlaySimple = () => {
    const audio = simpleAudioRef.current;
    if (audio) {
      audio.play();
    }
  };

  const handlePlay = (index: number) => {
    // Pause all other audios
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const audio = audioRefs.current[index];
    if (audio) {
      audio.play()
        .then(() => {
          setPlayingIdx(index);
          setAudioError(false);
        })
        .catch((error) => {
          console.error('Audio playback error:', error);
          setAudioError(true);
          setPlayingIdx(null);
        });
    }
  };

  const handleAudioEnded = () => {
    setPlayingIdx(null);
    setAudioError(false);
  };

  const handleAudioError = () => {
    console.error('Audio loading error');
    setAudioError(true);
    setPlayingIdx(null);
  };

  const pagedRows = rows.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE);
  const pageCount = Math.ceil(rows.length / ROWS_PER_PAGE);

  return (
    <Box sx={{ 
      width: '100%',
      pt: { xs: 2, sm: 3 },
      pb: { xs: 2, sm: 3 }
    }}>
      {/* Debug: Simple audio player and play button */}
 
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-end',
        justifyContent: "flex-end",
        mb: { xs: 2, sm: 3 },
        flexDirection: 'column',
        gap:2
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
        >
          الأرقام الاكثر اتصالا
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2, 
          bgcolor: '#f8fafd', 
          p: { xs: 1, sm: 1.5 }, 
          borderRadius: 2, 
          border: '1px solid #e0e0e0',
          flexWrap: 'wrap'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#b2dfdb' }} />
            <Typography sx={{ fontSize: { xs: 14, sm: 15 } }}>طبيعي</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ffcdd2' }} />
            <Typography sx={{ fontSize: { xs: 14, sm: 15 } }}>غير طبيعي</Typography>
          </Box>
        </Box>
      </Box>
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: 2,
          overflowX: 'auto',
          '& .MuiTable-root': {
            minWidth: { xs: 500, sm: 650 }
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>استمع</TableCell>
              <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>محتوى المكالمة</TableCell>
              <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>رقم السجين</TableCell>
              <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>مدة المكالمة</TableCell>
              <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>تاريخ المكالمة</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedRows.map((row, idx) => (
              <TableRow key={idx} sx={{ bgcolor: contentColor(row.content) }}>
                <TableCell align="center" sx={{ py: { xs: 1, sm: 2 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton 
                      onClick={() => {
                        const currentIndex = (page - 1) * ROWS_PER_PAGE + idx;
                        if (playingIdx === currentIndex) {
                          const audio = audioRefs.current[currentIndex];
                          if (audio) {
                            audio.pause();
                            audio.currentTime = 0;
                            setPlayingIdx(null);
                          }
                        } else {
                          handlePlay(currentIndex);
                        }
                      }}
                      disabled={audioError}
                      size="small"
                    >
                      {playingIdx === (page - 1) * ROWS_PER_PAGE + idx ? (
                        <PauseIcon color="success" />
                      ) : (
                        <PlayArrowIcon color="action" />
                      )}
                    </IconButton>
                    <WaveIndicator playing={playingIdx === (page - 1) * ROWS_PER_PAGE + idx} />
                    <audio
                      ref={el => { audioRefs.current[(page - 1) * ROWS_PER_PAGE + idx] = el; }}
                      src={row.audio}
                      onPlay={() => handlePlay((page - 1) * ROWS_PER_PAGE + idx)}
                      onPause={handleAudioEnded}
                      onEnded={handleAudioEnded}
                      onError={handleAudioError}
                      preload="metadata"
                      style={{ display: 'none' }}
                    />
                  </Box>
                </TableCell>
                <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>{row.content}</TableCell>
                <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>{row.prisoner}</TableCell>
                <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>{row.duration}</TableCell>
                <TableCell align="center" sx={{ whiteSpace: 'nowrap', py: { xs: 1, sm: 2 } }}>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        mt: { xs: 2, sm: 3 }, 
        gap: 2,
        flexWrap: 'wrap'
      }}>
        <Button 
          variant="outlined" 
          onClick={() => setPage(p => Math.max(1, p + 1))} 
          disabled={page === pageCount}
          size="small"
          startIcon={<ChevronLeftIcon />}
          sx={{ flexDirection: 'row-reverse' }}
        >
          التالي
        </Button>
        <Pagination 
          count={pageCount} 
          page={page} 
          onChange={(_, v) => setPage(v)} 
          shape="rounded" 
          color="primary" 
          siblingCount={1} 
          boundaryCount={1}
          size="small"
          dir="rtl"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              {...(item.type === 'previous' && { icon: <ChevronRightIcon /> })}
              {...(item.type === 'next' && { icon: <ChevronLeftIcon /> })}
            />
          )}
        />
        <Button 
          variant="outlined" 
          onClick={() => setPage(p => Math.min(pageCount, p - 1))} 
          disabled={page === 1}
          size="small"
          endIcon={<ChevronRightIcon />}
          sx={{ flexDirection: 'row-reverse' }}
        >
          السابق
        </Button>
      </Box>
    </Box>
  );
};

export default ReportPage; 