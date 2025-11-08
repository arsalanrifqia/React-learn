export default function AngkaPrint({ nomer }) {
  if (nomer > 10 || nomer < 0) {
    return <h3>Done</h3>;
  } else {
    return <h3>{nomer}</h3>;
  }
}
