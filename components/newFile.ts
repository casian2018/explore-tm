export default (() => {
const __VLS_setup = async () => {
const store = useAccountStore();

export default {
methods: {
openCity(cityName, color) {
const tabcontent = document.getElementsByClassName("tabcontent");
for (let i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

const tablinks = document.getElementsByClassName("tablink");
for (let i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}

document.getElementById(cityName).style.display = "block";
// This part seems unnecessary
// this.$refs[cityName].style.backgroundColor = color;
},
},
mounted() {
this.openCity("History", "red"); // Set the default open tab
},
};
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'settings';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'h14', typeof __VLS_components, 'H14', 'h14'>;
__VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.H14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14; __VLS_components.h14;
// @ts-ignore
[h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14, h14,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-10/12 mx-auto max-w-6xl"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("lg:col-start-2 col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 mx-auto"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("p-4 col-span-6 md:col-span-2"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("grid grid-cols-5"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("p-4 col-span-6 md:col-span-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-6 -mb-8 flex items-center justify-end gap-x-6"), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("tablink"), };
type __VLS_0 = JSX.IntrinsicElements['button'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_0['onClick']> = {
click: $event => {
__VLS_ctx.openCity({ cityName: 'PersonalInfo', color: 'orange' });
}
};
// @ts-ignore
[openCity,];
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("tablink"), };
type __VLS_2 = JSX.IntrinsicElements['button'];
const __VLS_3: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_2['onClick']> = {
click: $event => {
__VLS_ctx.openCity({ cityName: 'PaymentInfo', color: 'blue' });
}
};
// @ts-ignore
[openCity,];
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("tablink"), };
type __VLS_4 = JSX.IntrinsicElements['button'];
const __VLS_5: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_4['onClick']> = {
click: $event => {
__VLS_ctx.openCity({ cityName: 'History', color: 'red' });
}
};
// @ts-ignore
[openCity,];
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("tablink"), };
type __VLS_6 = JSX.IntrinsicElements['button'];
const __VLS_7: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_6['onClick']> = {
click: $event => {
__VLS_ctx.openCity({ cityName: 'Security', color: 'green' });
}
};
// @ts-ignore
[openCity,];
}
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { class: (""), href: ("/logout"), };
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { fill: ("#000000"), height: ("20px"), width: ("20px"), version: ("1.1"), id: ("Capa_1"), xmlns: ("http://www.w3.org/2000/svg"), 'xmlns:xlink': ("http://www.w3.org/1999/xlink"), viewBox: ("0 0 384.971 384.971"), 'xml:space': ("preserve"), };
{
({} as JSX.IntrinsicElements).g;
({} as JSX.IntrinsicElements).g;
(__VLS_x as JSX.IntrinsicElements)['g'] = { id: ("SVGRepo_bgCarrier"), strokeWidth: ("0"), 'stroke-width': ("0"), };
}
{
({} as JSX.IntrinsicElements).g;
({} as JSX.IntrinsicElements).g;
(__VLS_x as JSX.IntrinsicElements)['g'] = { id: ("SVGRepo_tracerCarrier"), strokeLinecap: ("round"), 'stroke-linecap': ("round"), strokeLinejoin: ("round"), 'stroke-linejoin': ("round"), };
}
{
({} as JSX.IntrinsicElements).g;
({} as JSX.IntrinsicElements).g;
(__VLS_x as JSX.IntrinsicElements)['g'] = { id: ("SVGRepo_iconCarrier"), };
{
({} as JSX.IntrinsicElements).g;
({} as JSX.IntrinsicElements).g;
(__VLS_x as JSX.IntrinsicElements)['g'] = {};
{
({} as JSX.IntrinsicElements).g;
({} as JSX.IntrinsicElements).g;
(__VLS_x as JSX.IntrinsicElements)['g'] = { id: ("Sign_Out"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"), };
}
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"), };
}
}
}
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center justify-center aling-midle"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("History"), class: ("tabcontent hidden"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col justify-center items-center"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("text-2xl font-semibold text-gray-700 text-center mt-4"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[576px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800  dark:shadow-none"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center gap-3"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-16 w-16 items-center justify-center"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("h-full w-full rounded-xl"), src: ("https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col"), };
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("text-base font-bold text-navy-700 "), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("mt-1 text-sm font-normal text-gray-600"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-1 flex items-center justify-center text-navy-700 "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { stroke: ("currentColor"), fill: ("currentColor"), strokeWidth: ("0"), 'stroke-width': ("0"), viewBox: ("0 0 320 512"), height: ("1em"), width: ("1em"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-1 flex items-center text-sm font-bold text-navy-700 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-2 flex items-center text-sm font-normal text-gray-600 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center gap-3"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-16 w-16 items-center justify-center"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("h-full w-full rounded-xl"), src: ("https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft6.9ff5403226e81a6fd390.png"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col"), };
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("text-base font-bold text-navy-700 "), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("mt-1 text-sm font-normal text-gray-600"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-1 flex items-center justify-center text-navy-700 "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { stroke: ("currentColor"), fill: ("currentColor"), strokeWidth: ("0"), 'stroke-width': ("0"), viewBox: ("0 0 320 512"), height: ("1em"), width: ("1em"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-1 flex items-center text-sm font-bold text-navy-700 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-2 flex items-center text-sm font-normal text-gray-600 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center gap-3"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-16 w-16 items-center justify-center"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("h-full w-full rounded-xl"), src: ("https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col"), };
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("text-base font-bold text-navy-700 "), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("mt-1 text-sm font-normal text-gray-600"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-1 flex items-center justify-center text-navy-700 "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { stroke: ("currentColor"), fill: ("currentColor"), strokeWidth: ("0"), 'stroke-width': ("0"), viewBox: ("0 0 320 512"), height: ("1em"), width: ("1em"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-1 flex items-center text-sm font-bold text-navy-700 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-2 flex items-center text-sm font-normal text-gray-600 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center gap-3"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-16 w-16 items-center justify-center"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("h-full w-full rounded-xl"), src: ("https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col"), };
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("text-base font-bold text-navy-700 "), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("mt-1 text-sm font-normal text-gray-600"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-1 flex items-center justify-center text-navy-700 "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { stroke: ("currentColor"), fill: ("currentColor"), strokeWidth: ("0"), 'stroke-width': ("0"), viewBox: ("0 0 320 512"), height: ("1em"), width: ("1em"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-1 flex items-center text-sm font-bold text-navy-700 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-2 flex items-center text-sm font-normal text-gray-600 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center gap-3"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex h-16 w-16 items-center justify-center"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("h-full w-full rounded-xl"), src: ("https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft5.62dbaf7dd91b4180035c.png"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col"), };
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("text-base font-bold text-navy-700 "), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("mt-1 text-sm font-normal text-gray-600"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-1 flex items-center justify-center text-navy-700 "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { stroke: ("currentColor"), fill: ("currentColor"), strokeWidth: ("0"), 'stroke-width': ("0"), viewBox: ("0 0 320 512"), height: ("1em"), width: ("1em"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-1 flex items-center text-sm font-bold text-navy-700 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-2 flex items-center text-sm font-normal text-gray-600 "), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("ml-1"), };
}
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("Security"), class: ("tabcontent hidden mb-24"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mx-[20%] mt-4"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("text-2xl font-bold mb-4 text-center"), };
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = {};
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-2xl font-semibold mb-2"), };
}
}
else {
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-2xl font-semibold mb-2"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
else {
{
__VLS_templateComponents.h14;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.h14>) = { class: ("font-bold text-xl"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
}
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = { class: ("mt-8"), };
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-2xl font-semibold mb-2"), };
}
}
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-2xl font-semibold mb-2"), };
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
{
({} as JSX.IntrinsicElements).strong;
({} as JSX.IntrinsicElements).strong;
(__VLS_x as JSX.IntrinsicElements)['strong'] = { class: ("font-bold text-xl"), };
}
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
{
({} as JSX.IntrinsicElements).strong;
({} as JSX.IntrinsicElements).strong;
(__VLS_x as JSX.IntrinsicElements)['strong'] = { class: ("font-bold text-xl"), };
}
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
{
({} as JSX.IntrinsicElements).strong;
({} as JSX.IntrinsicElements).strong;
(__VLS_x as JSX.IntrinsicElements)['strong'] = { class: ("font-bold text-xl"), };
}
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
{
({} as JSX.IntrinsicElements).strong;
({} as JSX.IntrinsicElements).strong;
(__VLS_x as JSX.IntrinsicElements)['strong'] = { class: ("font-bold text-xl"), };
}
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
{
({} as JSX.IntrinsicElements).strong;
({} as JSX.IntrinsicElements).strong;
(__VLS_x as JSX.IntrinsicElements)['strong'] = { class: ("font-bold text-xl"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = { class: ("mt-8"), };
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-2xl font-semibold mb-2"), };
}
}
else {
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-2xl font-semibold mb-2"), };
}
}
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-lg"), };
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("PaymentInfo"), class: ("tabcontent hidden"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("text-2xl font-semibold text-gray-700 text-center mt-4"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: (""), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("my-3"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"), placeholder: ("Card holder"), maxlength: ("22"), xModel: ("cardholder"), 'x-model': ("cardholder"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("my-3"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"), placeholder: ("Card number"), xModel: ("cardNumber"), 'x-model': ("cardNumber"), 'xOn:keydown': ("format()"), 'x-on:keydown': ("format()"), 'xOn:keyup': ("isValid()"), 'x-on:keyup': ("isValid()"), maxlength: ("19"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("my-3 flex flex-col"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mb-2"), };
if (__VLS_ctx.store.ro) {
// @ts-ignore
[store,];
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: (""), class: ("text-gray-700"), };
}
}
else {
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: (""), class: ("text-gray-700"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("grid grid-cols-2 sm:grid-cols-4 gap-2"), };
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { name: (""), id: (""), class: ("form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"), xModel: ("expired.month"), 'x-model': ("expired.month"), };
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: (""), selected: (true), disabled: (true), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("01"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("02"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("03"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("04"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("05"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("06"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("07"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("08"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("09"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("10"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("11"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("12"), };
}
}
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { name: (""), id: (""), class: ("form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"), xModel: ("expired.year"), 'x-model': ("expired.year"), };
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: (""), selected: (true), disabled: (true), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("2021"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("2022"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("2023"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("2024"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("2025"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("2026"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"), placeholder: ("Security code"), maxlength: ("3"), xModel: ("securityCode"), 'x-model': ("securityCode"), 'xOn:focus': ("card = 'back'"), 'x-on:focus': ("card = 'back'"), 'xOn:blur': ("card = 'front'"), 'x-on:blur': ("card = 'front'"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-6 flex items-center justify-end gap-x-6"), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("button"), class: ("text-sm font-semibold leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("submit"), class: ("rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"), };
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("PersonalInfo"), class: ("tabcontent"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("text-2xl font-semibold text-gray-700 text-center mt-4"), };
}
{
({} as JSX.IntrinsicElements).form;
({} as JSX.IntrinsicElements).form;
(__VLS_x as JSX.IntrinsicElements)['form'] = { class: ("p-4 col-span-2 sm:col-span-1 md:col-span-1 mx-[30%]"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("first-name"), class: ("block text-sm font-medium leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), name: ("first-name"), id: ("first-name"), autocomplete: ("given-name"), maxlength: ("40"), class: ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("last-name"), class: ("block text-sm font-medium leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), name: ("last-name"), id: ("last-name"), autocomplete: ("family-name"), class: ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("email"), class: ("block text-sm font-medium leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { id: ("email"), name: ("email"), type: ("email"), autocomplete: ("email"), class: ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("phone"), class: ("block text-sm font-medium leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { id: ("phone"), name: ("phone"), type: ("phone"), autocomplete: ("phone"), class: ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("CI"), class: ("block text-sm font-medium leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { id: ("CI"), name: ("CI"), type: ("number"), autocomplete: (""), class: ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-span-1"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("STPT Card Number"), class: ("block text-sm font-medium leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { id: ("number"), name: ("STPT Card Number"), type: ("phone"), autocomplete: (""), class: ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-6 flex items-center justify-end gap-x-6"), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("button"), class: ("text-sm font-semibold leading-6 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("submit"), class: ("rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"), };
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
store: store,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
