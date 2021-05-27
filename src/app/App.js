import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContainer, AppBody } from './styles';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SendMail from 'components/SendMail';
import EmailList from 'components/EmailList';
import Mail from 'components/Mail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from 'features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <div>
      <Router>
        <AppContainer>
          <Header />

          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <EmailList />
              </Route>
              <Route exact path="/mail">
                <Mail />
              </Route>
            </Switch>
          </AppBody>

          {sendMessageIsOpen && <SendMail />}
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
