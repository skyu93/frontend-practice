const radius = 130;
const angleIncrement = 45;

const keyframes = (index: number, currentIndex: number) => {
  const angle = (index - currentIndex) * angleIncrement;
  const y = Math.sin(angle * Math.PI / 180) * radius;
  const z = Math.cos(angle * Math.PI / 180) * radius - radius;
  const scale = Math.max(0.6, Math.cos(angle * Math.PI / 180) * 0.3 + 0.7);

  const opacity = Math.max(0.4, Math.cos(angle * Math.PI / 180) * 0.5);
  const zIndex = 1000 - Math.abs(index - currentIndex)
  return [
    {
      transform: `translateY(${-y}px)
                  translateZ(${z}px)
                  rotateX(${angle}deg)
                  scale(${scale})`,
      opacity: currentIndex === index ? 1 : opacity,
      zIndex
    }
  ];
}

export const animateCards = (elements: Element[], currentIndex: number) => {
  if(!elements || !elements.length) return

  elements.forEach((el, index) => {
    el.animate(keyframes(index, currentIndex), {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-out'
    });
  });
}

export const MENUS = [
  {
    title: '검색창',
    subTitle: 'Search Bar',
    imgFileName: 'scrolling_pattern',
    routePath: ''
  },
  {
    title: '무한 스크롤',
    subTitle: 'Infinity Scroll',
    imgFileName: 'scrolling_pattern',
    routePath: ''
  },
  {
    title: '드래그 앤 드롭',
    subTitle: 'Drag and Drop',
    imgFileName: 'scrolling_pattern',
    routePath: ''
  },
]
