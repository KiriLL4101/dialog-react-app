import React, { createContext } from 'react';

import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";

function App() {
  const [message, addMessage] = React.useState(null);
  const [theme, toggleTheme] = React.useState(getTheme());

  React.useEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header />
        <Dialog newMessage={message} />
        <Sender onAddMessage={addMessage} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
