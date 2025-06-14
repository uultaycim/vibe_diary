import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
export default App;
WebApp.ready();

function App() {
  useEffect(() => {
    WebApp.expand();
    WebApp.MainButton.setText("Сохранить");
    WebApp.MainButton.show();
    WebApp.MainButton.onClick(() => {
      // отправка данных
    });
  }, []);

  return (
    <div className="p-4">
      <h1>Как прошел твой день?</h1>
      <textarea placeholder="Напиши тут..." />
    </div>
  );
}


