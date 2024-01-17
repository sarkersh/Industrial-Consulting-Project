import  home  from '../../api/home/routes/HomeRoute';
import  phone  from '../../api/phone/routes/PhoneRoute';
import HomeRouter from '../../api/home/routes/HomeRoute';
import UserRoute from '../../user/routes/UserRoute'
import audioSettingsRoute from '../../audiosettings/routes/AudioSettingsRoute'
import advanceSettingsRoute from '../../advance_settings/routes/AdvanceSettingsRoute'
import accountSettingsRoute from '../../accountsettings/routes/AccountSettingsRoute'
import deviceAdminRoute from '../../deviceadmin/routes/DeviceAdminRoute'
import featureSettings from '../../featuresettings/routes/FeatureSettingsRoute'
import mpkDetails from '../../mpkdetails/routes/MpkDetailsRoute'
import phoneMacs from '../../phonemacs/routes/PhoneMacsRoute'
import phoneModels from '../../phonemodels/routes/PhoneModelsRoute'
import sipServer from '../../sipserver/routes/SipServerRoute'
import webServices from '../../webservices/routes/WebServicesRoute'

//export const home = { HomeRouter };
export const user = { UserRoute };


export {
    home,
    phone,
    audioSettingsRoute,
    advanceSettingsRoute,
    accountSettingsRoute,
    deviceAdminRoute,
    featureSettings,
    mpkDetails,
    phoneMacs,
    phoneModels,
    sipServer,
    webServices,
}