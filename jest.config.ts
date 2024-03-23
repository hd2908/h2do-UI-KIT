export default {
  roots: ["./stories"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: 'jsdom',
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};