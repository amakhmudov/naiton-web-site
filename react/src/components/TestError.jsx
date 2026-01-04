export default function TestError({ crash }) {
  if (crash) throw new Error("Test crash");
  return null;
}
