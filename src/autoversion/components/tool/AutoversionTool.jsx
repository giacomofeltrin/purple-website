import { useRef, useState } from "react";
import "./autoversiontool.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Container = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'hidden',
      scrollbarWidth: 'thin',
      scrollbarColor: '#061a30 #0c0c1d'
    }}>
      <div style={{
        maxWidth: '1366px',
        width: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarColor: '#061a30 #0c0c1d'
      }}>
        {children}
      </div>
    </div>
  );
};

const CodeSnippetContainer = ({ children }) => {
  const copyCode = () => {
    const codeToCopy = document.getElementById("codeSnippet").textContent;
    navigator.clipboard.writeText(codeToCopy)
      .then(() => alert("Code copied to clipboard!"))
      .catch((error) => console.error("Unable to copy code to clipboard", error));
  };

  return (
    <div id="codeSnippetContainer" className="codeSnippetContainer">
      <div className="copy-btn" onClick={copyCode} title="Copy to clipboard">
        <span role="img" aria-label="Copy">📋</span>
      </div>
      {children}
    </div>
  );
};

const AutoversionTool = () => {
  const ref = useRef();

  return (
    <Container>
      <motion.div
        ref={ref}
        className="autoversion_tool"
        variants={variants}
        initial="initial"
        whileInView="animate"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }} // Adjust the maxHeight value as needed
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}><motion.b whileHover={{color:"orange"}} style={{ marginBottom: '20px' }}>AutoVersion Snippet</motion.b></motion.h1>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            A GitHub action snippet designed to streamline the process of versioning and release management for software projects following the conventional commits specification outlined at www.conventionalcommits.org. 
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            By utilizing this snippet, developers can easily initiate a project that automatically updates its version based on the semantic versioning (SemVer) rules.
          </motion.p>
        </motion.div>
        
        {/* Code snippet window and copy button */}
        <CodeSnippetContainer>
          <pre>
            <code id="codeSnippet" className="codeSnippet">
              {`
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
        uses: actions/checkout@v3
        with:
          ref: ex-$\{{ env.OLD_VERSION }} 

      - name: Conventional Changelog Action
        id: changelog
        uses: TriPSs/conventional-changelog-action@v5
        with:
          github-token: $\{{ secrets.GITHUB_TOKEN }}
          release-count: '1000000'
          output-file: autoChangelog.md
          version-file: ./autoVersion.json
          skip-ci: 'false'
          git-branch: ex-$\{{ env.OLD_VERSION }}
          git-message: '{version}'
          git-user-name: 'versioning[bot]'

      - name: Pushing to the protected branch 'development'
        id: push-to-protected
        uses: CasperWA/push-protected@v2
        with:
          token: $\{{ secrets.GITHUB_TOKEN }}
          branch: development

      - name: Delete merged branch for cleanup
        id: delete-branch
        run: git push origin --delete ex-$\{{ env.OLD_VERSION }}
              `}
            </code>
          </pre>
        </CodeSnippetContainer>
        <motion.p variants={variants} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
            <a href="https://patreon.com/Vitrua">
                <img src="/supportmon.png" alt="Support" width="200" style={{ marginTop: '10px' }} />
            </a>
        </motion.p>
      </motion.div>
    </Container>
  );
};

export default AutoversionTool;
