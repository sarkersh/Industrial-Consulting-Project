import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import HomePage from "./page/Home";
import AdminAdvanceSettingsPage from "./modules/admin/advanceSettings/page/AdminAdvanceSettings";
import AdminAudioSettings from "./modules/admin/audioSettings/page/AdminAudioSettings";
import AdminDeviceAdmin from "./modules/admin/deviceAmin/page/AdminDeviceAdmin";
import AdminAccountSettingsPage from "./modules/admin/accountSettings/page/AdminAcountSettings";
import AdminFeatureSettingsPage from "./modules/admin/featureSettings/page/AdminFeatureSettings";
import AdminMPKSettingsPage from "./modules/admin/MPKDetails/page/AdminMPKSettings";
import AdminPhoneMACPage from "./modules/admin/phoneMACS/page/AdminPhoneMACs";
import AdminPhoneModelsPage from "./modules/admin/phoneModels/page/AdminPhoneModelsPage";
import AdminSipServerPage from "./modules/admin/sipServer/page/AdminSipServer";
import AdminWebServicesPage from "./modules/admin/webServices/page/AdminWebServices";
import DashboardLayout from "./layout/DashBoardLayout";
import AccountSettingPage from "./modules/AccountSettings/page/AccountSetting";
import ConfigurationLayout from "./layout/ConfigurationLayout";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route element={<AdminLayout />} path="/admin">
        <Route element={<AdminAccountSettingsPage />} path="account_settings" />
        <Route element={<AdminAdvanceSettingsPage />} path="advance_settings" />
        <Route element={<AdminAudioSettings />} path="audio_settings" />
        <Route element={<AdminDeviceAdmin />} path="device_admin" />
        <Route element={<AdminFeatureSettingsPage />} path="feature_settings" />
        <Route element={<AdminMPKSettingsPage />} path="mpk_details" />
        <Route element={<AdminPhoneMACPage />} path="phone_macs" />
        <Route element={<AdminPhoneModelsPage />} path="phone_models" />
        <Route element={<AdminSipServerPage />} path="sip_server" />
        <Route element={<AdminWebServicesPage />} path="web_services" />
      </Route>
      <Route element={<DashboardLayout />} path="/dashboard">
        <Route element={<ConfigurationLayout />} path="configuration">
          <Route element={<AccountSettingPage />} path="account_settings" />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
