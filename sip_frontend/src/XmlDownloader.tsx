//import React from 'react';
import axios, { AxiosResponse } from 'axios';

const XmlDownloader = () => {
    const downloadXml = async (): Promise<void> => {
        try {
            const response: AxiosResponse<Blob> = await axios.get(
                'http://localhost:3001/download-xml',
                {
                    responseType: 'blob', // Important for handling binary data (XML)
                }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'config.xml');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error: any) {
            console.error('Error downloading XML:', error.message);
        }
    };

    return (
        <div>
            <button onClick={downloadXml}>Download XML</button>
        </div>
    );
};

export default XmlDownloader;
