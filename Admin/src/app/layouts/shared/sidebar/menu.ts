import { Activite } from 'src/app/core/models/activite.models';
import { Flux } from 'src/app/core/models/flux.models';
import { FluxElem } from 'src/app/core/models/fluxElem.models';
import { GrpFlux } from 'src/app/core/models/grpFlux.models';
import { ArrayModel } from 'src/app/pages/ecommerce/products/products.model';
import { environment } from 'src/environments/environment';
import { MenuItem } from './menu.model';


const routeActivite = '/advanced/activite/';
const routeGrpFlux = '/advanced/grpFlux/';
const routeSite = '/advanced/site/';



const protocol = environment.webServiceConfig.protocol;
const domain = environment.webServiceConfig.domain;
const path = environment.webServiceConfig.path;

// tslint:disable-next-line: one-variable-per-declaration
const Sites: MenuItem[] = [], Unites: MenuItem[] = [], Equipes: MenuItem[] = [], Agents: MenuItem[] = [];
// tslint:disable-next-line: one-variable-per-declaration
const Activités: MenuItem[] = []; const Fluxs: MenuItem[] = [];
// tslint:disable-next-line: one-variable-per-declaration
const GrpFluxs: MenuItem[] = []; const Fluxs2: MenuItem[] = [];


const arrayActivite: Activite[] = [];
const arrayActiviteFlux: Flux[] = [];


const arrayGrpFlux: Activite[] = [];
const arrayGrpFluxFlux: Flux[] = [];





const arraySites = ['Site 1', 'Site 2'];
const arrayUnites = ['Unite 1', 'Unite 2', 'Unite 3'];
const arrayEquipe = ['Equipe 1', 'Equipe 2', 'Equipe 3', 'Equipe 4'];
const arrayAgents = ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'];

const xhrActivite = new XMLHttpRequest();
const xhrGrpFlux = new XMLHttpRequest();
const xhrSite = new XMLHttpRequest();




export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: '/'
    },
];



xhrActivite.withCredentials = true;
xhrActivite.open
    (
        'GET',
        protocol + domain + path + '/Activite',
        true
    );
xhrActivite.send();
xhrActivite.onload = () => {
    if (xhrActivite.status !== 200) {
        // analyze HTTP status of the response
        alert(`Error ${xhrActivite.status}: ${xhrActivite.statusText}`); // e.g. 404: Not Found
    } else {

        const obj = JSON.parse(xhrActivite.responseText);

        const names = Object.keys(obj.Activite.entries);
        const jsonSize = names.length;
        for (let i = 0; i < jsonSize; i++) {
            try {
                const flux = new Flux();
                flux.label = 'Flux Test';
                arrayActiviteFlux.push(flux);
                const activite = new Activite();
                activite.label = names[i];
                arrayActivite.push(activite);
            } catch (exception) {
                console.log(exception.toString());

            }
        }




        for (let y = 0, len2 = arrayActiviteFlux.length; y < len2; y++) {
            Fluxs.push({
                id: 85,
                label: arrayActiviteFlux[y].label,
                parentId: 72,
                link: routeActivite + 'Act2/flux/' + arrayActiviteFlux[y].label,
            });
        }

        for (let i = 0, len = arrayActivite.length; i < len; i++) {
            Activités.push({
                id: 72,
                label: arrayActivite[i].label,
                parentId: 70,
                subItems: Fluxs,
                link: routeActivite + arrayActivite[i].label,
            });
        }
    }
};




xhrGrpFlux.withCredentials = true;
xhrGrpFlux.open
    (
        'GET',
        protocol + domain + path + '/GrpFlux',
        true
    );
xhrGrpFlux.send();
xhrGrpFlux.onload = () => {
    if (xhrGrpFlux.status !== 200) {
        // analyze HTTP status of the response
        alert(`Error ${xhrGrpFlux.status}: ${xhrGrpFlux.statusText}`); // e.g. 404: Not Found
    } else {

        const obj = JSON.parse(xhrGrpFlux.responseText);

        const names = Object.keys(obj.GrpFlux.entries);
        const jsonSize = names.length;
        for (let i = 0; i < jsonSize; i++) {
            try {
                const flux = new Flux();
                flux.label = 'Flux Test';
                arrayGrpFluxFlux.push(flux);
                const grpFlux = new GrpFlux();
                grpFlux.label = names[i];
                arrayGrpFlux.push(grpFlux);
            } catch (exception) {
                console.log(exception.toString());

            }
        }





        for (let y = 0, len2 = 5; y < len2; y++) {
            Fluxs2.push({
                id: 85,
                label: arrayGrpFluxFlux[0].label,
                parentId: 72,
                link: routeGrpFlux + arrayGrpFlux[0].label + '/flux/' + arrayGrpFluxFlux[0].label,
            });
        }

        for (let i = 0, len = 3; i < len; i++) {
            GrpFluxs.push({
                id: 72,
                label: arrayGrpFlux[0].label,
                parentId: 70,
                subItems: Fluxs2,
                link: routeGrpFlux + arrayGrpFlux[0].label,
            });
        }
    }
};








MENU.push({
    id: 69,
    label: 'MENUITEMS.MULTILEVEL.TEXT',
    icon: 'ri-slideshow-3-fill',
    subItems: [
        {
            id: 70,
            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
            parentId: 69,
            subItems: Activités,
        },
        {
            id: 71,
            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL2.1',
            parentId: 69,
            subItems: GrpFluxs
        },
    ]
});

for (let y = 0, len2 = arrayAgents.length; y < len2; y++) {
    Agents.push({
        label: arrayAgents[y],
        link: routeSite + 'Site 1/unite/Unite 1/equipe/Equipe 1/agent/' + arrayAgents[y].replace(' ', ''),
    });
}

for (let y = 0, len2 = arrayEquipe.length; y < len2; y++) {
    Equipes.push({
        label: arrayEquipe[y],
        link: routeSite + 'Site 1/unite/Unite 1/equipe/' + arrayEquipe[y].replace(' ', ''),
        subItems: Agents,
    });
}

for (let y = 0, len2 = arrayUnites.length; y < len2; y++) {
    Unites.push({
        label: arrayUnites[y],
        link: routeSite + 'Site 1/unite/' + arrayUnites[y].replace(' ', ''),
        subItems: Equipes,
    });
}
for (let y = 0, len2 = arraySites.length; y < len2; y++) {
    Sites.push({
        label: arraySites[y],
        parentId: 70,
        link: routeSite + arraySites[y].replace(' ', ''),
        subItems: Unites,
    });
}

MENU.push({
    id: 69,
    label: 'MENUITEMS.MULTILEVEL2.TEXT',
    icon: 'ri-slideshow-4-fill',
    subItems: [
        {
            id: 70,
            label: 'MENUITEMS.MULTILEVEL2.LIST.LEVEL1.1',
            parentId: 69,
            link: 'javascript: void(0);',
            subItems: Sites,
        },
        {
            id: 71,
            label: 'MENUITEMS.MULTILEVEL2.LIST.LEVEL2.1',
            parentId: 69,
            subItems: Sites,
        },
    ]
});

MENU.push({
    id: 60,
    label: 'MENUITEMS.CHARTS.TEXT',
    icon: 'ri-bar-chart-line',
    subItems: [
        {
            id: 61,
            label: 'MENUITEMS.CHARTS.LIST.APEX',
            link: '/charts/apex',
            parentId: 60
        },
        {
            id: 61,
            label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
            link: '/charts/chartjs',
            parentId: 60
        },
        {
            id: 62,
            label: 'MENUITEMS.CHARTS.LIST.ECHART',
            link: '/charts/echart',
            parentId: 60
        }
    ]
},

    /*  {
        id: 3,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'ri-calendar-2-line',
        link: '/calendar'
    },
    {
        id: 4,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'ri-chat-1-line',
        link: '/chat'
    },
    {
        id: 5,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'ri-store-2-line',
        subItems: [
            {
                id: 6,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/ecommerce/products',
                parentId: 5
            },
            {
                id: 8,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/ecommerce/orders',
                parentId: 5
            },
            {
                id: 9,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/ecommerce/customers',
                parentId: 5
            },
            {
                id: 10,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/ecommerce/cart',
                parentId: 5
            },
            {
                id: 11,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/ecommerce/checkout',
                parentId: 5
            },
            {
                id: 12,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/ecommerce/shops',
                parentId: 5
            },
            {
                id: 13,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/ecommerce/add-product',
                parentId: 5
            },
        ]
    },
    {
        id: 14,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'ri-mail-send-line',
        subItems: [
            {
                id: 15,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/email/inbox',
                parentId: 14
            },
            {
                id: 16,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/email/read/1',
                parentId: 14
            }
        ]
    },
    {
        id: 15,
        label: 'MENUITEMS.KANBAN.TEXT',
        icon: 'ri-artboard-2-line',
        link: '/kanban-board'
    },*/
    {
        id: 16,
        isLayout: true
    },
    {
        id: 17,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 18,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'ri-account-circle-line',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/pages/login-1',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/pages/register-1',
                parentId: 18
            },
            {
                id: 21,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/pages/recoverpwd-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 18
            }
        ]
    },
    {
        id: 23,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'ri-profile-line',
        subItems: [
            {
                id: 24,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 23
            },
            {
                id: 25,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 23
            },
            {
                id: 26,
                label: 'MENUITEMS.UTILITY.LIST.COOMINGSOON',
                link: '/pages/coming-soon',
                parentId: 23
            },
            {
                id: 27,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 23
            },
            {
                id: 28,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 23
            },
            {
                id: 29,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 23
            },
            {
                id: 30,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 23
            },
            {
                id: 31,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 23
            },
        ]
    },
    {
        id: 32,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 33,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'ri-pencil-ruler-2-line',
        subItems: [
            {
                id: 34,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 33
            },
            {
                id: 35,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 33
            },
            {
                id: 36,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 33
            },
            {
                id: 37,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 33
            },
            {
                id: 38,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 33
            },
            {
                id: 39,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 33
            },
            {
                id: 40,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 33
            },
            {
                id: 41,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 33
            },
            {
                id: 42,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 33
            },
            {
                id: 43,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbar',
                parentId: 33
            },
            {
                id: 44,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 33
            },
            {
                id: 45,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 33
            },
            {
                id: 46,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 33
            },
            {
                id: 47,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 33
            },
            {
                id: 48,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 33
            },
        ]
    },
    {
        id: 49,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'ri-eraser-fill',
        badge: {
            variant: 'danger',
            text: '6'
        },
        subItems: [
            {
                id: 50,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 49
            },
            {
                id: 51,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 49
            },
            {
                id: 52,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 49
            },
            {
                id: 53,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/form/editor',
                parentId: 49
            },
            {
                id: 54,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/form/uploads',
                parentId: 49
            },
            {
                id: 55,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 49
            },
            {
                id: 56,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 49
            },
        ]
    },
    {
        id: 63,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'ri-brush-line',
        subItems: [
            {
                id: 64,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/icons/remix',
                parentId: 63
            },
            {
                id: 65,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 63
            },
            {
                id: 66,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 63
            },
            {
                id: 67,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 63
            }
        ]
    },
    {
        id: 68,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'ri-map-pin-line',
        subItems: [
            {
                id: 69,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 68
            },
            {
                id: 70,
                label: 'Leaflet Maps',
                link: '/maps/leaflet',
                parentId: 68
            },
        ]
    });
