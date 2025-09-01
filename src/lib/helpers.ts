// dimensions.ts
export const wp = (percentage?: number): number => {
  return percentage ? (window.innerWidth * percentage) / 100 : window.innerWidth
}

export const hp = (percentage?: number): number => {
  return percentage
    ? (window.innerHeight * percentage) / 100
    : window.innerHeight
}
