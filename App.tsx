import {TabsRoutes} from './src/routes/BottomTabs.routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TabsRoutes />
    </>
  );
}