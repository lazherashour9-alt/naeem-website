import FloatingWhatsApp from "./FloatingWhatsApp";
import React from "react";
import { Route, Switch } from "wouter";
import { LanguageProvider } from "./LanguageContext";
import Home from "./Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback: show Home for any unmatched route */}
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
  <Router />
  <FloatingWhatsApp />
</LanguageProvider>
  );
}

export default App;