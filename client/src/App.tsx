import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import EntrexLandingPage from "@/pages/EntrexLandingPage";
import ClientsPage from "@/pages/Clients";
import AboutUsPage from "@/pages/AboutUs";
import EmployeeTransportationServices from "@/pages/EmployeeTransportationServices";
import ContactUs from "@/pages/ContactUs";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={EntrexLandingPage} />
      <Route
        path="/employee-transportation-services"
        component={EmployeeTransportationServices}
      />
      <Route path="/clients" component={ClientsPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUs} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
