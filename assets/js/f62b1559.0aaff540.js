"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2110],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3902:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},u=void 0,c={unversionedId:"Examples/Integrate - AzureML",id:"Examples/Integrate - AzureML",isDocsHomePage:!1,title:"Integrate - AzureML",description:"FLAML can be used together with AzureML and mlflow.",source:"@site/docs/Examples/Integrate - AzureML.md",sourceDirName:"Examples",slug:"/Examples/Integrate - AzureML",permalink:"/FLAML/docs/Examples/Integrate - AzureML",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/Integrate - AzureML.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoML for XGBoost",permalink:"/FLAML/docs/Examples/AutoML-for-XGBoost"},next:{title:"Integrate - Scikit-learn Pipeline",permalink:"/FLAML/docs/Examples/Integrate - Scikit-learn Pipeline"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Enable mlflow in AzureML workspace",id:"enable-mlflow-in-azureml-workspace",children:[],level:3},{value:"Start an AutoML run",id:"start-an-automl-run",children:[],level:3}],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FLAML can be used together with AzureML and mlflow."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Install the ","[azureml]"," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "flaml[azureml]"\n')),(0,o.kt)("p",null,"Setup a AzureML workspace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Workspace\n\nws = Workspace.create(name='myworkspace', subscription_id='<azure-subscription-id>',resource_group='myresourcegroup')\n")),(0,o.kt)("h3",{id:"enable-mlflow-in-azureml-workspace"},"Enable mlflow in AzureML workspace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mlflow\nfrom azureml.core import Workspace\n\nws = Workspace.from_config()\nmlflow.set_tracking_uri(ws.get_mlflow_tracking_uri())\n")),(0,o.kt)("h3",{id:"start-an-automl-run"},"Start an AutoML run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml.data import load_openml_dataset\n\n# Download [Airlines dataset](https://www.openml.org/d/1169) from OpenML. The task is to predict whether a given flight will be delayed, given the information of the scheduled departure.\nX_train, X_test, y_train, y_test = load_openml_dataset(dataset_id=1169, data_dir="./")\n\nfrom flaml import AutoML\n\nautoml = AutoML()\nsettings = {\n    "time_budget": 60,  # total running time in seconds\n    "metric": "accuracy",  # metric to optimize\n    "task": "classification",  # task type  \n    "log_file_name": "airlines_experiment.log",  # flaml log file\n}\nmlflow.set_experiment("flaml")  # the experiment name in AzureML workspace\nwith mlflow.start_run() as run:  # create a mlflow run\n    automl.fit(X_train=X_train, y_train=y_train, **settings)\n')),(0,o.kt)("p",null,'The metrics in the run will be automatically logged in an experiment named "flaml" in your AzureML workspace.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/integrate_azureml.ipynb"},"Link to notebook")," | ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/integrate_azureml.ipynb"},"Open in colab")))}m.isMDXComponent=!0}}]);