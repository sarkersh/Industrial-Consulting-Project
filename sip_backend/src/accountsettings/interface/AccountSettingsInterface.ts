interface AccountSettingsInterface {
    id: number;
    model_id: number;
    mac: number;
    account_active: string;
    account_name: string;
    sip_server: string;
    sip_user: string;
    auth_id: string;
    auth_password: string;
    acc_name: string;
    voicemail_id: string;
    cf_created: string;
    date_created: string;
    flag: string;
}
export default AccountSettingsInterface;