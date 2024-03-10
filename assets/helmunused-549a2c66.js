import{r as o,l as e,n as t,o as c,R as d}from"./motion-eda4ab28.js";const p=()=>{const[i,r]=o.useState({x:0,y:0});return o.useEffect(()=>{const s=a=>{r({x:a.clientX,y:a.clientY})};return window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[]),e.jsx(t.div,{className:"cursor",animate:{x:i.x+10,y:i.y+10}})};const n={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},h=({children:i})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",overflowX:"hidden",scrollbarWidth:"thin",scrollbarColor:"#061a30 #0c0c1d"},children:e.jsx("div",{style:{maxWidth:"1366px",width:"100%",overflowY:"scroll",scrollbarWidth:"thin",scrollbarColor:"#061a30 #0c0c1d"},children:i})}),m=({children:i})=>{const r=()=>{const s=document.getElementById("codeSnippet").textContent;navigator.clipboard.writeText(s).then(()=>alert("Code copied to clipboard!")).catch(a=>console.error("Unable to copy code to clipboard",a))};return e.jsxs("div",{id:"codeSnippetContainer",className:"codeSnippetContainer",children:[e.jsx("div",{className:"copy-btn",onClick:r,title:"Copy to clipboard",children:e.jsx("span",{role:"img","aria-label":"Copy",children:"📋"})}),i]})},u=()=>{const i=o.useRef();return e.jsx(h,{children:e.jsxs(t.div,{ref:i,className:"helmunused_tool",variants:n,initial:"initial",whileInView:"animate",style:{overflowY:"auto",maxHeight:"calc(100vh - 100px)"},children:[e.jsxs(t.div,{className:"textContainer",variants:n,children:[e.jsx(t.h1,{variants:n,children:e.jsx(t.b,{whileHover:{color:"orange"},style:{marginBottom:"20px"},children:"Helm Chart Unused Values Finder"})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:"This Python script helps identify unused values in Helm chart templates. By placing it in the root directory of your Helm chart and running it with Python 3, you can efficiently manage your chart's configuration."}),e.jsxs(t.p,{variants:n,style:{marginBottom:"10px"},children:["The script compares the keys defined in your Helm values file (typically named ",e.jsx("code",{children:"values.example.yaml"}),") with those referenced in your chart's templates. It then prints out any keys that are defined but not utilized in the templates, facilitating cleanup and optimization."]})]}),e.jsxs(t.div,{className:"textContainer",variants:n,children:[e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsx("strong",{children:"Instructions:"})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsx("strong",{children:"1. Preparation:"})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Ensure you have Python 3 installed on your system."}),e.jsx("li",{children:"Place the script in the root directory of your Helm chart."}),e.jsxs("li",{children:["Ensure your Helm values file is named ",e.jsx("code",{children:"values.example.yaml"}),". If not, adjust the ",e.jsx("code",{children:"values_filename"})," variable in the script."]}),e.jsxs("li",{children:["Make sure your Helm templates are stored in a directory named ",e.jsx("code",{children:"templates"}),". If not, update the ",e.jsx("code",{children:"templates_dirname"})," variable in the script."]}),e.jsxs("li",{children:["If there are specific keys you want to exclude from the analysis, update the ",e.jsx("code",{children:"exclude_key_word"})," variable in the script accordingly."]})]})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsx("strong",{children:"2. Run the Script:"})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Open a terminal or command prompt."}),e.jsx("li",{children:"Navigate to the root directory of your Helm chart."}),e.jsxs("li",{children:["Execute the script by running ",e.jsx("code",{children:"python script_name.py"})," (replace ",e.jsx("code",{children:"script_name.py"})," with the actual name of your script)."]})]})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsx("strong",{children:"3. Review Output:"})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"The script will print any keys found in your values file that are not used in your templates."}),e.jsx("li",{children:"Review the output to identify and remove any unused values from your Helm chart configuration."})]})})]}),e.jsx(m,{children:e.jsx("pre",{children:e.jsx("code",{id:"codeSnippet",className:"codeSnippet",children:`
import os
import yaml

# Set the variables for your environment
values_filename = 'values.example.yaml'
templates_dirname = 'templates'
exclude_key_word = 'xxxxfoobarxxxx'

# Function to get all keys from a dictionary
def get_keys_from_dict(dictionary, current_key='', keys_list=None):
    if keys_list is None:
        keys_list = []
    for key, value in dictionary.items():
        new_key = current_key + '.' + str(key) if current_key else str(key)
        if isinstance(value, dict):
            get_keys_from_dict(value, new_key, keys_list)
        else:
            keys_list.append(new_key)
    return keys_list

# Function to get the content of a file
def get_file_content(file_path):
    with open(file_path, 'r') as file:
        return file.read()

# Function to get the content of all YAML files in a directory and its subdirectories
def get_files_content(directory_path):
    content = ''
    for root, dirs, files in os.walk(directory_path):
        for filename in files:
            if filename.endswith(".yaml") or filename.endswith(".yml"):
                content += get_file_content(os.path.join(root, filename))
    return content

# Open and read the file specified by the values_filename variable
with open(values_filename, 'r') as file:
    yaml_dict = yaml.safe_load(file)
    keys_list = get_keys_from_dict(yaml_dict)

# Get the content of all YAML files in the directory specified by the templates_dirname variable
templates_content = get_files_content(templates_dirname)

# Create a list of keys that do not appear in the templates content and do not contain the word 'xxxxfoobarxxxx' and print it
missing_keys = [key for key in keys_list if key not in templates_content and exclude_key_word not in key]
print(missing_keys)
              `})})}),e.jsx(t.p,{variants:n,style:{marginBottom:"10px",display:"flex",justifyContent:"center"},children:e.jsx("a",{href:"https://patreon.com/Vitrua",children:e.jsx("img",{src:"/supportmon.png",alt:"Support",width:"200",style:{marginTop:"10px"}})})})]})})},y={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},x={open:{y:0,opacity:1},closed:{y:50,opacity:0}},f=()=>{const i=["Home","Tools","Guides","Contact","About Us"],r="https://vitrua.top";return e.jsx(t.div,{className:"links",variants:y,children:i.map(s=>e.jsx(t.a,{href:`${r}/#${s}`,variants:x,whileHover:{scale:1.1},whileTap:{scale:.95},children:s},s))})};const v=({setOpen:i})=>e.jsx("button",{onClick:()=>i(r=>!r),children:e.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e.jsx(t.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e.jsx(t.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),e.jsx(t.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),j={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},g=()=>{const[i,r]=o.useState(!1),s=o.useRef(null);return o.useEffect(()=>{const a=l=>{s.current&&!s.current.contains(l.target)&&r(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),e.jsxs(t.div,{className:"sidebar",ref:s,animate:i?"open":"closed",children:[e.jsx(t.div,{className:"bg",variants:j,children:e.jsx(f,{})}),e.jsx(v,{setOpen:r})]})};const _=()=>e.jsxs("div",{className:"navbar",children:[e.jsx(g,{}),e.jsxs("div",{className:"wrapper",children:[e.jsx(t.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:"Welcome to vitrua.top only official website"}),e.jsxs("div",{className:"social",children:[e.jsx("a",{href:"https://patreon.com/Vitrua",children:e.jsx("img",{src:"/patreon.png",alt:""})}),e.jsx("a",{href:"https://instagram.com/vitruastudio",children:e.jsx("img",{src:"/instagram.png",alt:""})})]})]})]}),k=()=>e.jsxs("div",{children:[e.jsx(p,{}),e.jsxs("section",{id:"Helmunused Tool",children:[e.jsx(_,{}),e.jsx(u,{})]})]});c.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(k,{})}));
