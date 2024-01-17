// core/routes/phone.ts
import { Router } from "express";
import { getPhoneNumbers } from "../../../core/service/phone";
var jsonxml = require('jsontoxml');
//var xml = require("xml")
const phoneRouter = Router();

import xml from "xml";
import { writeFile } from "fs";


//updated
interface SitemapItem {
    url: {
        loc: string;
        lastmod?: string;
    };
}

interface Page {
    title: string;
    lastModified?: string;
    created: string;
    slug: string;
}

async function main(): Promise<void> {
    const pages: Page[] = [
        {
            title: "Sample Page One",
            created: "Dec 22 2020",
            slug: "sample-page-one",
        },
        {
            title: "Sample Page Two",
            created: "Feb 1 2021",
            lastModified: "Feb 2 2021",
            slug: "sample-page-two",
        },
        {
            title: "Sample Page Three",
            created: "Mar 2 2021",
            lastModified: "Mar 5 2021",
            slug: "sample-page-three",
        },
        {
            title: "Sample Page Four",
            created: "Mar 20 2021",
            slug: "sample-page-four",
        },
    ];

    const indexItem: any = {
        //todo: build index item
    };

    const sitemapItems: SitemapItem[] = await pages.reduce(async (
        items: Promise<SitemapItem[]>,
        item: Page
    ): Promise<SitemapItem[]> => {
        // todo: build page items
        const itemList = await items;
        return itemList;
    }, Promise.resolve([]));
}

phoneRouter.get("/", async (req, res) => {
    try {
        const phoneNumbers = await getPhoneNumbers();


        var xml1 = jsonxml({
            node:'text content',
            parent:[
                {name:'taco',text:'beef taco',children:{salsa:'hot!'}},
                {name:'taco',text:'fish taco',attrs:{mood:'sad'},children:[
                        {name:'salsa',text:'mild'},
                        'hi',
                        {name:'salsa',text:'weak',attrs:{type:2}}
                    ]},
                {name:'taco',attrs:'mood="party!"'}
            ],
            parent2:{
                hi:'is a nice thing to say',
                node:'i am another not special child node',
                date:function(){
                    return (new Date())+'';
                }
            }
        })

        console.log(xml1);
        var example1 : {url:string}[] = [ { url: 'http://www.google.com/search?aq=f&sourceid=chrome&ie=UTF-8&q=opower' } ];
        console.log(xml(example1));


        var example5 = [ {
            toys: [ { _attr: { decade: '80s', locale: 'US'} }, {
                toy: 'Transformers' } , {
                toy: [ { _attr: { knowing: 'half the battle' } },
                    'GI Joe'
                ] }, {
                toy: [ {
                    name: 'He-man' }, {
                    description: { _cdata: '<strong>Master of the Universe!</strong>'}
                } ]
            }]
        } ];






        res.status(200).json(phoneNumbers);
    } catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
});

export default phoneRouter ;