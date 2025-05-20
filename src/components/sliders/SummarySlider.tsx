import React, { useState, useEffect } from 'react';

import CallIcon from '@mui/icons-material/Call';

import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallEndIcon from '@mui/icons-material/CallEnd';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [
  {
    title: 'إجمالي المكالمات المصححة',
    value: '19952',
    icon: <CallEndIcon sx={{ color: '#e57373', fontSize: 28 }} />, // red
    valueBg: '#fdeaea',
    valueColor: '#e57373',
    borderColor: '#e57373',
  },
  {
    title: 'إجمالي تنبيهات المكالمات',
    value: '19952',
    icon: <CallReceivedIcon sx={{ color: '#ffb74d', fontSize: 28 }} />, // orange
    valueBg: '#fff3e0',
    valueColor: '#ffb74d',
    borderColor: '#ffb74d',
  },
  {
    title: 'إجمالي المكالمات الدولية',
    value: '22.550',
    icon: <CallIcon sx={{ color: '#90caf9', fontSize: 28 }} />, // blue
    valueBg: '#e3f2fd',
    valueColor: '#1976d2',
    borderColor: '#90caf9',
  },
  {
    title: 'إجمالي المكالمات الغير المعالجة',
    value: '22.550',
    icon: <TrendingDownIcon sx={{ color: '#ec407a', fontSize: 28 }} />, // pink
    valueBg: '#fce4ec',
    valueColor: '#ec407a',
    borderColor: '#ec407a',
  },
  {
    title: 'إجمالي المكالمات المعالجة',
    value: '22.550',
    icon: <TrendingUpIcon sx={{ color: '#26a69a', fontSize: 28 }} />, // teal
    valueBg: '#e0f2f1',
    valueColor: '#26a69a',
    borderColor: '#26a69a',
  },
  {
    title: 'عدد الزوار',
    value: '19952',
    icon: <GroupsIcon sx={{ color: '#e57373', fontSize: 28 }} />, // red
    valueBg: '#fdeaea',
    valueColor: '#e57373',
    borderColor: '#e57373',
  },
  {
    title: 'عدد المباني',
    value: '889',
    icon: <BusinessIcon sx={{ color: '#ffb74d', fontSize: 28 }} />, // orange
    valueBg: '#fff3e0',
    valueColor: '#ffb74d',
    borderColor: '#ffb74d',
  },
  {
    title: 'إجمالي التصنيفات المصححة',
    value: '996.5',
    icon: <CategoryIcon sx={{ color: '#e57373', fontSize: 28 }} />, // red
    valueBg: '#fdeaea',
    valueColor: '#e57373',
    borderColor: '#e57373',
  },
  {
    title: 'إجمالي النص المصحح',
    value: '22.550',
    icon: <ShoppingCartIcon sx={{ color: '#26a69a', fontSize: 28 }} />, // teal
    valueBg: '#e0f2f1',
    valueColor: '#26a69a',
    borderColor: '#26a69a',
  },
  {
    title: 'إجمالي المكالمات',
    value: '22222',
    icon: <CallIcon sx={{ color: '#757575', fontSize: 28 }} />, // grey
    valueBg: '#f5f5f5',
    valueColor: '#757575',
    borderColor: '#757575',
  },
  {
    title: 'عدد المستخدمين',
    value: '1.0000',
    icon: <GroupsIcon sx={{ color: '#90caf9', fontSize: 28 }} />, // blue
    valueBg: '#e3f2fd',
    valueColor: '#1976d2',
    borderColor: '#90caf9',
  },
  {
    title: 'عدد المدراء',
    value: '5',
    icon: <GroupsIcon sx={{ color: '#ec407a', fontSize: 28 }} />, // pink
    valueBg: '#fce4ec',
    valueColor: '#ec407a',
    borderColor: '#ec407a',
  },
];

const SummarySlider: React.FC = () => {
  return (
    <div style={{ padding: '20px 0' }}>
      <Swiper
        dir="rtl"
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        touchRatio={1.5}
        touchAngle={45}
        touchMoveStopPropagation={true}
        breakpoints={{
          1200: { slidesPerView: 5 },
          900: { slidesPerView: 2 },
          600: { slidesPerView: 1 },
        }}
        style={{
          paddingBottom: '40px'
        }}
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                {card.icon}
                <h3 style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#333'
                }}>{card.title}</h3>
              </div>
              <div style={{
                backgroundColor: card.valueBg,
                border: `1px solid ${card.borderColor}`,
                borderRadius: '4px',
                padding: '8px',
                textAlign: 'center'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: 600,
                  color: card.valueColor
                }}>{card.value}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SummarySlider; 