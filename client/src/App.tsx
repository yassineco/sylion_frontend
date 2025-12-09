import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import HomePage from "@/pages/home";
import ProductsPage from "@/pages/products";
import ServicesPage from "@/pages/services";
import PricingPage from "@/pages/pricing";
import ContactPage from "@/pages/contact";
import WhatsappBusinessApiMarocPage from "@/pages/whatsapp-business-api-maroc";
import AssistantWhatsAppMarocPage from "@/pages/assistant-whatsapp-maroc";
import EnterprisePage from "@/pages/enterprise";
import IntegrationCrmWorkflowsPage from "@/pages/integration-crm-workflows";
import ArchitectureSecuritePage from "@/pages/architecture-securite";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/whatsapp-business-api-maroc" component={WhatsappBusinessApiMarocPage} />
      <Route path="/assistant-whatsapp-maroc" component={AssistantWhatsAppMarocPage} />
      <Route path="/enterprise" component={EnterprisePage} />
      <Route path="/integration-crm-workflows" component={IntegrationCrmWorkflowsPage} />
      <Route path="/architecture-securite" component={ArchitectureSecuritePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Navigation />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
