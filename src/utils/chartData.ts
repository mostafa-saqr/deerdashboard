export const generateRandomData = () => {
  return {
    pieData: [
      { name: 'المكالمات المصححة', value: Math.floor(Math.random() * 300) + 100 },
      { name: 'المكالمات الدولية', value: Math.floor(Math.random() * 100) + 20 },
      { name: 'المكالمات المعالجة', value: Math.floor(Math.random() * 200) + 50 },
      { name: 'المكالمات الغير معالجة', value: Math.floor(Math.random() * 150) + 30 },
    ],
    lineData: [
      { name: 'يناير', corrected: Math.floor(Math.random() * 100), international: Math.floor(Math.random() * 100) },
      { name: 'فبراير', corrected: Math.floor(Math.random() * 100), international: Math.floor(Math.random() * 100) },
      { name: 'مارس', corrected: Math.floor(Math.random() * 100), international: Math.floor(Math.random() * 100) },
      { name: 'أبريل', corrected: Math.floor(Math.random() * 100), international: Math.floor(Math.random() * 100) },
      { name: 'مايو', corrected: Math.floor(Math.random() * 100), international: Math.floor(Math.random() * 100) },
      { name: 'يونيو', corrected: Math.floor(Math.random() * 100), international: Math.floor(Math.random() * 100) },
    ],
    barData: [
      { name: 'يناير', processed: Math.floor(Math.random() * 30), unprocessed: Math.floor(Math.random() * 30) },
      { name: 'فبراير', processed: Math.floor(Math.random() * 30), unprocessed: Math.floor(Math.random() * 30) },
      { name: 'مارس', processed: Math.floor(Math.random() * 30), unprocessed: Math.floor(Math.random() * 30) },
      { name: 'أبريل', processed: Math.floor(Math.random() * 30), unprocessed: Math.floor(Math.random() * 30) },
      { name: 'مايو', processed: Math.floor(Math.random() * 30), unprocessed: Math.floor(Math.random() * 30) },
      { name: 'يونيو', processed: Math.floor(Math.random() * 30), unprocessed: Math.floor(Math.random() * 30) },
    ],
  };
}; 