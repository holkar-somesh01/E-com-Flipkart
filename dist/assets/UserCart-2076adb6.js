import{h as f,b as v,a as j,r as a,d as w,u as y,B as t,i as L,j as s,L as i,k}from"./index-a55c5e04.js";import{G as S}from"./iconBase-d0ce5742.js";import{P as E}from"./index-a609d513.js";import{C as I}from"./index-3fca516a.js";function O(l){return S({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(l)}const z=()=>{const[l,{isSuccess:d,isError:C,isLoading:u}]=f(),[g,{isSuccess:r,isError:n,isLoading:P,error:N}]=v(),{cart:c}=j(e=>e.public),{user:x}=j(e=>e.auth),[o,A]=a.useState(100),m=w(),h=y(),b=()=>{const e=c.map(p=>p._id);l({products:e,customer:x._id})};return a.useEffect(()=>{d&&(t.success("Order Placed Success"),m(L()),h("/success"))},[d]),a.useEffect(()=>{r&&(t.success("User SuccessFully Logout",{theme:"dark",position:"top-center"}),h("/login"))},[r]),a.useEffect(()=>{n&&t.error(N.message||"Unable to Logout.",{theme:"dark",position:"bottom-center"})},[n]),s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("nav",{class:"navbar bg-blue-500 ",children:s.jsxs("div",{class:"",children:[s.jsx("div",{className:"text-black font-bold text-3xl hidden justify-between md:hidden lg:hidden",children:s.jsx(E,{})}),s.jsx("a",{class:"md:ms-[150px]",href:"",children:s.jsx("img",{className:"h-[40px] w-[100px] m-0 p-0",src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIXOIUHHx0zKuVMDw2tTuLY0QC3TKFrsiAnUB1SlPUx5Zld7hp",alt:""})}),s.jsxs("div",{className:"flex justify-between ms-10",children:[s.jsx("div",{className:"hidden md:flex",children:s.jsx("input",{type:"text",placeholder:"Search",className:"input input-bordered bg-white h-10 w-[500px]"})}),s.jsx("div",{className:"ms-64",children:s.jsx("div",{class:"flex gap-1 text-white",children:s.jsxs("div",{className:"dropdown dropdown-end",children:[s.jsxs("div",{tabIndex:0,role:"button",className:"m-1 flex",children:[" ",s.jsx("span",{className:"mt-3 text-2xl font-bold",children:s.jsx(O,{})}),s.jsx("h6",{className:"text-black text-lg font-semibold mt-2",children:x.name})]}),s.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",children:[s.jsx("li",{children:s.jsx(i,{to:"/details",children:"My Account"})}),s.jsx("li",{children:s.jsxs("button",{onClick:g,className:"flex",children:[s.jsx("p",{className:"text-3xl font-bold text-blue-600",children:s.jsx(I,{})}),s.jsx("h1",{className:"text-lg font-bold hover:text-blue-600 text-white ps-5 me-10",children:"LogOut"}),u&&s.jsx("span",{className:"loading loading-spinner loading-md"})]})})]})]})})})]})]})})}),s.jsx("div",{className:"md:h-[100%] md:w-screen bg-slate-300",children:s.jsxs("div",{className:"md:h-screen md:w-screen bg-slate-300 py-7 px-3",children:[c.length>0?s.jsxs("div",{className:"md:flex justify-between bg-white items-center p-10",children:[s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2",children:c&&c.map(e=>s.jsxs("div",{className:"my-3 card card-compact w-[200px] bg-base-100 shadow-xl",children:[s.jsx("figure",{children:s.jsx("img",{src:`https://e-com-flipkart.onrender.com/${e.image}`,alt:"prodcuts"})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h2",{className:"card-title",children:e.name}),s.jsx("p",{children:e.desc}),s.jsxs("p",{children:[e.price,"/-"]}),s.jsx("div",{className:"card-actions justify-end"})]})]},e.price))}),s.jsx("div",{className:"grid grid-cols-1 top-0 gap-2",children:s.jsx("div",{children:c&&c.map(e=>s.jsx("div",{className:"card card-compact md:w-96 bg-slate-800 shadow-xl my-3",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h2",{className:"card-title",children:"PRICE DETAILS"}),s.jsx("p",{className:"font-semibold text-white text-center",children:e.name}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{children:"Price Item:"}),s.jsx("p",{children:"Discount"}),s.jsx("p",{children:"Total:"})]}),s.jsxs("div",{children:[s.jsxs("p",{children:[e.price,"/-"]}),s.jsxs("p",{children:[o,"/-"]}),s.jsxs("p",{children:[e.price-o,"/-"]})]})]}),s.jsxs("div",{className:"card-actions justify-between",children:[s.jsx("button",{disabled:!0,onClick:p=>m(k({id:e._id})),className:"btn btn-error",children:"Cancel"}),s.jsx("button",{onClick:b,className:"btn btn-primary",children:"Buy Now"})]})]})},e._id))})})]}):s.jsx("div",{className:"flex justify-center bg-white items-center pt-10",children:s.jsxs("div",{className:"",children:[s.jsx("img",{className:"h-32",src:"https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90",alt:""}),s.jsxs("div",{className:"pt-10",children:[s.jsx("p",{className:"text-2xl text-black font-semibold",children:"Your cart is empty!"}),s.jsx("p",{className:"text-black text-xs text-center ms-10",children:"Add items to it now."}),s.jsxs(i,{className:"",to:"/",children:[" ",s.jsx("button",{className:"shadow-md shadow-slate-400 p-2 my-5 w-full bg-blue-600 text-center font-semibold text-white",children:"Shop Now"})]})]})]})}),s.jsx("div",{className:"h-[1px] w-screen p-0 mt-5 bg-slate-500"}),s.jsx("div",{className:" m-20 mb-20",children:s.jsxs("div",{children:[s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:s.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-5 gap-10 text-slate-600",children:[s.jsxs("li",{className:"text-xs flex",children:[s.jsx("span",{className:"",children:"Policies:"}),s.jsx("span",{className:"ms-2",children:"Returns Policy"})]}),s.jsxs("li",{className:"text-xs flex",children:[s.jsx("span",{className:"",children:"Terms "}),s.jsx("span",{className:"ms-2",children:"of use"})]}),s.jsxs("li",{className:"text-xs flex",children:[s.jsx("span",{className:"",children:"Security"}),s.jsx("span",{className:"ms-2"})]}),s.jsxs("li",{className:"text-xs flex",children:[s.jsx("span",{className:"",children:"customer"}),s.jsx("span",{className:"ms-2",children:"Policy"})]}),s.jsxs("li",{className:"text-xs flex",children:[s.jsx("span",{className:"",children:"Infringement©"}),s.jsx("span",{className:"ms-2",children:"2007-2024"})]})]})}),s.jsx("div",{className:"ms-20 mb-24 text-black text-end",children:s.jsx(i,{className:"cursor-pointer hover:underline hover:text-blue-500",children:"Need help?"})})]})})]})})]})};export{z as default};
