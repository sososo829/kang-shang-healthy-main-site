// --- 集中式顏色系統 ---
export const colors = {
  // 主要品牌色彩
  primary: {
    sage: 'rgba(182,196,160,255)',      // 主要綠色
    coral: 'rgba(215,135,138,255)',     // 珊瑚色
    cream: 'rgba(238,215,161,255)',     // 金色奶油
    background: 'rgba(239,231,208,255)', // 背景奶油色
    black: 'rgba(0,0,0,255)'
  },
  
  // 文字色彩
  text: {
    primary: 'rgba(75,85,99,255)',         // 主要文字
  },
  
  // 背景色彩
  background: {
    white: 'rgba(255,255,255,255)',
    cream: 'rgba(239,231,208,255)',
    lightGray: 'rgba(249,250,251,255)'  // gray-50
  },
  
  // 邊框色彩
  border: {
    light: 'rgba(229,231,235,255)',     // gray-200
    sage: 'rgba(182,196,160,0.3)'       // 半透明綠色
  },
  
  // 陰影色彩
  shadow: {
    light: 'rgba(0,0,0,0.05)',
    medium: 'rgba(0,0,0,0.1)',
    coral: 'rgba(215,135,138,0.3)'
  }
};

// --- 顏色工具函數 ---
export const getColor = (colorPath) => {
  const keys = colorPath.split('.');
  let value = colors;
  
  for (const key of keys) {
    if (value[key] === undefined) {
      console.warn(`Color not found: ${colorPath}`);
      return colors.text.primary;
    }
    value = value[key];
  }
  
  return value;
};
