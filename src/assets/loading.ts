
export default function Loading() {
  const frames = [
    "[Server]....      .[Database]",
    "[Server]...      ..[Database]",
    "[Server]..      ...[Database]",
    "[Server].      ....[Database]",
    "[Server]      .....[Database]",
    "[Server].      ....[Database]",
    "[Server]..      ...[Database]",
    "[Server]...      ..[Database]",
    "[Server]....      .[Database]",
    "[Server].....      [Database]"
  ];
  
    const animateConnection = () => {
      let currentIndex = 0;
    
      const interval = setInterval(() => {
        console.clear();
        console.log('\x1b[36m%s\x1b[0m',frames[currentIndex]);
        currentIndex = (currentIndex + 1) % frames.length;
      }, 500);
    
      return () => {
        clearInterval(interval);
        console.clear();
      };
    };
    
    const stopAnimation = animateConnection();
}

