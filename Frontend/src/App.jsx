import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./globals.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import RootCauseAnalysis from "./FeaturePages/RootCauseAnalysis";
import DiagnosisPage from "./FeaturePages/DiagnosisPage";
import DietHydrationStep from "./FeaturePages/DietHydration";
import Environment from "./FeaturePages/Environment";
import MentalEmotionalStep from "./FeaturePages/MentalEmotional";
import ExistingConditions from "./FeaturePages/ExsitingCondition";
import RCAResult from "./FeaturePages/RCAResult";
import WellnessTips from "./FeaturePages/WellnessTips";
import SeasonalPrecautions from "./FeaturePages/SeasonalPrecautions";
import Remedies from "./FeaturePages/Remedies";
<<<<<<< HEAD
import AyurvedicDosha from "./FeaturePages/Ayurvedicdosha";
import DoshaQuiz from "./FeaturePages/DoshaQuiz";
import DoshaResult from "./FeaturePages/DoshaResult";
import History from "./FeaturePages/History";
import HelpSupport from "./FeaturePages/HelpSupport";
import SymptomAnalyzer from "./FeaturePages/SymptomAnalysis";
import Settings from "./pages/Settings";
import About from "./pages/About";
=======
>>>>>>> 8bb665d42b9a770d95a0cd50af75359e6d893f42

const App = () => {
  return (
    <>
      <div className="h-dvh w-full max-h-full">
        <div>
          <Toaster />
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />

=======
>>>>>>> 8bb665d42b9a770d95a0cd50af75359e6d893f42
            <Route
              path="/root-cause-analysis"
              element={<RootCauseAnalysis />}
            />
            <Route path="/diagnosis-page" element={<DiagnosisPage />} />
            <Route path="/diet-hydration" element={<DietHydrationStep />} />
            <Route path="/mental-emotional" element={<MentalEmotionalStep />} />
            <Route path="/environment" element={<Environment />} />
            <Route
              path="/exsiting-condition"
              element={<ExistingConditions />}
            />
            <Route path="/rca-result" element={<RCAResult />} />
            <Route path="/wellness-tips" element={<WellnessTips />} />
            <Route
              path="/seasonal-precautions"
              element={<SeasonalPrecautions />}
            />
            <Route path="/remedies" element={<Remedies />} />
<<<<<<< HEAD
            <Route path="/ayurvedic-dosha" element={<AyurvedicDosha />} />
            <Route path="/dosha-quiz" element={<DoshaQuiz />} />
            <Route path="/dosha-result" element={<DoshaResult />} />
            <Route path="/history" element={<History />} />
            <Route path="/symptom-analysis" element={<SymptomAnalyzer />} />
            <Route path="/help-support" element={<HelpSupport />} />
=======
>>>>>>> 8bb665d42b9a770d95a0cd50af75359e6d893f42
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
