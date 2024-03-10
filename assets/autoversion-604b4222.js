import{r as a,l as e,n as t,o as l,R as d}from"./motion-eda4ab28.js";const h=()=>{const[n,i]=a.useState({x:0,y:0});return a.useEffect(()=>{const s=r=>{i({x:r.clientX,y:r.clientY})};return window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[]),e.jsx(t.div,{className:"cursor",animate:{x:n.x+10,y:n.y+10}})};const o={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},p=({children:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",overflowX:"hidden",scrollbarWidth:"thin",scrollbarColor:"#061a30 #0c0c1d"},children:e.jsx("div",{style:{maxWidth:"1366px",width:"100%",overflowY:"scroll",scrollbarWidth:"thin",scrollbarColor:"#061a30 #0c0c1d"},children:n})}),u=({children:n})=>{const i=()=>{const s=document.getElementById("codeSnippet").textContent;navigator.clipboard.writeText(s).then(()=>alert("Code copied to clipboard!")).catch(r=>console.error("Unable to copy code to clipboard",r))};return e.jsxs("div",{id:"codeSnippetContainer",className:"codeSnippetContainer",children:[e.jsx("div",{className:"copy-btn",onClick:i,title:"Copy to clipboard",children:e.jsx("span",{role:"img","aria-label":"Copy",children:"📋"})}),n]})},m=()=>{const n=a.useRef();return e.jsx(p,{children:e.jsxs(t.div,{ref:n,className:"autoversion_tool",variants:o,initial:"initial",whileInView:"animate",style:{overflowY:"auto",maxHeight:"calc(100vh - 100px)"},children:[e.jsxs(t.div,{className:"textContainer",variants:o,children:[e.jsx(t.h1,{variants:o,children:e.jsx(t.b,{whileHover:{color:"orange"},style:{marginBottom:"20px"},children:"AutoVersion Snippet"})}),e.jsx(t.p,{variants:o,style:{marginBottom:"10px"},children:"A GitHub action snippet designed to streamline the process of versioning and release management for software projects following the conventional commits specification outlined at www.conventionalcommits.org."}),e.jsx(t.p,{variants:o,style:{marginBottom:"10px"},children:"By utilizing this snippet, developers can easily initiate a project that automatically updates its version based on the semantic versioning (SemVer) rules."}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"Note:"})," Before adding this snippet, ensure that your repository contains an ",e.jsx("code",{children:"autoVersion.json"})," file in the root path."]})]}),e.jsxs(t.div,{className:"textContainer",variants:o,children:[e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"1. Preparation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ensure your GitHub repository adheres to the conventional commits specification as outlined at ",e.jsx("a",{href:"https://www.conventionalcommits.org",target:"_blank",children:"www.conventionalcommits.org"}),"."]}),e.jsxs("li",{children:["Make sure you have a ",e.jsx("code",{children:"development"})," branch in your repository."]}),e.jsxs("li",{children:["Verify that your repository includes an ",e.jsx("code",{children:"autoVersion.json"})," file in the root path."]})]})]}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"2. Adding the Snippet:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Go to the ",e.jsx("code",{children:".github/workflows"})," directory in your repository."]}),e.jsxs("li",{children:["Create a new file, for example, ",e.jsx("code",{children:"auto-version.yml"}),"."]}),e.jsx("li",{children:"Copy and paste the provided code snippet into this file."})]})]}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"3. Customization:"}),e.jsx("ul",{children:e.jsx("li",{children:"Modify the workflow file as needed to fit your project's requirements. For instance, you can adjust branch names, permissions, or release counts."})})]}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"4. Commit and Push:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Commit the changes to your repository."}),e.jsx("li",{children:"Push the commits to trigger the workflow."})]})]}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"5. Monitor Workflow Execution:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Check the Actions tab in your repository to monitor the execution of the workflow."}),e.jsxs("li",{children:["Any commits made to the ",e.jsx("code",{children:"development"})," branch will now automatically trigger version updates according to your commit messages."]})]})]}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"6. Review and Release:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Review the generated changelog (",e.jsx("code",{children:"autoChangelog.md"}),") and version updates."]}),e.jsxs("li",{children:["Once satisfied, merge the changes into your ",e.jsx("code",{children:"development"})," branch to release the new version."]})]})]}),e.jsxs(t.p,{variants:o,style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"7. Cleanup (Optional):"}),e.jsx("ul",{children:e.jsx("li",{children:"After merging, the workflow will automatically delete the merged branches to keep your repository clean."})})]})]}),"That's it! You've successfully integrated AutoVersion into your GitHub Actions workflow, simplifying versioning and release management for your project.",e.jsx(u,{children:e.jsx("pre",{children:e.jsx("code",{id:"codeSnippet",className:"codeSnippet",children:`
# The version is automatically updated in the 'development' branch
# Ensure 'autoVersion.json' exists for the workflow. Use 'fix' for PATCH and 'feat' for MINOR in commit messages; add 'BREAKING CHANGE' as footer for MAJOR updates.
name: Automatic Version

# Controls when the workflow will activate
on:
  push:
    branches: [ "development" ]
    paths-ignore:
      - '**/autoVersion.json'
      - '**/autoChangelog.md'

  # Allows this workflow to be run manually from the Actions tab
  workflow_dispatch:
  
jobs:

  auto-version:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:

      - name: Checkout code
        uses: actions/checkout@v4
        with:
          ref: 'development'

      - name: Extract version and set as env variable
        id: extract_version
        run: |
          DOT_VERSION=$(jq -r '.version' autoVersion.json)
          OLD_VERSION=$(echo "$DOT_VERSION" | tr '.' '-')
          echo "OLD_VERSION=$OLD_VERSION" >> $GITHUB_ENV

      - name: Create and push branch for calculations
        run: |
          git checkout -b ex-$OLD_VERSION
          git push origin ex-$OLD_VERSION

      - name: Checkout code
        uses: actions/checkout@v4
        with:
          ref: ex-\${{ env.OLD_VERSION }} 

      - name: Conventional Changelog Action
        id: changelog
        uses: TriPSs/conventional-changelog-action@v5
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          release-count: '1000000'
          output-file: autoChangelog.md
          version-file: ./autoVersion.json
          skip-ci: 'false'
          git-branch: ex-\${{ env.OLD_VERSION }}
          git-message: '{version}'
          git-user-name: 'versioning[bot]'

      - name: Pushing to the protected branch 'development'
        id: push-to-protected
        uses: CasperWA/push-protected@v2
        with:
          token: \${{ secrets.GITHUB_TOKEN }}
          branch: development

      - name: Delete merged branch for cleanup
        id: delete-branch
        run: git push origin --delete ex-\${{ env.OLD_VERSION }}
              `})})}),e.jsx(t.p,{variants:o,style:{marginBottom:"10px",display:"flex",justifyContent:"center"},children:e.jsx("a",{href:"https://patreon.com/Vitrua",children:e.jsx("img",{src:"/supportmon.png",alt:"Support",width:"200",style:{marginTop:"10px"}})})})]})})},x={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},v={open:{y:0,opacity:1},closed:{y:50,opacity:0}},g=()=>{const n=["Home","Tools","Guides","Contact","About Us"],i="https://vitrua.top";return e.jsx(t.div,{className:"links",variants:x,children:n.map(s=>e.jsx(t.a,{href:`${i}/#${s}`,variants:v,whileHover:{scale:1.1},whileTap:{scale:.95},children:s},s))})};const j=({setOpen:n})=>e.jsx("button",{onClick:()=>n(i=>!i),children:e.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e.jsx(t.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e.jsx(t.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),e.jsx(t.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),y={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},f=()=>{const[n,i]=a.useState(!1),s=a.useRef(null);return a.useEffect(()=>{const r=c=>{s.current&&!s.current.contains(c.target)&&i(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[]),e.jsxs(t.div,{className:"sidebar",ref:s,animate:n?"open":"closed",children:[e.jsx(t.div,{className:"bg",variants:y,children:e.jsx(g,{})}),e.jsx(j,{setOpen:i})]})};const w=()=>e.jsxs("div",{className:"navbar",children:[e.jsx(f,{}),e.jsxs("div",{className:"wrapper",children:[e.jsx(t.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:"Welcome to vitrua.top only official website"}),e.jsxs("div",{className:"social",children:[e.jsx("a",{href:"https://patreon.com/Vitrua",children:e.jsx("img",{src:"/patreon.png",alt:""})}),e.jsx("a",{href:"https://instagram.com/vitruastudio",children:e.jsx("img",{src:"/instagram.png",alt:""})})]})]})]}),b=()=>e.jsxs("div",{children:[e.jsx(h,{}),e.jsxs("section",{id:"Autoversion Tool",children:[e.jsx(w,{}),e.jsx(m,{})]})]});l.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(b,{})}));
