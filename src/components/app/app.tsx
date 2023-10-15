import Main from '../../pages/main/main';

type AppMainProps = {
  rentCount: number;
}
function App({rentCount}: AppMainProps): JSX.Element {
  return (
    <Main rentCount = {rentCount} />
  );
}
export default App;
