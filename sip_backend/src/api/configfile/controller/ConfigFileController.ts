//File: api/home/controller/Homecontroller.ts
import { Request, Response } from "express";
import fs from "fs";
import path from "path";

interface MPK  {
    mode_323: string,
    mode_324: string,
    mode_325: string,
    mode_326: string,
    mode_327: string,
    mode_328: string,
    mode_329: string,
    mode_353: string,

    account_301: string,
    account_304: string,
    account_307: string,
    account_310: string,
    account_313: string,
    account_316: string,
    account_319: string,
    account_354: string,

    desc_302: string,
    desc_305: string,
    desc_308: string,
    desc_311: string,
    desc_314: string,
    desc_317: string,
    desc_320: string,
    desc_355: string,

    value_303: string,
    value_306: string,
    value_309: string,
    value_312: string,
    value_315: string,
    value_318: string,
    value_321: string,
    value_356: string
}

// Define the interface for the FormData type and use it to annotate the data variable and the req.body property
interface FormData {
    accountActive: boolean;
    macAddress: string;
    accountName: string;
    sipServer: string;
    sipUserId: string;
    authId: string;
    authPassword: string;
    name: string;
    voicemailUserId: string;
    checkSipUserId: boolean;
    disableDirectIpCall: boolean;
    localSipPort: string;

    firstCodec: string;
    secondCodec: string;
    thirdCodec: string;
    handsetTxGain: string;

    attendedTransfer    : string;
    transferModeViaVPK  : string;
    enableCallFeatures  : string;
    displayDateFormat   : string;
    returnCodeWhenEnableDND: string;
    disableCallWaiting  : boolean;
    dndOnCode: string   ;
    dndOffCode: string  ;
    callForwardOnCode   : string;
    callForwardOffCode  : string;

    mpk: MPK;
    account: string;
    description: string;
    value: string;

    vlanTag: number;
    priorityValue: number;
    pcPortVlanTag: number;
    pcPortPriorityValue: number;
    hostName: string;
    showLabel: boolean;
    useLongLabel: boolean;

    weatherUpdates: number;
    currencyExchangeUpdates: number;
    firmwareUpgradeVia: string;
    firmwareUpgrade: string;
    acsUrl: string;
    periodicInformEnable: boolean;

    adminPassword: string;
    confirmAdminPassword: string;

}


class ConfigFileController {

    constructor() {
        // Bind the this context to the class instance
        this.create = this.create.bind(this);
    }

    async create(req: Request, res: Response) {


        // Get the form data from the request body
        const data = req.body as FormData;


        // Validate the input
        if (
            !data.macAddress
            // ... other fields
        ) {
            return res.status(400).send('Invalid input');
        }


        try {
            this.createXML(data)
            return res.json('Api Working');

        }catch (e: any) {
            return res.json({
                msg: "fail to create ConfigFile",
                status: 500,
                route: "/read",
                error: e.message
            });
        }


    }

    async delete(req: Request, res: Response) {

        // Get the file name from the request query
        const file = req.query.file;

        // Check if the file name is a string
        if (typeof file === 'string') {
            // Define the path to the file
            const filePath = `./xmlfiles/${file}`;

            // Delete the file using fs.unlink
            fs.unlink(filePath, (err) => {
                // Handle any errors
                if (err) {
                    console.error(err);
                    res.status(500).send('Something went wrong. Please try again.');
                } else {
                    // Send a success response
                    res.status(200).send('File deleted successfully.');
                }
            });
        } else {
            // Send a bad request response
            res.status(400).send('Please provide a valid file name.');
        }
    }

    async download(req: Request, res: Response) {
        // Get the file query parameter from the request
        const file = req.query.file;

        // Check if the file parameter is a string
        if (typeof file === 'string') {
            // Resolve the file path from the files folder
            //const filePath = path.resolve(__dirname, 'files', file);
            const filePath = path.resolve( './xmlfiles', file);

            // Send the file as a response
            res.sendFile(filePath, (error) => {
                // Handle any errors
                if (error) {
                    console.error(error);
                    res.status(500).send('Something went wrong. Please try again.');
                }
            });
        } else {
            // Send a bad request response
            res.status(400).send('Please provide a valid file name.');
        }
    }


    async fileList(req: Request, res: Response) {
        // Define the path to the xmlfiles folder
        const folderPath = './xmlfiles';

        // Read the files in the folder
        fs.readdir(folderPath, (err, files) => {
            // Handle any errors
            if (err) {
                console.error(err);
                res.status(500).send('Something went wrong. Please try again.');
            } else {
                // Send the files array as a response
                res.json(files);
            }
        });
    }


    // Define the createXML function
    createXML(data: FormData): void {
        // Write the logic to create the XML content here
        //console.log("createXML AudioSettings")

        // Generate the XML content
        const xml = `<gs_provision version="1">
    <!--  BroadSoft XML Provisioning Configuration -->
    <mac>${data.macAddress}</mac>
    <config version="1">
        <!--  G3T Configuration Template -->
        <P271>${data.accountActive}</P271>
        <P270>${data.accountName}</P270>
        <P47>${data.sipServer}</P47>
        <P35>${data.sipUserId}</P35>
        <P36>${data.authId}</P36>
        <P34>${data.authPassword}</P34>
        <P3>${data.name}</P3>
        <P33>${data.voicemailUserId}</P33>
        <P57>${data.firstCodec}</P57>
        <P58>${data.secondCodec}</P58>
        <P59>${data.thirdCodec}</P59>
        <P1464>${data.handsetTxGain}</P1464>
        <P1376>${data.attendedTransfer}</P1376>
        <P8390>${data.transferModeViaVPK}</P8390>
        <P191>${data.enableCallFeatures}</P191>
        <P64> </P64>
        <P102>${data.displayDateFormat}</P102>
        <P8361>${data.returnCodeWhenEnableDND}</P8361>
        <P91>${data.disableCallWaiting}</P91>
        <P2344>${data.dndOnCode}</P2344>
        <P2345>${data.dndOffCode}</P2345>
        <P323>${data.mpk.mode_323}</P323>
        <P301>${data.mpk.account_301}</P301>
        <P302>${data.mpk.desc_302}</P302>
        <P303>${data.mpk.value_303}</P303>
        <P324>${data.mpk.mode_324}</P324>
        <P304>${data.mpk.account_304}</P304>
        <P305>${data.mpk.desc_305}</P305>
        <P306>${data.mpk.value_306}</P306>
        <P325>${data.mpk.mode_325}</P325>
        <P307>${data.mpk.account_307}</P307>
        <P308>${data.mpk.desc_308}</P308>
        <P309>${data.mpk.value_309}</P309>
        <P326>${data.mpk.mode_326}</P326>
        <P310>${data.mpk.account_310}</P310>
        <P311>${data.mpk.desc_311}</P311>
        <P312>${data.mpk.value_312}</P312>
        <P327>${data.mpk.mode_327}</P327>
        <P313>${data.mpk.account_313}</P313>
        <P314>${data.mpk.desc_314}</P314>
        <P315>${data.mpk.value_315}</P315>
        <P328>${data.mpk.mode_328}</P328>
        <P316>${data.mpk.account_316}</P316>
        <P317>${data.mpk.desc_317}</P317>
        <P318>${data.mpk.value_318}</P318>
        <P329>${data.mpk.mode_329}</P329>
        <P319>${data.mpk.account_319}</P319>
        <P320>${data.mpk.desc_320}</P320>
        <P321>${data.mpk.value_321}</P321>
        <P353>${data.mpk.mode_353}</P353>
        <P354>${data.mpk.account_354}</P354>
        <P355>${data.mpk.desc_355}</P355>
        <P356>${data.mpk.value_356}</P356>
        <P26013>${data.callForwardOnCode}</P26013>
        <P26014>${data.callForwardOffCode}</P26014>
        <P51>${data.vlanTag}</P51>
        <P87>${data.priorityValue}</P87>
        <P229>${data.pcPortVlanTag}</P229>
        <P230>${data.pcPortPriorityValue}</P230>
        <P146>${data.hostName}</P146>
        <P8345>${data.showLabel}</P8345>
        <P8346>${data.useLongLabel}</P8346>
        <P1402>${data.weatherUpdates}</P1402>
        <P1404>${data.currencyExchangeUpdates}</P1404>
        <P212>${data.firmwareUpgradeVia}</P212>
        <P192>${data.firmwareUpgrade}</P192>
        <P2>${data.adminPassword}</P2>
        <P258>${data.checkSipUserId}</P258>
        <P1310>${data.disableDirectIpCall}</P1310>
        <P4503>${data.acsUrl}</P4503>
        <P4506>${data.periodicInformEnable}</P4506>
        <P40>${data.localSipPort}</P40>       
    </config>
</gs_provision>`;


        const xmlFile : string = './xmlfiles/' + data.macAddress + ".xml"
        console.log('xmlfile :::: ', xmlFile)

        // Write the XML content to a file
        fs.writeFile(xmlFile, xml, (err) => {
            if (err) {
                return ('Error writing file');
            }

            console.log("createXML AudioSettings File Created .....")
            // Send a success response
            return ('File created');
        });
    }

}
export default new ConfigFileController();